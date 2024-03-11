import { Router } from "express";
import * as controller from '../contorller/controllers.js'
const router = Router();

// Question Route
// router.get('/questions', controller.getQuestions);
// router.post('/questions', controller.insertQuestion);

router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestion)
    .delete(controller.dropQuestions);

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult);

export default router;
