
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { AuthType, useZkConnect, ZkConnectButton, ZkConnectClientConfig } from "@sismo-core/zk-connect-react";
import Navbar from "../../components/Navbar";
import { ethers } from "ethers";
import { isAlreadyClaimed } from "../../libs/contracts/isAlreadyClaimed";
import { useRouter } from "next/router";
import { PageContainer } from "../../components/PageContainer";
import TestEligibilitySection from "./components/TestEligibilitySection";
import Image from "next/image";
import claimSchema from "../../assets/claim-schema.svg";
import ZkConnectSection from "./components/ZkConnectSection";
import ProveFromDataSource from "./components/ProveFromDataSource";
import ClaimToDestination from "./components/ClaimToDestination";
import Search from "./components/Search";

export const CHAIN_ID = 5;

export const GROUP_ID = "0x42c768bb8ae79e4c5c05d3b51a4ec74a";

export const zkConnectConfig: ZkConnectClientConfig = {
  appId: "0xf68985adfc209fafebfb1a956913e7fa",
  vaultAppBaseUrl: process.env.NEXT_PUBLIC_SISMO_APP_URL,
  devMode: {
		enabled: process.env.NEXT_PUBLIC_ENV_NAME === "LOCAL", 
    devGroups: [
      {
        groupId: GROUP_ID,
        // Add your dev addresses here to become eligible in the DEV env
        data: {
          "0xfd247ff5380d7da60e9018d1d29d529664839af2": 1
        }
      }
    ]
	}
}

export default function MergooorPass(): JSX.Element {
  const [destination, setDestination] = useState(null);
  const { response, responseBytes } = useZkConnect({config: zkConnectConfig });
  const router = useRouter();

  useEffect(() => {
    if (!response && !responseBytes) return;
    const testOwnership = async () => {
      const vaultId = response.proofs[0].auth.userId;
      const isClaimed = await isAlreadyClaimed(vaultId, CHAIN_ID);
      // If the user has already claim a NFT
      if (isClaimed) {
        router.push({
          pathname: '/claimed',
          query: { 
            response: JSON.stringify(response),
            chainId: CHAIN_ID
          },
        });
      } else {
        router.push({
          pathname: '/claim',
          query: { 
            response: JSON.stringify(response),
            responseBytes: responseBytes,
            chainId: CHAIN_ID
          },
        });
      }
    }
    testOwnership();
  }, [response, responseBytes]);

  return (
    <PageContainer>
      <Navbar />

      <TestEligibilitySection>
        <Search groupId={GROUP_ID}/>
      </TestEligibilitySection>

      <ZkConnectSection onDestinationSelected={(value) => setDestination(value)}>
        <ProveFromDataSource destination={destination}>
          {
          destination && 
            <ZkConnectButton
              config={zkConnectConfig}
              claimRequest={{
                groupId: GROUP_ID
              }}
              authRequest={{
                authType: AuthType.ANON
              }}
              messageSignatureRequest={
                ethers.utils.defaultAbiCoder.encode(["address"], 
                    [destination]
                  )
              }
            />
        }
        </ProveFromDataSource>
        <Image src={claimSchema} alt="claimSchema" />
        <ClaimToDestination onDestinationSelected={(value) => {
            setDestination(value);
        }}/>
      </ZkConnectSection>

      <Footer />
    </PageContainer>
  );
}
