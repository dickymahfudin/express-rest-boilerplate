import app from "./src/app";

const port: number = 8000;
app.listen(port, () => {
  console.log(`Server Running on : http://localhost:${port}`);
});
