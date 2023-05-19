import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // eslint-disable-next-line no-dupe-keys
  databaseURL:
    'https://sunny-a2e81-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}
export function logout() {
  signOut(auth).catch(console.error);
}
export async function onUserStateChange(setUser) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    setUser(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, 'admis'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch(console.error);
}
