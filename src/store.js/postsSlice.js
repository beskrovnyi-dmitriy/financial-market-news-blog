import { createSlice } from "@reduxjs/toolkit";
import {database} from '../firebase';
import { updateDoc, doc, arrayUnion, setDoc } from "firebase/firestore";

const initialState = { posts: [], };

const postsSlice = createSlice({
    name: 'posts', initialState, reducers: {
        showPosts(state, action) {
            state.posts = action.payload;
        },
        addNewComment(state, action){
            const postRef = doc(database, "posts", action.payload.id);
            updateDoc(postRef, {
                comments: arrayUnion(action.payload.value)
            }).catch(error => {console.log(error); });
        },
        addNewArticle(state, action){
            state.posts.unshift(action.payload);
            setDoc(doc(database, "posts", action.payload.id), action.payload);
        }
    }
});

export const { showPosts, addNewComment, addNewArticle } = postsSlice.actions;
export default postsSlice.reducer;