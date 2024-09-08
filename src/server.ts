import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files (like HTML)

// Route to serve the resume based on username
app.get('/resume/:username', (req: Request, res: Response) => {
    const { username } = req.params;
    res.sendFile(`${__dirname}/public/${username}-resume.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});