import { useState } from "react";
const NoteInput=({onCreate})=>{
    const [title, setTitle]=useState("");
    const [content, setContent]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title.trim() || !content.trim()) return;
        onCreate({title, content});
        setTitle("");
        setContent("");
    }
    return(
        <form onSubmit={handleSubmit}
        className="bg-white p-5 rounded-b-lg shadow">
           <h2 className="text-xl font-semibold mb-4">Create New Note</h2>
           <input
           type="text"
           placeholder="Enter title"
           value={title}
           onChange={(e)=>setTitle(e.target.value)}
           className="w-full border p-2 rounded mb-3"
           />
           <textarea
           placeholder="Write note content..."
           value={content}
           onChange={(e)=>setContent(e.target.value)}
           className="w-full border p-2 rounded mb-3 h-28"
           />
           <button
           type="submit"
           className="bg-green-600 text-white px-4 py-2 rounded"

           >
          Add Note
           </button>
        </form>
    )
}




export default NoteInput;