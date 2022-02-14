const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const token = "testing";

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req,res)=>{
    if(req,query.token!==token){
        return res.send({
              message: "Incorrect token..",
              status: 401,
        });
    }
        return res.send({
            message: "Apllication's data is fetching..",
            data: token,
            status: 400,
        });
})

app.post("/", (req,res)=>{
    if(req,query.token!==token){
        return res.send({Message:"You are taken incorrect token",status:401})
    }
    console.log(req.body);
    const data = {
        responses: [
            {
                type: 'text',
                elements: ['Hi', 'Hello']
            }
        ]
    };

    res.json(data);
    //return res.send({Message:"Your data is Fetching",data=token,status=200})

})




app.listen(port,()=>{
    console.log("server is listen on port",+port)
});