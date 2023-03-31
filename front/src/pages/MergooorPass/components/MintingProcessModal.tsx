import styled from "styled-components";
import Modal from "../../../components/Modal";
import mintingProcess from "../../../assets/minting-process-modal.svg";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-width: 941px;
  position: relative;

  @media (max-width: 1030px) {
    padding: 13px;
  }
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  font-weight: 400;
  font-size: 50px;
  line-height: 70px;
  color: white;

  margin-bottom: 10px;

  @media (max-width: 1030px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 4.41px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  height: calc(100vw * 333 / 881);
  max-height: 333px;
  object-fit: contain;

  @media (max-width: 1030px) {
    height: calc(100vw * 282 / 881);
  } ;
`;

const Content = styled.div`
  font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 1030px) {
    margin-top: 13px;
    gap: 18px;
    padding: 0 11px;
    padding-bottom: 11px;
  }
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 1030px) {
    margin-bottom: 4.41px;
    font-size: 14px;
    line-height: 8px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media (max-width: 1030px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const Bold = styled.span`
  font-weight: 600;
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MintingProcessModal({
  isOpen,
  onClose,
}: Props): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} animated>
      <Container>
        <Title>ZkConnect</Title>
        <ImageWrapper>
          <Image src={mintingProcess} alt="minting process" fill={true} />
        </ImageWrapper>
        <Content>
          <SubSection>
            <Subtitle>Private Minting</Subtitle>
            <Text>
              ZkConnect lets you prove your eligibility for the Mergooor
              Pass and mint it on any wallet. The{" "}
              <Bold>
                Data Source used to prove your eligibility will not be
                revealed
              </Bold>{" "}
              in the process.
            </Text>
          </SubSection>
          <SubSection>
            <Subtitle>ZK Proof of Eligibility</Subtitle>
            <Text>
              You will be directed to Sismo to{" "}
              <Bold>
                generate a ZK proof of eligibility from your Data Source.
              </Bold>{" "}
              After generating the proof, you simultaneously{" "}
              <Bold>
                receive the Mergooor Pass and The Merge Contributor ZK Badge in
                a single transaction.
              </Bold>
            </Text>
          </SubSection>
          <SubSection>
            <Subtitle>Account-bound</Subtitle>
            <Text>
              <Bold>
                Your Mergooor Pass and ZK Badge are both account-bound
              </Bold>{" "}
              (derivation of soulbound). This means that they are{" "}
              <Bold>bound to ZK Badge’s Data Source.</Bold> If you lose
              access to your destination account,{" "}
              <Bold>you can burn and remint</Bold> your Mergooor Pass and ZK
              Badge to another account using ZkConnect. However,{" "}
              <Bold>
                burning and reminting will link the two destination accounts.
              </Bold>
            </Text>
          </SubSection>
        </Content>
      </Container>
    </Modal>
  );
}
