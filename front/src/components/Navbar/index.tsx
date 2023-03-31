import styled from "styled-components";
import logo from "../../assets/zkdrop-logo-desktop.svg";
import Image from "next/image";

const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 30px 60px;
  top: 0;
  left: 0;
  z-index: 2;

  @media (max-width: 1030px) {
    padding: 15px 16px;
  }
`;

const ZKLogo = styled.div`
  cursor: pointer;
`;

// const BlockiesWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   overflow: hidden;

//   @media (max-width: 1030px) {
//     display: none;
//   }
// `;

// const BlockiesWrapperMobile = styled.div`
//   display: none;

//   @media (max-width: 1030px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     overflow: hidden;
//   }
// `;

const WalletWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;

  @media (max-width: 1030px) {
    justify-content: flex-end;
  }
`;

// const ChainWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 0.5px solid ${(props) => props.theme.colors.blue8};
//   border-radius: 5px;
//   background-color: #f4d4da;
//   width: 36px;
//   height: 36px;
//   margin-left: 14px;

//   @media (max-width: 1030px) {
//     margin-left: 0px;
//     width: 26px;
//     height: 26px;
//   }
// `;

// const StyledEthLogo = styled(Logo)`
//   width: 18.61px;
//   height: 18.61px;

//   @media (max-width: 1030px) {
//     width: 16px;
//     height: 16px;
//   }
// `;

// const IdentifierWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
//   border: 0.5px solid ${(props) => props.theme.colors.blue8};
//   color: ${(props) => props.theme.colors.blue8};
//   font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
//   font-weight: 500;
//   border-radius: 5px;
//   background-color: #f4d4da;
//   height: 36px;
//   padding: 0 10px;
//   font-size: 16px;
//   line-height: 22px;

//   @media (max-width: 1030px) {
//     font-size: 12px;
//     line-height: 22px;
//     height: 26px;
//   }
// `;

export default function Navbar() {

  return (
    <Container>
      <ZKLogo
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Image src={logo} alt="Logo Zk Drop" width={153.71} height={41} />
      </ZKLogo>
      <WalletWrapper>

        {/* {wallet.connected && (
          <>
            <ChainWrapper>
              <StyledEthLogo type={LogoType.ETHEREUM} color={colors.blue8} />
            </ChainWrapper>

            <IdentifierWrapper>
              <BlockiesWrapper>
                <Blockies seed={wallet.activeAddress} size={8} scale={2.5} />
              </BlockiesWrapper>

              <BlockiesWrapperMobile>
                <Blockies seed={wallet.activeAddress} size={8} scale={1.75} />
              </BlockiesWrapperMobile>

              {wallet.activeMainMinified}
            </IdentifierWrapper>
          </>
        )} */}
      </WalletWrapper>
    </Container>
  );
}
