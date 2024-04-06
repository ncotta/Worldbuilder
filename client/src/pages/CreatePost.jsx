import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Navigate } from 'react-router-dom';
import '../styles/CreatePost.css';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(true);

    const createNewPost = async (event) => {
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", files[0]);

        event.preventDefault();
        const response = await fetch("http://localhost:4000/post", {
            method: "POST",
            body: data
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to="/" />
    }

	return (
		<form className="create-form" onSubmit={createNewPost}>
			<input 
                type="title" 
                placeholder={"Title"} 
                value={title} 
                onChange={event => setTitle(event.target.value)} 
            />
			<input 
                type="summary" 
                placeholder={"Summary"} 
                value={summary}
                onChange={event => setSummary(event.target.value)}
            />
			<input 
                type="file"
                onChange={event => setFiles(event.target.files)} 
            />
			<ReactQuill 
                value={content}
                onChange={newValue => setContent(newValue)}
            />
			<button>Create post</button>
		</form>
  )
}

export default CreatePost;
