import { Router } from "express";
const router = Router();

// Question Route
router.get('/questions',(req,res)=>{
    res.json("get Request");
})

export default router;