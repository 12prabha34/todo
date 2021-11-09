const todo=require("./config");

const express=require("express");
const cors=require("cors");

const app=express();

app.use(express.json());

app.use(cors());

app.get("/",async(req,res,next)=>{
    const data=await todo.get();
    const list=data.docs.map((doc)=>
        ({...doc.data(),id:doc.id})
    )
    console.log("get operation ")
    res.status(200).send(list);
})

app.post("/",async(req,res)=>{
    const postData=req.body;
    console.log(postData)
    await todo.add(postData).then((doc)=>{
        postData.id=doc.id;
        res.status(200).send(postData);
    }).catch((err)=>{
        console.log("Error occured in post operation",err);
    })
})

app.put("/:id",async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    await todo.doc(id).update(data).then((change)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("Error Occured in Update Operation",err);
    })
})

app.delete("/:id",async(req,res)=>{
    let userId=req.params.id;
    console.log(userId)
    await todo.doc(userId).delete().then(()=>{
        res.status(200).send("Successfully Deleted");
    })
})
const port=4000;

app.listen(port,()=>{
    console.log("Server is running at ",port);
})