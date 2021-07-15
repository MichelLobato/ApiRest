import { Router } from 'express';
import maxSumRouter from './maxSum.routes';

const routes = Router();

routes.get("/", (request, response) => {
	return response.json({ok: true})
});

routes.use("/maxSum", maxSumRouter);

export default routes;