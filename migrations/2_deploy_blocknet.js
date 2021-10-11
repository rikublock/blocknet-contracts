const blocknetContract = artifacts.require("BlocknetDXv1");

module.exports = async function (deployer) {
	// get the owner address
	const accounts = await web3.eth.getAccounts();
	const owner = accounts[0];

	// deploy contract
	await deployer.deploy(blocknetContract);
};
