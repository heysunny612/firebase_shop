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
import { getDatabase, ref, get, child, set, update } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

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
const db = getDatabase(app);

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
    const updatedUser = user ? await getAdmin(user) : null;
    setUser(updatedUser);
  });
};

//어드민 데이터 가져오기
const getAdmin = async (user) => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `admins`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = Object.values(snapshot.val()).map((value) => value);
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch(console.error);
};

//새로운 상품등록
export const createNewProduct = async (product, image) => {
  const id = uuidv4();
  set(ref(db, `products/${id}`), {
    ...product,
    id,
    image,
    options: product.options.split(","),
    price: parseInt(product.price),
  })
    .then(() => {
      // Data saved successfully!
      console.log("성공");
    })
    .catch(console.error);
};
