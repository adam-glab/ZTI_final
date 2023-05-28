import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('files'));
//app.use(cors({origin:"http://localhost:3000/", credentials:true}));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  console.log('***current directory:' + process.cwd());
  console.log('***file path:' + req.file.path);
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8000, () => {
  console.log("Connected!");
});
