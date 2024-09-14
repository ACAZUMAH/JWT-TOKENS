import { Router } from "express";
import { checkSchema } from "express-validator";
import { validateLoginInfo } from "../middleware/validate";
import { login, dashboard } from "../controllers/main";
import { verifyAccessToken } from "../middleware/auth";

const router = Router();

router.route('/login').post(checkSchema(validateLoginInfo),login);
router.route('/dashboard').get(verifyAccessToken, dashboard);

export default router;