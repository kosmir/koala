import { getAvailableEthereumNetworks } from '../../chains/ethereum/ethereum.utils';
import { AvailableNetworks } from '../../services/base';
import { ConfigManagerV2 } from '../../services/config-manager-v2';

export namespace KoalaswapConfig {
  export const chain = 'ethereum';
  export const networks = Array.from(new Set([...getAvailableEthereumNetworks(), '88811']));
  export type Network = string;

  export const tradingTypes = ['amm', 'router'] as const;

  export interface RootConfig {
    slippagePct: number;
    maximumHops: number;
    availableNetworks: Array<AvailableNetworks>;
  }

  export const config: RootConfig = {
    slippagePct:
      ConfigManagerV2.getInstance().get('koalaswap.slippagePct') ??
      ConfigManagerV2.getInstance().get('uniswap.slippagePct'),
    maximumHops: ConfigManagerV2.getInstance().get('koalaswap.maximumHops') || 4,
    availableNetworks: [
      {
        chain,
        networks,
      },
    ],
  };
}
