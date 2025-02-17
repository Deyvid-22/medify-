import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(router);
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`));
