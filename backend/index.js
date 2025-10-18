import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

const reportFilePath = path.join('/var/lib/auditron/reports', 'your-actual-report-name.log');


app.get('/api/report', (req, res) => {
    fs.readFile(reportFilePath, 'utf8', (err, data) => {

        if (err) {
            console.error("Error reading the report file:", err);

            res.status(500).send('Error: Could not retrieve the report file.');
            return;
        }

        res.type('text/plain').send(data);
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});