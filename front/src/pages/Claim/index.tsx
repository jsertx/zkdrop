import { ArrowSquareOut, Check, Football } from "phosphor-react";
import styled from "styled-components";
import zkProofAttached from "../../assets/zk-proof-attached.svg";
import zkBadgeAttached from "../../assets/zk-badge-attached.svg";
import etherscanLogo from "../../assets/etherscan-logo.svg";
import mintingSchema from "../../assets/minting-schema.svg";
import Image from "next/image";
import { useState } from "react";
import Loader from "../../components/Loader";
import { getMinimalHash } from "../../utils/getMinimalHash";
import { ZkConnectResponse } from "@sismo-core/zk-connect-react";
import { ethers } from "ethers";
import StyledButton from "../../components/StyledButton";
import { claimWithZkConnect } from "../../libs/contracts/claimWithZkConnect";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";
import { useMainMinified } from "../../libs/mainMinified";
import { PageContainer } from "../../components/PageContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Container = styled.div`
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 70px;
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  color: white;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 80px;
`;

const TextBold = styled.span`
  font-weight: 600;
`;

const Text = styled.div`
  color: ${(props) => props.theme.colors.blue10};
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  line-height: 30px;
`;

const Destination = styled.span`
  color: ${(props) => props.theme.colors.blue10};
  font-size: 18px;
  line-height: 22px;
  background: rgba(244, 212, 218, 0.4);
  border-radius: 5px;
  padding: 3px 7px;
`;

const NoGas = styled.div`
  color: ${(props) => props.theme.colors.blue10};
  display: flex;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

const LoadingScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.blue10};
  font-style: italic;
  margin-top: 60px;
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error};
  position: absolute;
  font-size: 12px;
  top: -15px;
  right: 10px;
`;

const TransactionLink = styled.div`
  color: ${(props) => props.theme.colors.blue10};
  font-size: 14px;
  margin-top: 20px;
  height: 30px;
`;

const Inline = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
`;

type Props = {
  response: ZkConnectResponse;
  responseABIEncoded: string;
  chainId: number;
};

export default function Claim({
  response,
  responseABIEncoded,
  chainId,
}: Props): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hash, setHash] = useState(null);
  const router = useRouter();

  const destination = response && response?.proofs[0]?.signedMessage ? ethers.utils.defaultAbiCoder.decode(["address"], 
    response.proofs[0].signedMessage
  )[0] : null;
  const { mainMinified } = useMainMinified(destination);

  const claim = async () => {
    try {
      setLoading(true);
      const txResponse = await claimWithZkConnect(responseABIEncoded, chainId);
      setHash(txResponse.hash);
      await txResponse.wait();
      confetti({
        particleCount: 300,
        spread: 360,
        disableForReducedMotion: true,
        zIndex: 1050,
        colors: ["#F7E9AB", "#F193A4"],
      });
      router.push({
        pathname: '/claimed',
        query: { 
          response: JSON.stringify(response),
          chainId: chainId
        },
      });
    } catch (e) {
      console.error(e);
      setError("Claim error");
    } finally {
      setLoading(false);
    }
  };

  return (<PageContainer>
    <Navbar/>
    {
      loading ? 
      <LoadingScreen>
        <Image src={mintingSchema} alt="Minting schema" />
        <LoadingText>
          <Loader size={20} style={{ marginRight: 10 }} />
          Minting...
        </LoadingText>

        <TransactionLink>
          {hash && (
            <Inline
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (chainId === 1) {
                  window.open(`https://etherscan.io/tx/${hash}`, "_blank");
                }
                if (chainId === 5) {
                  window.open(
                    `https://goerli.etherscan.io/tx/${hash}`,
                    "_blank"
                  );
                }
              }}
            >
              Transaction hash: {getMinimalHash(hash)}
              <Image
                src={etherscanLogo}
                alt="Etherscan logo"
                style={{ marginRight: 3, marginLeft: 5 }}
              />
              <ArrowSquareOut style={{ marginTop: -8 }} />
            </Inline>
          )}
        </TransactionLink>
      </LoadingScreen>
      :
      <Container>
        <Title>you are eligible</Title>
        <SubTitle>to the Mergooor Pass</SubTitle>
        <Text style={{ marginBottom: 60 }}>
          Claim your Mergooor Pass and your ZK Badge{" "}
          <TextBold>
            in one transaction <br />
            on
          </TextBold>
          <Destination style={{ marginLeft: 5 }}>{mainMinified}</Destination>
        </Text>
        <NoGas style={{ marginBottom: 30 }}>
          <Check style={{ marginRight: 5 }} />
          <TextBold>No gas fees</TextBold>: Sismo use a relayer
        </NoGas>
        <CTAContainer>
          <StyledButton
            onClick={() => claim()}
            style={{ width: 190, marginBottom: 5 }}
          >
            Claim
          </StyledButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {response ? (
            <Image src={zkProofAttached} alt="Zk Proof Attached" />
          ) : (
            <Image src={zkBadgeAttached} alt="Zk Badge Attached" />
          )}
        </CTAContainer>
      </Container>
    }
    <Footer/>
  </PageContainer>);
}
