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
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}
// post result
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username && !result) throw new Error("username and result is required");
        Results.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Result Saved Successfully" });
    } catch (error) {
        req.json({ error });
    }
}
// delete result
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully" });
    } catch (error) {
        res.json({ error });
    }
}