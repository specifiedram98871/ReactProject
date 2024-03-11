import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import question,{answers} from '../database/data.js';



export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({error});
    }
}
// insert all question
export async function insertQuestion(req, res) {
    try {
        await Questions.insertMany({ question, answers });
            res.json({ msg: "Data Saved Successfully" });
        
    } catch (error) {
        res.json({ error });
    }
}

// delete all question
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Data Deleted Successfully" });
    } catch (error) {
        res.json({ error });
    }
}

export async function getResult(req, res) {
    res.json("Get Result");
}
// post result
export async function storeResult(req, res) {
    res.json("post Result");
}
// delete result
export async function dropResult(req, res) {
    res.json("delete Result");
}