import { Router } from 'express';
import { check } from 'express-validator';
import { users } from '../controller/users.controller';
import { validateProperties } from '../middlewares/validate-properties'
import {  userExists, emailExist} from '../helpers/db-validators';
const router = Router();

router.get('/',  users.getUsers);
router.post('/',[
        check('User_NumEmpleado').custom( userExists ),
        check('User_Email').custom( emailExist ),
        check('User_Password', 'El password es obligatorio con mas de 9 caracteres').isLength({ min: 9 }),
        validateProperties
], users.postUsers);


export default router;