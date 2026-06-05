import Note from '../models/Note.js';


export const createNote=async(req,res)=>{
    try{
        const {title, content}=req.body;
        if(!title || !content){
            return res.status(400).json({message: "title and content are required"});
        }
        const note=await Note.create({
            title,
            content,
           
        });
        res.status(201).json(note);

    }
    catch(error){
        console.log("create note error:", error);
        res.status(500).json({message: "server error while creating note"});
    }
};


export const getNotes=async(req,res)=>{
    try{
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }
    catch(error){
        console.log("Get notes error:", error);
        res.status(500).json({message: "Server error while fetching notes"});
    }
}


export const getNoteById=async (req,res)=>{
    try {
        const note=await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: "note not found by id"});
        }
        res.status(200).json(note);

    } catch (error) {
        console.error("get note error:", error);
        res.status(500).json({message:"server error while fetching note by id"});
    }
};

export const updateNote=async(req,res)=>{
    try {
        const {title, content}=req.body;
        const note=await Note.findByIdAndUpdate(
           req.params.id,
    { title, content },
    { new: true},
    );
    if(!note){
        return res.status(404).json({message: "Note not found"});
    }
    res.status(200).json(note);
    } catch (error) {
        console.error("update note error:", error);
        res.status(500).json({message: "server error while updating note"});
        
    }
};


export const deleteNote=async(req, res)=>{
    try {
        const note=await Note.findByIdAndDelete(req.params.id);
        if(!note){
            return res.status(404).json({message: "note not found or not authorized"});
        }
        res.status(200).json({message: "note deleted successfully"});
        
    } catch (error) {
        console.error("Delete note error:", error);
        res.status(500).json({message: "Server error while deleting note"});
    }
}


