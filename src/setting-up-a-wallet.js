import { web3, WALLET_ADDRESS } from "./initialize-web3-with-a-provider.mjs";

console.group('Setting up a wallet');

/**
 * Create a random account
 */
console.group("Create a random account");

const randomWallet = await web3.eth.accounts.wallet.create(1);
console.log(`Random Wallet: ${JSON.stringify(randomWallet, null, 2)}`);

console.groupEnd();

/**
 * Add an account from a private key
 */
console.group("Add an account from a private key");

const account = await web3.eth.accounts.wallet.add(
  "0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec"
);
console.log(`Account: ${JSON.stringify(account, null, 2)}`);

console.groupEnd();

/**
 * Transfer ETH
 */
console.group("Transfer ETH");

const transferAccount = web3.eth.accounts.wallet.add(
  "0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec"
);
const tx = {
  from: transferAccount[0].address,
  to: WALLET_ADDRESS,
  value: web3.utils.toWei("1", "ether"),
};
const txReceipt = await web3.eth.sendTransaction(tx);
console.log(`Tx hash: ${txReceipt.transactionHash}`);

console.groupEnd();

console.groupEnd();