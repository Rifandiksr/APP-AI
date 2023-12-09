// Import module dan Library
require('dotenv').config();
const Express                   =require('express');


// Deklarasi
const PORT = process.env.PORT;
const app = Express();

// Isi


// Cnsole Server

app.listen(PORT, () => {
    console.log(`Server Running at PORT: ${PORT}`);
})
