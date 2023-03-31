import Theme from "../../src/theme";
import Claim from "../../src/pages/Claim";

function Index({ response, responseABIEncoded, chainId }): JSX.Element {
  return (
    <Theme>
      <Claim 
        response={response}
        responseABIEncoded={responseABIEncoded}
        chainId={chainId}
      />
    </Theme>
  );
}

Index.getInitialProps = async ({ query }) => {
    return { 
        response: JSON.parse(query.response), 
        responseABIEncoded: query.responseABIEncoded,
        chainId: Number(query.chainId)
    };
};
export default Index;
