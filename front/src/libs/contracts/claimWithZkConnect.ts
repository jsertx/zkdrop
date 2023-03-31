import { ContractTransaction, ethers } from "ethers";
import { getWeb3Provider } from "../web3-provider/getWeb3Provider";
import ContractABI from "./abis/ZKDropERC721.json";

const CONTRACT_ADDRESS = "Your contract address";

export const claimWithZkConnect = async (
    zkConnectResponse: string,
    chainId: number
): Promise<ContractTransaction> => {
  const instance = new ethers.Contract(
    CONTRACT_ADDRESS,
    ContractABI.abi,
    getWeb3Provider(chainId)
  );
  return await instance.claimWithZkConnect(zkConnectResponse);
};