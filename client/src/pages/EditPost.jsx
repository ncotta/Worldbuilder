import { useState, useEffect }  from 'react';
import { Navigate, useParams } from 'react-router-dom';    
import Editor from '../components/Editor';


function EditPost() {
    const { id } = useParams();
	const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [glimpse, setGlimpse] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

	useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post/${id}`);
                const postInfo = await response.json();
                setTitle(postInfo.title);
                setGlimpse(postInfo.glimpse);
                setCategory(postInfo.category);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, [id]);

    const updatePost = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("category", category);
        if (subcategory) {
            data.set("category", category + " " + subcategory);
        } else {
            data.set("category", category);
        }   
        
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
			<select value={category} onChange={event => setCategory(event.target.value)} >
                <option value="" disabled hidden>Category</option>
                <option value="Civilization">Civilization</option>
                <option value="Magic">Magic</option>
                <option value="Divinity">Divinity</option>
                <option value="People">People</option>
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