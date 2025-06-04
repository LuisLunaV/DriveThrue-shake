import { Router } from 'express';
import  { check } from 'express-validator';

import { validateProperties } from '../middlewares/validate-properties';
import { authentication } from '../controller/auth.controller';
const router = Router();

router.post('/',[
    check('User_NumEmpleado', 'El numero de empleado es obligatorio').not().isEmpty(),
    check('User_Password', 'El password es obligatorio').not().isEmpty(),
    validateProperties
], authentication)

export default router;