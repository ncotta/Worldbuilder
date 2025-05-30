import { useState } from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import { format } from 'date-fns';
import './Post.css';

function Post({ _id, cover, title, category, createdAt, glimpse }) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }

	return (
        <Link to={`/post/${_id}`}>
            <div className="post" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="image">
                    <img src={`${import.meta.env.VITE_SERVER_URL}/${cover}`} alt="" />	
                </div>
                <div className="text">
                    <h2 
                        className="title"
                        style={{ 
                            color: isMouseOver ? "transparent" : "#FFFFFF",
                            backgroundImage: isMouseOver ? `url(${import.meta.env.VITE_SERVER_URL}/${cover})`: "",
                            transition: "color 1.5s ease"
                        }}
                    >{title}</h2>
                    <div className="info">
                        <h4 className="category">{category}</h4>
                        <time>{format(new Date(createdAt), "MMM d, yyyy h:mm a")}</time>
                    </div>
                    <div className="glimpse">{Parser(glimpse)}</div>
                </div>
            </div>
        </Link>
	)
}

export default Post;
