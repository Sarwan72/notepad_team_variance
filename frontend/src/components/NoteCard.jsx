import { useState } from "react";

const NoteCard = ({ note, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [showFull, setShowFull] = useState(false);
  const handleSave = () => {
    onUpdate(note._id, {
      title,
      content,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded mb-2"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-2 rounded mb-2 h-24"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            > Save </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded"
            > Cancel </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold">{note.title}</h3>
          <p className="text-gray-700 mt-2 cursor-pointer"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull
              ? note.content
              : note.content.slice(0, 60) +
                (note.content.length > 60 ? "..." : "")}
          </p>

          <p className="text-sm text-gray-400 mt-3">
            {new Date(note.createdAt).toLocaleString()}
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-600 font-medium"
            > Edit </button>
            <button
              onClick={() => onDelete(note._id)}
              className="text-red-600 font-medium"
            > Delete </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;
