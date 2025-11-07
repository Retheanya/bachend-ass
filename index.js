const express=require("express");
const mongoose=require("mongoose");
const Item=require("./model/Item.js");
const app=express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/b22")
           .then(()=>console.log("mongodb connected"))
           .catch((e)=>console.log(e));

         
  app.post("/save", async (req, res) => {
  try {
    const itm = new Item(req.body);
    const result = await itm.save();
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
        app.get("/view",async(req,res)=>{
           const itm=await Item.find();
         res.send(itm)
})
app.listen(3000,()=>{console.log('server running succesfully')})




















/*app.get("/view/:name", async (req, res) => {
  const emp = await Employee.findOne({ name: req.params.name });
  res.send(emp);
});

app.delete("/delete/:id", async (req, res) => {
  const emp = await Employee.findByIdAndDelete(req.params.id);
  res.send(emp);
}); */ 