import Web3 from "web3";
const KEYS = require("./KEYS.json");
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(KEYS.INFURA_API);
  web3 = new Web3(provider);
}
export default web3;
