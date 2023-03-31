export enum SupportedChainId {
  LOCAL = 31337,
  MUMBAI = 80001,
  GORLI = 5,
  POLYGON = 137,
  GNOSIS = 100,
  POLYGON_PLAYGROUND = 137,
  ETHEREUM = 1,
}

export enum SupportedChainName {
  LOCAL = "local",
  GORLI = "goerli",
  POLYGON = "polygon",
  GNOSIS = "gnosis",
  MUMBAI = "mumbai",
  POLYGON_PLAYGROUND = "polygon-playground",
  ETHEREUM = "ethereum",
}

export enum SupportedChainLabel {
  LOCAL = "Local",
  GORLI = "Goerli",
  MUMBAI = "Mumbai",
  POLYGON = "Polygon",
  GNOSIS = "Gnosis",
  POLYGON_PLAYGROUND = "polygon",
  ETHEREUM = "Ethereum",
}

export const ChainIdToLabel = {
  [SupportedChainId.LOCAL]: SupportedChainLabel.LOCAL,
  [SupportedChainId.GORLI]: SupportedChainLabel.GORLI,
  [SupportedChainId.POLYGON]: SupportedChainLabel.POLYGON,
  [SupportedChainId.MUMBAI]: SupportedChainLabel.MUMBAI,
  [SupportedChainId.GNOSIS]: SupportedChainLabel.GNOSIS,
  [SupportedChainId.POLYGON_PLAYGROUND]: SupportedChainLabel.POLYGON_PLAYGROUND,
  [SupportedChainId.ETHEREUM]: SupportedChainLabel.ETHEREUM,
};

export const ChainIdToName = {
  [SupportedChainId.LOCAL]: SupportedChainName.LOCAL,
  [SupportedChainId.GORLI]: SupportedChainName.GORLI,
  [SupportedChainId.POLYGON]: SupportedChainName.POLYGON,
  [SupportedChainId.MUMBAI]: SupportedChainName.MUMBAI,
  [SupportedChainId.GNOSIS]: SupportedChainName.GNOSIS,
  [SupportedChainId.POLYGON_PLAYGROUND]: SupportedChainName.POLYGON_PLAYGROUND,
  [SupportedChainId.ETHEREUM]: SupportedChainName.ETHEREUM,
};

export const ChainNameToId = {
  [SupportedChainName.LOCAL]: SupportedChainId.LOCAL,
  [SupportedChainName.GORLI]: SupportedChainId.GORLI,
  [SupportedChainName.POLYGON]: SupportedChainId.POLYGON,
  [SupportedChainName.POLYGON_PLAYGROUND]: SupportedChainId.POLYGON_PLAYGROUND,
  [SupportedChainName.MUMBAI]: SupportedChainId.MUMBAI,
  [SupportedChainName.GNOSIS]: SupportedChainId.GNOSIS,
  [SupportedChainName.ETHEREUM]: SupportedChainId.ETHEREUM,
};
