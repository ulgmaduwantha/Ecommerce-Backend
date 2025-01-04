import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export function createUser(req,res){

const newUserData = req.body

if(newUserData.type == "admin"){

    if(req.user==null){
        res.json({
            messege : "Please login as administrator to create admin accounts"
        })
        return
    }
    

    if(req.user.type != "admin"){
        res.json({
            messege : "Please login as a administrator to create admin accounts"
        })
        return
    }
    

}

newUserData.password = bcrypt.hashSync(newUserData.password, 10)

 
const user = new User(newUserData)

user.save().then(()=>{
    res.json({
        messege : "Account Created"
    })
}).catch(()=>{
    res.json({
        messege : "user not created"
    })
})

}

export function loginUser(req, res) {
    User.find({ email: req.body.email }).then((users) => {
        if (users.length == 0) {
            res.json({
                messege: "User not found",
            });
        } else {
            const user = users[0];
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

            if (isPasswordCorrect) {

                const token = jwt.sign({

                    email : user.email,
                    firstname : user.firstname,
                    lastname : user.lastname,
                    isBlocked : user.isBlocked,
                    type : user.type,
                    image : user.image
                }, process.env.SECRET_KEY)
                res.json({
                    messege : "user logged in",
                    token : token
                })
                
            } else {
                res.json({
                    messege: "invalid password",
                });
            }
        }
    });
}

 