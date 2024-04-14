import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';
import '../styles/CreatePost.css';

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
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post`, {
            method: "POST",
            body: data,
            credentials: "include"
        });

        if (response.ok) setRedirect(true);
    }

    if (redirect) return <Navigate to="/" />

	return (
		<form className="create-form" onSubmit={createNewPost}>
			<input 
                type="title" 
                placeholder={"Title"} 
                value={title} 
                onChange={event => setTitle(event.target.value)} 
            />
            <select value={category} onChange={event => setCategory(event.target.value)} >
                <option value="" disabled hidden>Category</option>
                <option value="Civilization">Civilization</option>
                <option value="Beast">Beast</option>
                <option value="Magic">Magic</option>
                <option value="Divinity">Divinity</option>
                <option value="People">People</option>
            </select>
			<input 
                type="file"
                onChange={event => setFiles(event.target.files)} 
            />
            <Editor 
                value={glimpse}
                onChange={setGlimpse}
            />
			<button className="create-button">Create post</button>
		</form>
  )
}

export default CreatePost;
