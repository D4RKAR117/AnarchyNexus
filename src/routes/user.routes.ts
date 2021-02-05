import { Router } from 'express';
import { getUsers, createUser, searchUser, updateUser, deleteUser } from '@controller/user.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/users/create', createUser);
router.get('/user/:id', searchUser);
router.put('/user/:id/update', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
