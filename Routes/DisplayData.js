const express=require('express')
const router=express.Router()

router.post('/foodData',(req,res)=>{
    try {
        
        res.send([global.food_items,foodCategory])
        
    } catch (error) {
        console.error(error.message)
    }
})
module.exports=router