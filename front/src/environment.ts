type Environment = {
  sismoHubUrl: string;
  sismo: {
    url: string;
    badgeContracts: {
      5: string;
      80001: string;
      137: string;
      100: string;
    };
  };
  ZKDropUrl: string;
  mergerPass: {
    relayer: string;
    chainId: number;
    tokenId: number;
    contractAddress: string;
    groupName: string;
  };
  infuraKey: string;
  donation: {
    address: string;
    chainId: number;
  };
};

let env = {
  sismoHubUrl: process.env.NEXT_PUBLIC_SISMO_HUB_URL,
  sismo: {
    url: process.env.NEXT_PUBLIC_SISMO_APP_URL,
    badgeContracts: {
      5: process.env.NEXT_PUBLIC_MERGER_PASS_SISMO_BADGE_CONTRACT_GOERLI,
      80001: process.env.NEXT_PUBLIC_MERGER_PASS_SISMO_BADGE_CONTRACT_MUMBAI,
      137: process.env.NEXT_PUBLIC_MERGER_PASS_SISMO_BADGE_CONTRACT_POLYGON,
      100: process.env.NEXT_PUBLIC_MERGER_PASS_SISMO_BADGE_CONTRACT_GNOSIS,
      1: process.env.NEXT_PUBLIC_MERGER_PASS_SISMO_BADGE_CONTRACT_MAINNET,
    },
  },
  ZKDropUrl: process.env.NEXT_PUBLIC_ZKDROP_URL,
  mergerPass: {
    relayer: process.env.NEXT_PUBLIC_MERGER_PASS_RELAYER,
    chainId: Number(process.env.NEXT_PUBLIC_MERGER_PASS_CHAIN_ID),
    tokenId: Number(process.env.NEXT_PUBLIC_MERGER_PASS_TOKEN_ID),
    contractAddress: process.env.NEXT_PUBLIC_MERGER_PASS_CONTRACT,
    groupName: process.env.NEXT_PUBLIC_MERGER_PASS_GROUP_NAME,
  },
  infuraKey: process.env.NEXT_PUBLIC_MERGER_PASS_INFURA_KEY,
  donation: {
    address: process.env.NEXT_PUBLIC_DONATION_ADDRESS,
    chainId: Number(process.env.NEXT_PUBLIC_DONATION_CHAIN_ID),
  },
} as Environment;

if (typeof window !== "undefined") {
  (window as any).env = env;
}

export default env;
