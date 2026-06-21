import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Parser from 'html-react-parser';
import Loading from '../../components/Loading/Loading';
import './AnthologyPage.css';

function AnthologyPage(){
    const { id } = useParams();
    const navigate = useNavigate();

    const postIds = [ 
        "6838d468abfa3a97ebbd9864", 
        "6866fd609ea96b813926b2b2", 
        "69f412d3eabdf4ccd27dc7fa", 
        "6a06bf7568773083a44bc4c9" 
    ]

    const [redirect, setRedirect] = useState(false);
    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, [id]);

    const { currentIndex, prevId, nextId } = useMemo(() => {
        const currentIndex = postIds.indexOf(id);

        return {
            currentIndex,
            prevId: currentIndex > 0 ? postIds[currentIndex - 1] : null,
            nextId: currentIndex < postIds.length - 1 ? postIds[currentIndex + 1] : null,
        }
    }, [id, postIds]);

    const goToPrev = () => {
        if (prevId) {
            navigate(`/stories/post/${prevId}`);
        }
    }

    const goToNext = () => {
        if (nextId) {
            navigate(`/stories/post/${nextId}`);
        }
    }

    if (redirect) return <Navigate to="/" />

    if (!postInfo) return <Loading />;

	return (
		<div className="anthology-page">
            <div className="image">
                <img src={`${import.meta.env.VITE_SERVER_URL}/${postInfo.cover}`} alt="" />
                <div className="overlay-box">
                    <h1 className="title">{postInfo.title}</h1>
                </div>
            </div>
            <div className="glimpse">{Parser(postInfo.glimpse)}</div>
            <div className="navigation">
                <button onClick={goToPrev} disabled={!prevId}>←</button>
                <button onClick={goToNext} disabled={!nextId}>→</button>
            </div>
        </div>
	)
}

export default AnthologyPage;  