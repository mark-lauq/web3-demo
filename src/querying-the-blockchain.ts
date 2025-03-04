import { web3, WALLET_ADDRESS } from './initialize-web3-with-a-provider.mts';

console.group("Querying the Blockchain");

const balance = await web3.eth.getBalance(WALLET_ADDRESS);
console.log(`Balance: ${balance}`);

const blockNumber = await web3.eth.getBlockNumber();
console.log(`Block Number: ${blockNumber}`);

const chainID = await web3.eth.getChainId();
console.log(`Chain ID: ${chainID}`);

const transactionCount = await web3.eth.getTransactionCount(WALLET_ADDRESS);
console.log(`Transaction Count: ${transactionCount}`);

const gasPrice = await web3.eth.getGasPrice();
console.log(`Gas Price: ${gasPrice}`);

console.groupEnd();
