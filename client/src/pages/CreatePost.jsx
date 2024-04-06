import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Navigate } from 'react-router-dom';
import '../styles/CreatePost.css';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [glimpse, setGlimpse] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (event) => {
        const data = new FormData();
        data.set("title", title);
        data.set("category", category);
        data.set("glimpse", glimpse);
        data.set("file", files[0]);

        event.preventDefault();
        const response = await fetch("http://localhost:4000/post", {
            method: "POST",
            body: data,
            credentials: "include"
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
                type="category" 
                placeholder={"Category"} 
                value={category}
                onChange={event => setCategory(event.target.value)}
            />
			<input 
                type="file"
                onChange={event => setFiles(event.target.files)} 
            />
			<ReactQuill 
                value={glimpse}
                onChange={newValue => setGlimpse(newValue)}
            />
			<button>Create post</button>
		</form>
  )
}

export default CreatePost;
