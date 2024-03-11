



export async function getQuestions(req, res) {
    res.json("Get Req");
}
// insert all question
export async function insertQuestion(req, res) {
    res.json("Get Req");
}

// delete all question
export async function dropQuestions(req, res) {
    res.json("Delete req");
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