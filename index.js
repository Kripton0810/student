import e from "express";

a.use(e.json());

const a = e();

a.use("/",(req,res)=>{
    console.log("Hye we are in a home");
    res.json({"msg":"Hello world"});
})

a.listen(3000,()=>{
    console.log("Hey the the server is running in port 3000 and link is http://localhost:3000")
})