import { useEffect, useState, useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import Parser from 'html-react-parser';
import { UserContext } from '../contexts/UserContext';
import { RefreshContext } from '../contexts/RefreshContext';
import Loading from '../components/Loading/Loading';
import '../styles/PostPage.css';

function PostPage() {
    const [redirect, setRedirect] = useState(false);
    const [postInfo, setPostInfo] = useState(null);
    const { setRefreshPosts } = useContext(RefreshContext);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();

    const handleDeletePost = async () => {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post/${id}`, {
            method: "DELETE",
            credentials: "include"
        });

        if (response.ok) {
            setRefreshPosts(true);
            setRedirect(true);
        }
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (redirect) return <Navigate to="/" />

    if (!postInfo) return <Loading />;

	return (
		<div className="post-page">
            { userInfo?.id === postInfo.author._id && (
                <div className="post-options">
                    <Link to={`/edit/${postInfo._id}`} className="options-button">Edit post</Link>
                    <Link to={'/'} onClick={handleDeletePost} className="options-button">Delete post</Link>
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