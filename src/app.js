const express=require("express");

const app=express();





app.get("/test",(req,res)=>{
  res.send('tinder app')
})

// app.post("/",(req,res)=>{
//   res.send("hello")
// })

app.get("/user",(req,res)=>{
  console.log(req.query)
  res.send(
    {firsrName:"Balaji",
      lastName:"Kariyappa"
    })
})

app.get("/usersQuery",(req,res)=>{
  console.log(req.query);
  res.send("query params")
})

app.get("/users/:userId/:password",(req,res)=>{
  console.log(req.params)
  res.send(
    {firsrName:"Balaji",
      lastName:"Kariyappa"
    })
})

app.use("/",(req,res)=>{
  res.send('Hello from server')
});

app.listen(3000,()=>{

    console.log("listening 3000");
});