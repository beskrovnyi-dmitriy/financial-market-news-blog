import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewComment } from '../store.js/postsSlice';
import { getPosts } from '../firebase';
import '../App.css';

function Article() {
    let articleId = useParams().articleId;
    const [post, setPost] = useState(null);
    const [inputComment, setInputComment] = useState('');
    const [comments, setComments] = useState(post?.comments);

    useEffect(()=>{
        getPosts()
        .then(posts=>posts.find(article=>article.id==articleId))
        .then(post=>{setPost(post); setComments(post.comments)})
        .catch(er=>console.log(er))
    }, [articleId]);
    const dispatch = useDispatch();

    function enterHandle(e,value, id){
        if(e.code==='Enter'){
            addComment(value, id);
        }
    }
    function addComment(value, id){
        if(!value) return;
        if(comments.includes(value)) return;
        setComments(oldComments => [...oldComments, value]);
        setInputComment("");
        dispatch(addNewComment({value,id}));
    }
 
    return (
        <div className='article'>
            {post && <div className="card mb-3" id={articleId}>
                <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text">{post.text}</p>
                </div>
            </div>}
            <div className="comments">
                <h4>{`Analyst's Comment:`}</h4>
                <input className='input-comment' autoFocus type="text" value={inputComment} onChange={e=>setInputComment(e.target.value)} onKeyDown={(e)=>enterHandle(e, inputComment, articleId)}/>
                <button onClick={()=>addComment(inputComment, articleId)}>add comment</button>
                <br/>
                {comments && <ul className="commentsList">{
                    comments.map(comment=>{
                    return (<div key={comment}>
                        <div  className='commentBox'><img src='account.png'/><li className="comment">{comment}</li></div>
                        <hr style={{width:200}}/>
                    </div>)
                })}</ul>}
            </div>     
        </div>
    )
}
export default Article;
