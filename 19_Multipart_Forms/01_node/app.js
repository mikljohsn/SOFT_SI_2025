import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true })); // middleware to parse urlencoded data


import multer from 'multer';

//const upload = multer({dest: 'uploads/'}); // destination folder for uploaded files in the server/project

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(undefined, './uploads/'); 
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);

        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1E9); // unique prefix for the file name. Date is not enough, so we add a random number to it.

        const uniqueFileName = uniquePrefix + "__" + file.originalname; // new unique file name

        
        cb(undefined, uniqueFileName)
    }
});

function fileFilter(req, file, cb) {
    const validTypes = ['image/png',  'image/jpeg', 'image/svg']; // valid file types

    if(!validTypes.includes(file.mimetype)) {
        return cb(new Error('Invalid file type. ' + file.mimetype), false);
    } else {
        cb(null, true); // accept the file
    }
};

const upload = multer({
    storage, // storage: storage,
    limits: {
        fileSize: 20 * 1024 * 1024 // 20 MB limit
    },
    fileFilter
});


app.post("/form", (req, res) =>{
    console.log(req.body); // log the request body
    delete req.body.password; // deletes the password from the body so we dont return it
    res.send(req.body); // send the request body back to the client
});

app.post("/fileform", upload.single('file'), (req, res) => {
    console.log(req.body);
    res.send({});
});



const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on `, PORT);
}   );