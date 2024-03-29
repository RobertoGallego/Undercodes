import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import videosRoutes from "app/routes/videosRoutes";

const app = express();

app.set("port", process.env.PORT || 9000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(videosRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../../ui', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../ui/', 'build', 'index.html'));
    });
}

// console.log("--->", path.join(__dirname, '../../ui/build', 'build', 'index.html'));

export default app;
