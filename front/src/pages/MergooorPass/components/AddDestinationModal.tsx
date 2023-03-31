import { useState } from "react";
import styled from "styled-components";
import InputText from "../../../components/InputText";
import Modal from "../../../components/Modal";
import StyledButton from "../../../components/StyledButton";
import { isValidEthAddress } from "../../../utils/isValidEthAddress";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-width: 941px;
  position: relative;
  min-width: 700px;

  @media (max-width: 1030px) {
    padding: 13px;
    min-width: 0px;
  }
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  color: white;

  margin-bottom: 30px;

  @media (max-width: 1030px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 4.41px;
  }
`;

const InputContainer = styled.div`
    width: 100%;
`

const Subtitle = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAddDestination: (destination: string) => void
};

export default function AddDestinationModal({
  isOpen,
  onClose,
  onAddDestination
}: Props): JSX.Element {
    const [destination, setDestination] = useState(null);

    // TODO test ownership of the NFT
    // useEffect(() => {
    //   if (!wallet.activeAddress) return;
    //   if (wallet.chainId !== CHAIN_ID) return;
    //   if (!wallet.signer) return;
    //   const testOwnershipERC721 = async () => {
    //     const signerChainId = await wallet.signer.getChainId();
    //     if (signerChainId !== CHAIN_ID) return;
    //     const res = await isERC720Owner(wallet.activeAddress, wallet.signer);
    //     setClaimed(res);
    //   };
    //   testOwnershipERC721();
    // }, [response]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} animated>
      <Container>
        <Title>Add destination address</Title>
        <InputContainer>
            <Subtitle style={{marginBottom: 10}}>
                Add an Ethereum address to receive your NFT on
            </Subtitle>
            <InputText
                placeholder="0x9907A0cF64Ec9Fbf6Ed8FD4971093DE88222a9aE"
                onChange={(value) => setDestination(value)}
            />
        </InputContainer>
        <StyledButton
            style={{marginTop: 30}}
            disabled={!isValidEthAddress(destination)}
            onClick={() => onAddDestination(destination)}
        >
            Add Destination
        </StyledButton>
      </Container>
    </Modal>
  );
}
