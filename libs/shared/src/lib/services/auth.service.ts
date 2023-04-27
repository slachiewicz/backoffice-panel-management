import {Injectable} from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  user,
  signOut,
  authState,
  UserCredential,
  User,
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  CollectionReference,
  DocumentReference,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import {from, Observable, shareReplay} from 'rxjs';
import IUser from '../models/user.model';
import {catchError, delay, filter, map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User | null>;
  public isAuthenticated$: Observable<boolean>;
  private usersCollection: CollectionReference;

  constructor(
    private auth: Auth,
    private db: Firestore,
    private router: Router
  ) {
    this.user$ = user(this.auth).pipe(shareReplay(1));
    this.usersCollection = collection(this.db, 'users');
    this.isAuthenticated$ = this.user$.pipe(map((user) => !!user));
  }

  public signInWithGoogle(): Observable<User> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()))
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        }),
        switchMap((result) => this.handleAuthSuccess(result))
      )
  }

  public signInWithFacebook(): Observable<User> {
    return from(signInWithPopup(this.auth, new FacebookAuthProvider()))
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        }),
        switchMap((result) => this.handleAuthSuccess(result))
      )
  }

  public login(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError((error) => {
        throw new Error(error.message);
      }),
      switchMap((result) => this.handleAuthSuccess(result))
    );
  }

  public logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  private handleAuthSuccess(result: UserCredential): Observable<User> {
    return this.setUserData(result.user).pipe(
      switchMap(() =>
        authState(this.auth).pipe(
          filter((user) => !!user),
          map((user) => user as User)
        )
      )
    );
  }

  private setUserData(user: any): Observable<void> {
    const userRef: DocumentReference = doc(this.db, `users/${user.uid}`);
    const userData: IUser = {
      email: user.email,
      displayName: user.displayName,
    };
    return from(
      setDoc(userRef, userData, {
        merge: true,
      })
    );
  }
}
