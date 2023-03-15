function metamaskInstalled() {

    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
}

function metamaskBool() {
    document.getElementById("metamaskBool").innerText = "is metamask installed: " + metamaskInstalled();

}

metamaskBool();