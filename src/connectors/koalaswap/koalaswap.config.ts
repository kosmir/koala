export namespace KoalaswapConfig {
  export const chain = 'ethereum';
  export const networks = ['koala'];
  export type Network = (typeof networks)[number];

  export const tradingTypes = ['amm', 'clmm'] as const;

  export interface RootConfig {
    availableNetworks: Array<{ chain: string; networks: string[] }>;
  }

  export const config: RootConfig = {
    availableNetworks: [
      {
        chain,
        networks,
      },
    ],
  };
}
