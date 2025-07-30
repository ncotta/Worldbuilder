import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../../components/Editor/Editor';
import './CreatePostPage.css';

function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [glimpse, setGlimpse] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (event) => {
        const data = new FormData();
        data.set("title", title);
        if (subcategory) {
            data.set("category", subcategory);
        } else {
            data.set("category", category);
        }   
            
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
        <div className="create-post-container">
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
                    <option value="Magic">Magic</option>
                    <option value="Divinity">Jinn</option>
                    <option value="People">People</option>
                    <option value="Stories">Stories</option>
                </select>

                {category === "Magic" && (
                    <select value={subcategory} onChange={event => setSubcategory(event.target.value)} >
                        <option value="" disabled hidden>Subcategory</option>
                        <option value="Fire Magic">Fire</option>
                        <option value="Water Magic">Water</option>
                        <option value="Earth Magic">Earth</option>
                        <option value="Air Magic">Air</option>
                    </select>
                )}

                {category === "Divinity" && (
                    <select value={subcategory} onChange={event => setSubcategory(event.target.value)} >
                        <option value="" disabled hidden>Subcategory</option>
                        <option value="Ineffables">Ineffables</option>
                        <option value="Primordials">Primordials</option>
                        <option value="Manifestations">Manifestations</option>
                        <option value="Nascents">Nascents</option>
                        <option value="Sacred-Beasts">Sacred Beasts</option>
                    </select>
                )}

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
        </div>
    )
}

export default CreatePostPage;
