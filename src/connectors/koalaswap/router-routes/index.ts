import { FastifyPluginAsync } from 'fastify';

import { uniswapRouterRoutes } from '../../uniswap/router-routes';

export const koalaswapRouterRoutes: FastifyPluginAsync = async (fastify) => {
  await fastify.register(uniswapRouterRoutes);
};

export default koalaswapRouterRoutes;
