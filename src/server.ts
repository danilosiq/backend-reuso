import express, { Request, Response } from "express";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/useRoutes";

const app = express();
// app.use(logger);
app.use(morgan("dev"));
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
