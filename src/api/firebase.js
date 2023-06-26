import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

//구글로 로그인
export const loginWithSocial = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  signInWithPopup(auth, provider).catch(console.error);
};

//로그아웃
export const logout = () => {
  signOut(auth).catch(console.error);
};

//계정만들기
export const createAccount = async ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password) //
    .catch(console.error);
};

//기존 사용자 로그인
export const loginWithEamil = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password) //
    .catch(console.error);
};

//로그인 상태 유지
export const authState = (setUser) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const admins = await getAdmin();
      const isAdmin = user && admins.includes(user.uid);
      setUser({ ...user, admin: isAdmin });
    }
  });
};

//어드민 설정
export const getAdmin = async () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `admins`))
    .then((snapshot) => Object.values(snapshot.val()).map((value) => value))
    .catch(console.error);
};
