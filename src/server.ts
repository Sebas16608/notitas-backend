import app from "./app";
const port: number = 3000;

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
});