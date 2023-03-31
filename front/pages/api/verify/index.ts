// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AuthType, RequestContentLib, ZkConnect, ZkConnectClientConfig } from '@sismo-core/zk-connect-server';
import { ethers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next'

const GROUP_ID = "0x42c768bb8ae79e4c5c05d3b51a4ec74a";

const zkConnectConfig: ZkConnectClientConfig = {
  appId: "0xf68985adfc209fafebfb1a956913e7fa",
  devMode: {
    enabled: true, 
  },
  options: {
    provider: new ethers.providers.JsonRpcProvider(
      "https://rpc.gnosis.gateway.fm",
      100
    ),
    verifier: {
      hydraS2: {
        commitmentMapperRegistryAddress: "0x60021A3B6a2bC5b27FeAc52C091f5f672B6b7B53"
      }
    }
  }
}


const requestContent = RequestContentLib.build({
  dataRequests: [{
    claimRequest: {
      groupId: GROUP_ID
    },
    authRequest: {
      authType: AuthType.ANON
    }
  }]
})

const zkConnect = ZkConnect(zkConnectConfig);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const { zkConnectResponse } = req.body;

  try {
    const result = await zkConnect.verify(zkConnectResponse, {
      requestContent,
    });
    console.log("result", result);
  } catch (e: any) {
    //If the response is not valid
    console.log("error", e);
  }
}  