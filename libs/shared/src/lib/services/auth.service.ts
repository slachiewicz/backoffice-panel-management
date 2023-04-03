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
import {catchError, delay, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User | null>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;
  private usersCollection: CollectionReference;

  constructor(
    private auth: Auth,
    private db: Firestore,
    private router: Router
  ) {
    this.user$ = user(this.auth).pipe(shareReplay(1));
    this.usersCollection = collection(this.db, 'users');
    this.isAuthenticated$ = this.user$.pipe(map((user) => !!user));
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1000));
  }

  public signInWithGoogle() {
    from(signInWithPopup(this.auth, new GoogleAuthProvider()))
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        })
      )
      .subscribe((result) => {
        this.handleAuthSuccess(result);
      });
  }

  public signInWithFacebook() {
    from(signInWithPopup(this.auth, new FacebookAuthProvider()))
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        })
      )
      .subscribe((result) => {
        this.handleAuthSuccess(result);
      });
  }

  public login(email: string, password: string) {
    from(signInWithEmailAndPassword(this.auth, email, password))
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        })
      )
      .subscribe((result) => {
        this.handleAuthSuccess(result);
      });
  }

  public async logout($event?: Event) {
    if ($event) $event.preventDefault();

    await signOut(this.auth);

    await this.router.navigateByUrl('/login');
  }

  private handleAuthSuccess(result: UserCredential) {
    this.setUserData(result.user);
    authState(this.auth).subscribe((user) => {
      if (user) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  private async setUserData(user: any) {
    const userRef: DocumentReference = doc(this.db, `users/${user.uid}`);
    const userData: IUser = {
      email: user.email,
      displayName: user.displayName,
    };
    return await setDoc(userRef, userData, {
      merge: true,
    });
  }
}
