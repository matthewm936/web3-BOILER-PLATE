async function getBlockNumber() {
    let block = await web3.eth.getBlockNumber();
    document.getElementById("current-block").innerText = "current block: " + block;
}
getBlockNumber();

//Goerli test network
//https://goerli.infura.io/v3/
//5
//GoerliETH
//https://goerli.etherscan.io