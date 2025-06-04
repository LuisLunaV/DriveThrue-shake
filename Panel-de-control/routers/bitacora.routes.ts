import { Router } from 'express';
import { bitacora } from '../controller/bitacora.controller';
const router = Router();

router.get('/users/:date', bitacora.getUsersBitacora)
router.post( '/', bitacora.postNewChange );

export default router;