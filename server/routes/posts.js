import express from "express";
import {
    createPost,
    getFeedPosts,
    getUserPosts,
    likePost
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import multer from "multer";
import { storage, cloudinary } from "../cloudinary/cloudinary.js";


const router = express.Router();
const upload = multer({ storage: storage });


/* CREATE */
router.post("/", verifyToken, upload.single("picture"), createPost);


/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId:posts", verifyToken, getUserPosts);


/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);


export default router;