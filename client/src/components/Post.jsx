import React, { useState } from 'react';
import Cuttr from 'Cuttr';
import Parser from 'html-react-parser';
import { format } from 'date-fns';
import '../styles/Post.css';

function Post({ cover, title, category, createdAt, glimpse }) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }

	let summary = new Cuttr('.glimpse', {
		truncate: 'words',
		length: 73
	});

	return (
		<div className="post" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="image">
                <img src={`http://localhost:4000/${cover}`} alt="" />	
            </div>
            <div className="text">
                <h2 
                    className="title"
                    style={{ 
                        color: isMouseOver ? "transparent" : "#FFFFFF",
                        backgroundImage: isMouseOver ? `url(http://localhost:4000/${cover})`: "",
                        transition: "color 1.5s ease"
                    }}
                >{title}</h2>
                <div className="info">
                    <h4 className="category">{category}</h4>
                    <time>{format(new Date(createdAt), "MMM d, yyyy h:mm a")}</time>
                </div>
                <p className="glimpse">{Parser(glimpse)}</p>
            </div>
		</div>
	)
}

export default Post;
