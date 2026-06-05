import express from 'express';
import {createNote, deleteNote, updateNote, getNoteById, getNotes}  from '../controllers/noteController.js';


const router=express.Router();
router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNoteById);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;