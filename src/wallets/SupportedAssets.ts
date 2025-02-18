/**
 * All supported assets.
 * The derivation path is always 0,0,0 since NCW does not have the concept of accounts per vault.
 * Each workspace is for a single enduser therefore they will use account 0.
 * In case needed for specific cases (such as SOL staking), it can simply be added as follows:
 * ```
 *    SOL_STAKING: [44,501,0,0,1],
 *    SOL_TESTNET_STAKING: [44,1,0,0,1]
 * ```
 *
 * However it is not needed for just standard EdDSA operations.
 */
export const supportedAssets = {
  SOL_TEST: [44, 1, 0, 0, 0],
  SOL: [44, 501, 0, 0, 0],
} as const;

/**
 * All the supported assets
 */
export type SupportedAssets = keyof typeof supportedAssets;

/**
 * All the derivation paths that are used.s
 */
export type DerivationPath = (typeof supportedAssets)[SupportedAssets];
