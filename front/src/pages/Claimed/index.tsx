import styled from "styled-components";
import mergerPass from "../../assets/merger-pass.svg";
import etherscanLogo from "../../assets/etherscan-logo.svg";
import burnAndRemintButton from "../../assets/burn-and-remint-button.svg";
import openSeaLogo from "../../assets/opensea-logo.svg";
import Image from "next/image";
import { ArrowSquareOut, Check } from "phosphor-react";
import env from "../../environment";
import { ZkConnectResponse } from "@sismo-core/zk-connect-react";
import Navbar from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import Footer from "../../components/Footer";

const Content = styled.div`
  min-height: calc(100vh - 88px);
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
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.blue10};
  margin-bottom: 80px;
  text-align: center;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Inline = styled.div`
  display: flex;
`;

const VisualContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 270px;
  justify-content: flex-end;
`;

const VisualTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const Link = styled.a`
  display: flex;
`;

const Checks = styled.div`
  display: flex;
`;

const CheckLine = styled.div`
  display: flex;
  align-items: flex-start;
  color: #ffffff;
  max-width: 230px;
  font-size: 12px;
  font-weight: 400;
`;

const Bold = styled.span`
  font-weight: 600;
`;

type Props = {
  response: ZkConnectResponse;
  chainId: number;
};

export default function Claimed({
  response,
  chainId,
}: Props): JSX.Element {
  let mergerPassOpenseaLink = null;
  let mergerPassEtherscanLink = null;

  if (chainId === 5) {
    const vaultId = response.proofs[0].auth.userId;
    mergerPassOpenseaLink = `https://testnets.opensea.io/assets/goerli/${env.mergerPass.contractAddress}/${vaultId}`;
    mergerPassEtherscanLink = `https://goerli.etherscan.io/token/${env.mergerPass.contractAddress}?a=${vaultId}`;
  }

  if (chainId === 1) {
      const vaultId = response.proofs[0].auth.userId;
      mergerPassOpenseaLink = `https://opensea.io/collection/mergooor-pass`;
      mergerPassEtherscanLink = `https://etherscan.io/token/${env.mergerPass.contractAddress}?a=${vaultId}`;
  }

  return (
    <PageContainer>
      <Content>
        <Navbar />
        <Title>congratulations!</Title>
        <Subtitle style={{ marginBottom: 60 }}>
          You claimed your Mergooor Pass and your ZK Badge <br />
          successfully!
        </Subtitle>
        <Inline>
          <VisualContainer style={{ marginRight: 40 }}>
            <Image src={mergerPass} alt="Merger pass" />
            <VisualTitle>Mergooor pass nft</VisualTitle>
            <Links>
              <Link
                href={mergerPassOpenseaLink}
                target="_blank"
                style={{ marginRight: 10 }}
              >
                <Image
                  src={openSeaLogo}
                  alt="OpenSea logo"
                  style={{ marginRight: 3 }}
                />
                OpenSea
                <ArrowSquareOut
                  style={{ width: 12, height: 12, marginTop: -3, marginLeft: 2 }}
                />
              </Link>
              <Link href={mergerPassEtherscanLink} target="_blank">
                <Image
                  src={etherscanLogo}
                  alt="Etherscan logo"
                  style={{ marginRight: 3 }}
                />
                Etherscan
                <ArrowSquareOut
                  style={{ width: 12, height: 12, marginTop: -3, marginLeft: 2 }}
                />
              </Link>
            </Links>
          </VisualContainer>
        </Inline>
        <CTAContainer style={{ marginTop: 70, marginBottom: 20 }}>
          <Image
            src={burnAndRemintButton}
            alt="Burn and remint button"
            style={{ marginRight: 3 }}
          />
        </CTAContainer>
        <Checks>
          <CheckLine style={{ marginRight: 20 }}>
            <div>
              <Check width={14} style={{ marginRight: 5 }} />
            </div>
            <div>
              <Bold>Account-bound:</Bold> If your destination is lost, you will be
              able to burn and remint
            </div>
          </CheckLine>
          <CheckLine>
            <div>
              <Check width={14} style={{ marginRight: 5 }} />
            </div>
            <div>
              <Bold>Cooldown duration:</Bold> You will wait a period of time
              before burning/reminting
            </div>
          </CheckLine>
        </Checks>
      </Content>
      <Footer/>
    </PageContainer>
  );
}
