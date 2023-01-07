import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvTx5bgGBPTprPNfL1xT4Iz5TPkcTXu9A",
  authDomain: "financial-market-news-bl-b163b.firebaseapp.com",
  projectId: "financial-market-news-bl-b163b",
  storageBucket: "financial-market-news-bl-b163b.appspot.com",
  messagingSenderId: "398475767981",
  appId: "1:398475767981:web:48ade4feaba55b0e3dd624"
};
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const database = getFirestore();
export async function getPosts(){
    const postsCollection = collection(database,'posts');
    const postsDoc = await getDocs(postsCollection);
    const posts = postsDoc.docs.map(doc=>doc.data());
    return posts;
}