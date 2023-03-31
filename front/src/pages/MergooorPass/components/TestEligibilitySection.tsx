import styled from "styled-components";
import Image from "next/image";
import mergerPassDecorated from "../../../assets/merger-pass-decorated.svg";
import { Info } from "phosphor-react";
import { useState } from "react";
import MintingProcessModal from "./MintingProcessModal";
import HoverTooltip from "../../../components/HoverTooltip";
import StyledButton from "../../../components/StyledButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 88px 0 109px 0;
  gap: 81.82px;
  color: ${(props) => props.theme.colors.blue10};

  @media (max-width: 1030px) {
    padding: 71px 16px 15px 16px;
  }
`;

const ImageWrapper = styled.a`
  display: flex;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1030px) {
    display: none;
  }
`;

const ImageWrapperMobile = styled.a`
  display: none;
  position: relative;

  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1030px) {
    display: flex;
    width: 90vw;
    height: calc(56.5vw * 604 / 501);
    margin-bottom: 30px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media (max-width: 1030px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 70px;
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  font-weight: 400;
  color: white;
  margin-bottom: 5px;

  @media (max-width: 1030px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.blue10};

  margin-bottom: 20px;

  @media (max-width: 1030px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 30px;
  }
`;

const InfoWrapper = styled.span`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  transform: translateY(-3px);
`;

const AreYou = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: white;

  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 1030px) {
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 7.6px;
  }
`;

const MintingProcess = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 3px;

  font-size: 14px;
  line-height: 18px;
  color: white;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 30px;

  cursor: pointer;

  @media (max-width: 1030px) {
    font-size: 8px;
    line-height: 9px;
    margin-top: 7px;
    gap: 1.5px;
    margin-bottom: 30.35px;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  @media (max-width: 1030px) {
    width: 8px;
    height: 8px;
  }
`;

const CallToAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1030px) {
    gap: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 190px;

  @media (max-width: 1030px) {
    gap: 8.6px;
  }
`;


type Props = {
  children: React.ReactNode
};

export default function TestEligibilitySection({
  children
}: Props): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MintingProcessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Container>
        <ImageWrapper
          href="https://opensea.io/collection/mergooor-pass"
          target="_blank"
        >
          <Image src={mergerPassDecorated} alt="merger pass" priority={true} />
        </ImageWrapper>

        <LeftContainer>
          <Title>Mergooor Pass</Title>
          <Subtitle>
            The Mergooor Pass is a Non-Transferable NFT (ZK
            <HoverTooltip
              width={241.33}
              text={
                "Mergooor Pass minters prove their eligibility via a privacy-preserving scheme utilizing ZK proofs."
              }
            >
              <InfoWrapper>
                <Info size={16} weight={"bold"} />
              </InfoWrapper>
            </HoverTooltip>
            -SBT) received by contributors to The Merge.
          </Subtitle>
          <ImageWrapperMobile
            href="https://opensea.io/collection/mergooor-pass"
            target="_blank"
          >
            <Image
              src={mergerPassDecorated}
              alt="merger pass"
              fill={true}
              priority={true}
            />
          </ImageWrapperMobile>
          <AreYou>Are you a contributor to The Merge?</AreYou>
          {children}
          <MintingProcess
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Minting process{" "}
            <QuestionWrapper>
              <Info size={"100%"} />
            </QuestionWrapper>
          </MintingProcess>

          <CallToAction>
            <ButtonGroup>
              <StyledButton
                style={{ width: "100%" }}
                href="#claim"
              >
                get your pass
              </StyledButton>
            </ButtonGroup>
          </CallToAction>
        </LeftContainer>
      </Container>
    </>
  );
}
