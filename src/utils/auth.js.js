const userAuth=(req,res,next)=>{
  const token="xyz"
  const authToken=token==="xyz";

if(!authToken){
 return res.send(400).send("Unauthorized")
}else{
  next();
}
}
// const userAuth = (req, res, next) => {
//   const token = "xyz";

//   const authToken = token === "xyz"; // correct comparison

//   if (!authToken) {
//     return res.status(401).send("Unauthorized"); // ✅ correct
//   } else {
//     next();
//   }
// };

module.exports={userAuth};