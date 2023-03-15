function connectWallet() {

    if(metamaskInstalled()) {

        console.log("attempting to connect to metamask");

        ethereum.request({ method: 'eth_requestAccounts' })

    }
}

