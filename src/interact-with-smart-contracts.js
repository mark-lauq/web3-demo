import { web3 } from "./initialize-web3-with-a-provider.mjs";

console.group("Interact with Smart Contracts");

/**
 * Instantiate a Smart Contract
 */
const address = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
const ABI = [
  {
    name: "symbol",
    outputs: [{ type: "string" }],
    type: "function",
  },
  {
    name: "totalSupply",
    outputs: [{ type: "uint256" }],
    type: "function",
  },
];

const uniswapToken = new web3.eth.Contract(ABI, address);

/**
 * Read Methods
 */
const symbol = await uniswapToken.methods.symbol().call();
console.log(`Symbol: ${symbol}`);

const totalSupply = await uniswapToken.methods.totalSupply().call();
console.log(`Total Supply: ${totalSupply}`);

/**
 * Write Methods
 */
const to = "0xcf185f2F3Fe19D82bFdcee59E3330FD7ba5f27ce";
const value = web3.utils.toWei("1", "ether");
const txReceipt = await uniswapToken.methods
  .transfer(to, value)
  .send({ from: "" });
console.log(`Tx hash: ${txReceipt.transactionHash}`);

/**
 * Query Past Events
 */
const eventTransfer = await uniswapToken.getPastEvents("Transfer", {
  fromBlock: "18850576",
});
console.log(`Event Transfer: ${eventTransfer}`);

/**
 * Subscribing to Events
 */
const subscription = uniswapToken.events.Transfer();
subscription.on("data", console.log);

console.groupEnd();
