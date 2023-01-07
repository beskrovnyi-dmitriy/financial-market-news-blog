import { Link } from "react-router-dom";
import { getPosts } from "../firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPosts, addNewArticle } from "../store.js/postsSlice";
import '../App.css';

function Articles() {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.postsReducer.posts)
    useEffect(() => {
        getPosts()
            .then(posts => dispatch(showPosts(posts)))
            .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [isCreate, setIsCreate] = useState(false);
    function openModal() {
        setIsCreate(value=>!value);
    }
    function addArticle(h, desc){
        const article = {
            id: String(Date.now()),
            title: h,
            text: desc,
            comments: []
        }
        setTitle("");
        setText("");
        setIsCreate(value=>!value);
        dispatch(addNewArticle(article));
    }
    return (
        <div>
            <div className="top-panel">
                <button onClick={openModal}>Create</button>
            </div>
            <div>
                <ul className="cards-articles">
                    {articles.map(({ id, title, text }) => {
                        return (
                            <div key={id}>
                                <li className="post"><Link to={`/${id}`}><h6>{title}</h6><p>{text}</p></Link></li>
                            </div>
                        )
                    })}
                </ul>
            </div>

            {isCreate && <div className="createBack">
                <div className="create-article">
                    <h5>Article</h5>
                    <label htmlFor="title">Title: </label><input type="text" id="title" value={title} onChange={e=>setTitle(e.target.value)}/><br />
                    <label htmlFor="text">Title: </label><textarea type="text" id="text" cols={100} rows={5} value={text} onChange={e=>setText(e.target.value)}/>
                    <button onClick={()=>addArticle(title,text)}>Create</button>
                </div>
            </div>}
        </div>
    )
}
export default Articles;