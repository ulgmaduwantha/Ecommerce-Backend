import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const mongoUrl = "mongodb+srv://admin:Ccs151075@cluster0.pcjhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(bodyParser.json())

app.get("/",

    (req,res)=>{
        console.log(req.body)
        console.log("Hello world !")
        res.json(
            {
                "message": "Hi There !",
            }
        )
    }

);


app.post("/",


    (req,res)=>{
        console.log(req.body)
        console.log("This is a post request")
        res.json(
            {
                "messege": "This is a post reply",
            }
        )
        
    }
);

 app.listen(
    3000,
    ()=>{

        console.log("Server is running on port number 3000")
    }

 )

