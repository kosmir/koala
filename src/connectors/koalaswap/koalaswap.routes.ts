import sensible from '@fastify/sensible';
import { FastifyPluginAsync } from 'fastify';

import { koalaswapAmmRoutes } from './amm-routes';
import { koalaswapRouterRoutes } from './router-routes';

const koalaswapRouterRoutesWrapper: FastifyPluginAsync = async (fastify) => {
  await fastify.register(sensible);

  await fastify.register(async (instance) => {
    instance.addHook('onRoute', (routeOptions) => {
      if (routeOptions.schema && routeOptions.schema.tags) {
        routeOptions.schema.tags = ['/connector/koalaswap'];
      }
    });

    await instance.register(koalaswapRouterRoutes);
  });
};

const koalaswapAmmRoutesWrapper: FastifyPluginAsync = async (fastify) => {
  await fastify.register(sensible);

  await fastify.register(async (instance) => {
    instance.addHook('onRoute', (routeOptions) => {
      if (routeOptions.schema && routeOptions.schema.tags) {
        routeOptions.schema.tags = ['/connector/koalaswap'];
      }
    });

    await instance.register(koalaswapAmmRoutes);
  });
};

export const koalaswapRoutes = {
  router: koalaswapRouterRoutesWrapper,
  amm: koalaswapAmmRoutesWrapper,
};

export default koalaswapRoutes;
