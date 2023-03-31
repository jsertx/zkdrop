// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import ZkConnect Solidity library
import "zk-connect-solidity/SismoLib.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @title ZKDropERC721
 * @author Sismo
 * @notice ZkDropERC721 is a contract that allows users to privately claim and transfer ERC721 tokens using ZkConnect.
 */
contract ZKDropERC721 is
    ERC721,
    ZkConnect // the contract inherits from ZkConnect
{
    // the id of the group we want our users to be member of
    bytes16 public immutable GROUP_ID;
    // Object that contains the claim, auth and message signature requests
    // that was used for the proof generation in the Data Vault app
    // it needs to match the requests made by the frontend to the Data Vault app
    ZkConnectRequestContent private zkConnectRequestContent;

    string private _baseTokenURI;

    event BaseTokenURIChanged(string baseTokenURI);

    error RegularERC721TransferFromAreNotAllowed();
    error RegularERC721SafeTransferFromAreNotAllowed();

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        bytes16 appId, // the appId of your zkConnect app (you need to register your zkConnect app on https://factory.sismo.io)
        bytes16 groupId // the groupId of the group you want your users to be member of
    ) ERC721(name, symbol) ZkConnect(appId) {
        // we initialize the ZkConnect library with the appId
        GROUP_ID = groupId;
        _setBaseTokenURI(baseTokenURI);
    }

    /**
     * @notice Claim a ERC721 on the address `to` thanks to a zkConnect response containing a valid proof
     *         with respect to the auth, claim and message signature requests
     * @param zkConnectResponse the zkConnect response from the Data Vault app in bytes
     * @param to the address to mint the token to
     */
    function claimWithZkConnect(bytes memory zkConnectResponse, address to) public {
        // the verify function will check that the zkConnectResponse proof is cryptographically valid
        // with respect to the auth, claim and message signature requests
        // i.e it checks that the user is member of the group with id GROUP_ID
        // that he is the owner of a Sismo Data Vault
        // and that the message signature is valid
        ZkConnectVerifiedResult memory zkConnectVerifiedResult = verify({
            responseBytes: zkConnectResponse,
            authRequest: buildAuth({authType: AuthType.ANON}),
            claimRequest: buildClaim({groupId: GROUP_ID}),
            messageSignatureRequest: abi.encode(to)
        });

        // if the proof is valid, we mint the token to the address `to`
        // the tokenId is the anonymized userId of the user that claimed the token
        // if the user calls the claimWithZkConnect function multiple times
        // he will only be able to claim one token
        uint256 tokenId = zkConnectVerifiedResult.verifiedAuths[0].userId;
        _mint(to, tokenId);
    }

    /**
     * @notice Transfer a ERC721 on the address `to` thanks to a zkConnect response containing a valid proof
     *        with respect to the auth, claim and message signature requests
     * @param zkConnectResponse the zkConnect response from the Data Vault app in bytes
     * @param to the address to transfer the token to
     */
    function transferWithZkConnect(bytes memory zkConnectResponse, address to) public {
        // the exact same verify logic is applied as in the claimWithZkConnect function
        // except that we don't mint the token to the address `to`
        // but we transfer it from the address of the owner of the token to the address `to`
        // if all the verifications are successful
        ZkConnectVerifiedResult memory zkConnectVerifiedResult = verify({
            responseBytes: zkConnectResponse,
            authRequest: buildAuth({authType: AuthType.ANON}),
            claimRequest: buildClaim({groupId: GROUP_ID}),
            messageSignatureRequest: abi.encode(to)
        });

        uint256 tokenId = zkConnectVerifiedResult.verifiedAuths[0].userId;
        address from = ownerOf(tokenId);
        _transfer(from, to, tokenId);
    }

    function tokenURI(uint256 id) public view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function _setBaseTokenURI(string memory baseURI) private {
        _baseTokenURI = baseURI;
        emit BaseTokenURIChanged(baseURI);
    }

    function transferFrom(address from, address to, uint256 tokenId) public virtual override {
        revert RegularERC721TransferFromAreNotAllowed();
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) public virtual override {
        revert RegularERC721SafeTransferFromAreNotAllowed();
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data)
        public
        virtual
        override
    {
        revert RegularERC721SafeTransferFromAreNotAllowed();
    }
}
