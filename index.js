import express from 'express';

const app = express();

const mongoUrl = "mongodb+srv://admin:Ccs151075@cluster0.pcjhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get("/",

    ()=>{
        console.log("Hello world !")
    }

);


app.post("/",


    ()=>{
        console.log("This is a post request")
    }
);

 app.listen(
    3000,
    ()=>{

        console.log("Server is running on port number 3000")
    }

 )

