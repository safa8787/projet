const express=require('express');


const lessonRouter=express.Router();
const lesson=require('../models/Lesson');


lessonRouter.post('/add',async(req,res)=>{
try {
 let x = new lesson(req.body);
let result =await x.save();
res.send({lesson:result , msg:"lesson add avec successfully"});
}
 catch (error) {
    console.log(error)
}
})
//get all lesson

lessonRouter.get('/',async(req,res)=>{
    try {
    let result= await lesson.find()
    res.send({lesson:result , msg:"lesson get successfully"});

      
    
    }
     catch (error) {
        console.log(error)
    }
    })

    //get user by id
    lessonRouter.get('/:id',async(req,res)=>{
        try {
         let result= await lesson.findById({_id: req.params.id})
      res.send({lesson:result , msg:"lesson get successfully"});

        
        
        }
         catch (error) {
            console.log(error)
        }
        })
//delete by id
lessonRouter.delete('/:id',async(req,res)=>{
    try {

     let result= await lesson.findByIdAndDelete({_id: req.params.id})
    
     res.send({ msg:"lesson removed"});
    
    }
     catch (error) {
        console.log(error)
    }
    })
//update by id

lessonRouter.put('/:id',async(req,res)=>{
    try {

     let result= await lesson.findByIdAndUpdate(
        {_id: req.params.id},
        {$set:{...req.body}})

        res.send({lesson:result , msg:"lesson updated"});

    }
     catch (error) {
        console.log(error)
    }
    })

    module.exports=lessonRouter;