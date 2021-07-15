import { Router } from 'express';
import getMaxSum from '../services/getMaxSum';

const maxSumRouter = Router();

maxSumRouter.post("/", (request, response) => {
	const { list } = request.body;

	const maxSum = getMaxSum(list);

	return response.json({ result: `The max sum is ${maxSum} from the list [${list.join(", ")}].` })
})

export default maxSumRouter;