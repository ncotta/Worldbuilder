import React from 'react';
import Cuttr from 'Cuttr';
import '../styles/Post.css';

function Post({ thumbnail, title, category, time, glimpse }) {
	let summary = new Cuttr('.glimpse', {
		truncate: 'words',
		length: 50
	});

	return (
		<div className="post">
            <div className="image">
                <img src={thumbnail} alt="" />	
            </div>
            <div className="text">
                <h2 className="title">{title}</h2>
                <p className="info">
                    <h4 className="category">{category}</h4>
                    <time>{time}</time>
                </p>
                <p className="glimpse">{glimpse}</p>
            </div>
		</div>
	)
}

export default Post;
