import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import Parser from 'html-react-parser';
import { UserContext } from '../components/UserContext';
import '../styles/PostPage.css';

function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!postInfo) return "Loading...";

	return (
		<div className="post-page">
            { userInfo?.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link to={`/edit/${postInfo._id}`} className="edit-button">Edit this post</Link>
                </div>
            )}
            <div className="image">
                <img src={`${import.meta.env.VITE_SERVER_URL}/${postInfo.cover}`} alt="" />
                <div className="overlay-box">
                    <h1 className="title">{postInfo.title}</h1>
                </div>
            </div>
            <div className="info">
                <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy h:mm a")}</time>   
                <div className="category">{postInfo.category}</div>
            </div>
            <div className="glimpse">{Parser(postInfo.glimpse)}</div>
        </div>
	)
}

export default PostPage;