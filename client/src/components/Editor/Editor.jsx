import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './Editor.css';

const modules = {
    toolbar: [
        [{ header: [1,2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
        ],
        ['link', 'image'],
        ['clean'],
    ]
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

function Editor({ value, onChange }) {
	return (
		<ReactQuill 
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
        />
	)
}

export default Editor;