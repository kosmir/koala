import { FastifyPluginAsync } from 'fastify';

import { uniswapAmmRoutes } from '../../uniswap/amm-routes';

export const koalaswapAmmRoutes: FastifyPluginAsync = async (fastify) => {
  await fastify.register(uniswapAmmRoutes);
};

export default koalaswapAmmRoutes;
