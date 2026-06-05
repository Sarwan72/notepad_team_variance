import axios from "axios";

const API =axios.create({
    baseURL: import.meta.env.VITE_API_URL,

});

export const fetchNotesAPI = async () => {
  const res = await API.get("/notes");
  return res.data;
};

export const createNoteAPI = async (data) => {
  const res = await API.post("/notes", data);
  return res.data;
};
export const getNoteById=async(id)=>{
    const res = await API.get(`/notes/${id}`);
    return res.data;
}
export const updateNoteAPI = async (id, data) => {
  const res = await API.put(`/notes/${id}`, data);
  return res.data;
};
export const deleteNoteAPI = async (id) => {
  const res = await API.delete(`/notes/${id}`);
  return res.data;
};
export default API;