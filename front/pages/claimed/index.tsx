import Theme from "../../src/theme";
import Claimed from "../../src/pages/Claimed";

function Index({ response, chainId }): JSX.Element {
  return (
    <Theme>
      <Claimed 
        response={response}
        chainId={chainId}
      />
    </Theme>
  );
}

Index.getInitialProps = async ({ query }) => {
    return { 
        response: JSON.parse(query.response), 
        chainId: Number(query.chainId)
    };
};
export default Index;
