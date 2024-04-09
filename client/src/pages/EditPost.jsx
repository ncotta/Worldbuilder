import React, { useState, useEffect }  from 'react';
import { Navigate, useParams } from 'react-router-dom';    
import Editor from '../components/Editor';


function EditPost() {
    const { id } = useParams();
	const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [glimpse, setGlimpse] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

	useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setGlimpse(postInfo.glimpse);
                    setCategory(postInfo.category);
                })
            })
    }, []);

    const updatePost = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("category", category);
        data.set("glimpse", glimpse);
        data.set("id", id);
        if (files?.[0]) {
            data.set("file", files?.[0]);
        }

        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post`, {
            method: "PUT",
            body: data,
            credentials: "include"
        });

        if (response.ok) setRedirect(true);
    };

    if (redirect) return <Navigate to={`/post/${id}`} />

	return (
		<form className="create-form" onSubmit={updatePost}>
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
            <Editor 
                value={glimpse}
                onChange={setGlimpse}
            />
			<button className="create-button">Update post</button>
		</form>
  )
}

export default EditPost