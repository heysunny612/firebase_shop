import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

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
const dbRef = ref(getDatabase());
const db = getDatabase();

//기존 이메일&패스워드로 회원가입
export const createUser = async ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password).catch(
    console.error
  );
};

//이메일&패스워드로 로그인
export const signIn = async ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password).catch(console.error);
};

//구글로 로그인
export const signWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  return signInWithPopup(auth, provider).catch(console.error);
};
//로그아웃
export const logout = () => {
  signOut(auth).catch(console.error);
};

//user가 있다면, setUser에 업데이트
export const authStateObserver = async (setUser, setIsGettingUser) => {
  return auth.onAuthStateChanged(function (user) {
    if (user) {
      adminUser(user).then(setUser).then(setIsGettingUser(true));
    } else {
      setUser(null);
      setIsGettingUser(true);
    }
  });
};

//db에 등록된 admin 아이디와 같은지 true ,false 값이 들어있는 객체반환
const adminUser = async (user) => {
  return get(child(dbRef, `admins`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admin = snapshot.val();
        const isAdmin = admin.includes(user.uid);
        return { ...user, isAdmin };
      }
      console.log('No data available');
      return user;
    })
    .catch(console.error);
};

//파이어 베이스에 PRODUCT 업로드
export const uploadProductFirebase = async (product, imgURL) => {
  const id = uuidv4();
  return await set(ref(db, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    options: product.options.split(','),
    imgURL,
  });
};

//파이어 베이스 PRODUCT 읽기
export const getProductFromFirebase = async () => {
  return get(child(dbRef, 'products/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

//파이어 베이스에 CART 업로드
export const uploadCartFirebase = async (userId, product) => {
  return await set(ref(db, `cart/${userId}/${product.id}`), product);
};

//파이어 베이스 CART 읽기
export const getCartFromFirebase = async (user) => {
  return get(child(dbRef, `cart/${user.uid}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const items = snapshot.val() || {};
        return Object.values(items);
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const removeFromCart = (userId, productId) => {
  return remove(ref(db, `cart/${userId}/${productId}`));
};
