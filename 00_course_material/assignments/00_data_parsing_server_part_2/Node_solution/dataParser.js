const express = require('express'); //this is commonJS, use ESmodules in the future
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const xml = require('xml2js');
const Papa = require('papaparse');

const app = express();
const PORT = 8080;

const folderPath = "../Data";

async function parseFile(filePath, fileExtension) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        switch (fileExtension) {
            case '.yaml':
            case '.yml':
                return yaml.load(fileContent);
            case '.csv':
                return Papa.parse(fileContent, { header: true, dynamicTyping: true }).data;
            case '.xml':
                return await xml.parseStringPromise(fileContent);
            case '.json':
                return JSON.parse(fileContent);
            case '.txt':
                return fileContent;
            default:
                throw new Error('Unsupported file extension');
        }
    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
}
//function goes through the files in the folder and finds the file with the correct extension
//endpoints for the different file types
async function serveFile(req, res, extension) {
    try {
        const files = fs.readdirSync(folderPath);
        const file = files.find(f => path.extname(f) === extension);

        if (!file) {
            return res.status(404).json({ error: `No file found` });
        }

        const filePath = path.join(folderPath, file);
        const parsedData = await parseFile(filePath, extension);
        
        res.json(parsedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
app.get('/', (req, res) => res.json({ data: 'Hello World' }));
app.get('/csv', (req, res) => serveFile(req, res, '.csv'));
app.get('/json', (req, res) => serveFile(req, res, '.json'));
app.get('/xml', (req, res) => serveFile(req, res, '.xml'));
app.get('/yaml', (req, res) => serveFile(req, res, '.yaml'));
app.get('/yml', (req, res) => serveFile(req, res, '.yml'));
app.get('/txt', (req, res) => serveFile(req, res, '.txt'));

app.listen(PORT, () => {
    console.log(`Server running`);
});
