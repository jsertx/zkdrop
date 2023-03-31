import { useState } from "react";
import styled from "styled-components";
import { Question } from "phosphor-react";
import MintingProcessModal from "./MintingProcessModal";
import SchemaMobile from "./SchemaMobile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 88px);
  padding: 117px 0 233px 0;

  @media (max-width: 1030px) {
    padding: 0 16px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 70px;
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  color: white;

  @media (max-width: 1030px) {
    font-size: 30px;
    line-height: 42px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 80px;

  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 1030px) {
    font-size: 14px;
    line-height: 16px;
    padding: 2px 0;
    margin-bottom: 15px;
  }
`;

const Schema = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 1030px) {
    display: none;
  }
`;

const QuestionWrapper = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

type Props = {
  children: React.ReactNode
  onDestinationSelected: (destination: string) => void;
}

export default function ZkConnectSection({ children }: Props): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MintingProcessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Container id="claim">
        <Title>ZkConnect</Title>
        <SubTitle>
          Privacy-preserving claiming process{" "}
          <QuestionWrapper onClick={() => setModalOpen(true)}>
            <Question size={"100%"} weight="regular" />
          </QuestionWrapper>
        </SubTitle>
        <Schema>
          {children}
        </Schema>
        <SchemaMobile />
      </Container>
    </>
  );
}
