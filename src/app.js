const express=require("express");

const app=express();

app.use("/hello",(req,res)=>{
  res.send('Hello from server')
});

app.use("/test",(req,res)=>{
  res.send('tinder app')
})

app.listen(3000,()=>{

    console.log("listening 3000");
});