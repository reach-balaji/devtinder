const {userAuth}=require("./utils/auth.js.js")
const express=require("express");

const app=express();


app.use("/admin",userAuth)


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

// app.get("/userResponse",[(req,res,next)=>{
// res.send("Response");
//   next();
// },(req,res)=>{
//  res.send("2nd Response")
// }])

app.get("/admin/users",(req,res)=>{

      res.send("Get Users")

})

app.use("/getUserData",(req,res)=>{

  try{
    // throw new Error("xyzaa");

  res.send("get user details")

  }
  catch(err){

    res.status(500).send("Something went wrong")
  }


})

app.use("/",(req,res)=>{
  res.send('Hello from server')
});

app.listen(3000,()=>{

    console.log("listening 3000");
});