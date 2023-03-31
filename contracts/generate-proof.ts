import { ZkConnect } from "@sismo-core/zk-connect-client";
const opn = require("better-opn");
import {
  AuthType,
  ClaimType,
  RequestContentLib,
  ZkConnectClientConfig,
  ZkConnectRequestContent,
} from "@sismo-core/zk-connect-client";
import { ethers } from "ethers";

// This is the configuration needed to
// use the appId registered in the Sismo Factory
// and configure devMode if needed
const zkConnect = ZkConnect({
  appId: "0x11b1de449c6c4adb0b5775b3868b28b3",
  devMode: {
    displayRawResponse: true,
  },
} as ZkConnectClientConfig);

const abiCoder = new ethers.AbiCoder();

const url = zkConnect.getRequestLink({
  claimRequest: {
    groupId: "0xe9ed316946d3d98dfcd829a53ec9822e",
    groupTimestamp: "latest",
    value: 1,
    claimType: ClaimType.GTE,
    extraData: "",
  },
  authRequest: {
    authType: AuthType.ANON,
  },
  messageSignatureRequest: abiCoder.encode(
    ["address"],
    ["0x7def1d6D28D6bDa49E69fa89aD75d160BEcBa3AE"]
  ),
});

console.log("url", url);
console.log("http://staging.dev.vault-beta.sismo.io/connect?" + url.split("?")[1]);

opn("http://staging.dev.vault-beta.sismo.io/connect?" + url.split("?")[1]);
