import express from "express";
import { register, login } from "../controllers/auth.js";
import multer from "multer";
import { storage, cloudinary } from "../cloudinary/cloudinary.js";


const router = express.Router();
const upload = multer({ storage: storage });


router.post("/register", upload.single("picture"), register);
router.post("/login", login);

export default router;