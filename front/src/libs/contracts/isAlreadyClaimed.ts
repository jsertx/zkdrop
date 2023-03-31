import { ethers } from "ethers";
import env from "../../environment";
import { getWeb3Provider } from "../web3-provider/getWeb3Provider";
import ContractABI from "./abis/ZKDropERC721.json";

const CONTRACT_ADDRESS = env.mergerPass.contractAddress;

export const isAlreadyClaimed = async (
    tokenId: string,
    chainId: number
): Promise<boolean> => {
  const instance = new ethers.Contract(
    CONTRACT_ADDRESS,
    ContractABI.abi,
    getWeb3Provider(chainId)
  );
  const address = await instance.ownerOf(tokenId);
  return address !== "0x0000000000000000000000000000000000000000";
};
