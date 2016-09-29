import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static(__dirname + "/static"));
app.use((req, res) => res.sendFile(__dirname + "/static/index.html"));

const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
server.on("close", () => console.log('Shutting down server'));

process.on("SIGTERM", () => server.close(() => process.exit(0)));
process.on("SIGINT", () => server.close(() => process.exit(0)));
