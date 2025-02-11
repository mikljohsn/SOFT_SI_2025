const Papa = require('papaparse'); //bruger is ESmodules men commonJS. I fremtiden brug kun ESmodules
const fileSystem = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const csv = require('fast-csv');
const xml = require('xml2js');

const folderPath = "../Data"

async function handleFiles(folderPath) {
    try {
        const files = fileSystem.readdirSync(folderPath);

        for(const file of files ){
            const filePath = path.join(folderPath, file);
            const fileExtension = path.extname(file);

            const parsedData = await parseFile(filePath, fileExtension);
            console.log(`Parsed Data for ${file}:\n`, parsedData);
        }
    } catch (error) {
        console.error(error);
    }
}

async function parseFile(filePath, fileExtension) {
    try {
        const fileContent = fileSystem.readFileSync(filePath, 'utf-8');

        switch(fileExtension) {
            case '.yaml':
            case '.yml':
                return yaml.load(fileContent);
            case '.csv':
                const parsedCsv = Papa.parse(fileContent);
                return parsedCsv.data;
            case '.xml':
                return xml.parseStringPromise(fileContent);
            case '.json':
                return JSON.parse(fileContent);
            case '.txt':
                return fileContent;
            default:
                throw new Error('Unsupported file extension');
        }
    } catch (error) {
        console.error(error);
    }
}

handleFiles(folderPath);