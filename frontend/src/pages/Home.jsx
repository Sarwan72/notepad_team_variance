import { useEffect, useState } from "react";

import {
  fetchNotesAPI,
  createNoteAPI,
  updateNoteAPI,
  deleteNoteAPI,
} from "../services/api";

import NoteInput from "../components/NoteInput";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    try {
      const data = await fetchNotesAPI();
      setNotes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleCreate = async (data) => {
    try {
      const newNote = await createNoteAPI(data);

      setNotes((prev) => [
        newNote,
        ...prev,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (
    id,
    updatedData
  ) => {
    try {
      const updated = await updateNoteAPI(
        id,
        updatedData
      );

      setNotes((prev) =>
        prev.map((note) =>
          note._id === id
            ? updated
            : note
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNoteAPI(id);

      setNotes((prev) =>
        prev.filter(
          (note) => note._id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          My Notes App
        </h1>

        <NoteInput
          onCreate={handleCreate}
        />

        <div className="mt-6">
          {loading ? (
            <p className="text-center">
              Loading...
            </p>
          ) : notes.length === 0 ? (
            <p className="text-center">
              No Notes Found...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {notes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  onUpdate={
                    handleUpdate
                  }
                  onDelete={
                    handleDelete
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;