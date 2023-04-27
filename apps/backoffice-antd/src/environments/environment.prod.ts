export const environment = {
  production: true,
  firebase: {
    apiKey: process.env['NX_FIREBASE_API_KEY'],
    authDomain: process.env['NX_FIREBASE_AUTH_DOMAIN_ANTD'],
    projectId: process.env['NX_FIREBASE_PROJECT_ID'],
    storageBucket: process.env['NX_FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: process.env['NX_FIREBASE_MESSAGING_SENDER_ID'],
    appId: process.env['NX_FIREBASE_APP_ID'],
  },
};
