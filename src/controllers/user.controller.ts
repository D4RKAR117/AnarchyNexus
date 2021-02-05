import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '@entity/User';

const getUsers = async (req: Request, res: Response): Promise<Response> => {
	const users = await getRepository(User).find();
	return res.json(users);
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
	const newUser = getRepository(User).create(req.body);
	const result = await getRepository(User).save(newUser);
	return res.json(result);
};

const searchUser = async (req: Request, res: Response): Promise<Response> => {
	const user = await getRepository(User).findOne(req.params?.id);
	if (user) return res.json(user);
	return res.status(404).json({ msg: 'User Not Found' });
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
	const user = await getRepository(User).findOne(req.params?.id);
	if (user) {
		getRepository(User).merge(user, req.body);
		const result = await getRepository(User).save(user);
		return res.json(result);
	}

	return res.status(404).json({ msg: 'User Not Found' });
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
	const result = await getRepository(User).delete(req.params?.id);
	return res.json(result);
};

export { getUsers, createUser, searchUser, updateUser, deleteUser };
