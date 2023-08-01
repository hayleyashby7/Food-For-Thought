import express from "express";
export const app = express();

app.use(express.json());
app.get('/', (req, res) => res.send('Food for thought API'));

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Started server on port ${PORT}`);
});
