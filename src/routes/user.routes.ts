import { Router } from 'express';
import { getUsers } from '@controller/user.controller';

const router = Router();

router.get('/users', getUsers);
/* router.get('/user/:id');
router.post('/users/create');
router.put('/user/update');
router.delete('/user/:id'); */

export default router;
