import React, { useState } from 'react';
import Cuttr from 'Cuttr';
import '../styles/Post.css';

function Post({ thumbnail, title, category, time, glimpse }) {
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
                <img src={thumbnail} alt="" />	
            </div>
            <div className="text">
                <h2 
                    className="title"
                    style={{ 
                        color: isMouseOver ? "transparent" : "#FFFFFF",
                        backgroundImage: isMouseOver ? `url(${thumbnail})`: "",
                        transition: "color 1.5s ease"
                    }}
                >{title}</h2>
                <div className="info">
                    <h4 className="category">{category}</h4>
                    <time>{time}</time>
                </div>
                <p className="glimpse">{glimpse}</p>
            </div>
		</div>
	)
}

export default Post;
