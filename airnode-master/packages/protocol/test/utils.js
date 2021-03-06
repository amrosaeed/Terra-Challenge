const { ethers } = require('hardhat');

function deriveWalletPathFromSponsorAddress(sponsorAddress) {
  const sponsorAddressBN = ethers.BigNumber.from(sponsorAddress);
  const paths = [];
  for (let i = 0; i < 6; i++) {
    const shiftedSponsorAddressBN = sponsorAddressBN.shr(31 * i);
    paths.push(shiftedSponsorAddressBN.mask(31).toString());
  }
  return `m/0/${paths.join('/')}`;
}

module.exports = {
  timeTravel: async (_seconds) => {
    await ethers.provider.send('evm_increaseTime', [_seconds]);
    await ethers.provider.send('evm_mine');
  },
  generateRandomAirnodeWallet: () => {
    const airnodeWallet = ethers.Wallet.createRandom();
    const airnodeHdNode = ethers.utils.HDNode.fromMnemonic(airnodeWallet.mnemonic.phrase);
    const airnodeXpub = airnodeHdNode.neuter().extendedKey;
    return { airnodeAddress: airnodeWallet.address, airnodeMnemonic: airnodeWallet.mnemonic.phrase, airnodeXpub };
  },
  generateRandomAddress: () => {
    return ethers.utils.getAddress(ethers.utils.hexlify(ethers.utils.randomBytes(20)));
  },
  generateRandomBytes32: () => {
    return ethers.utils.hexlify(ethers.utils.randomBytes(32));
  },
  generateRandomBytes: () => {
    return ethers.utils.hexlify(ethers.utils.randomBytes(256));
  },
  deriveSponsorWalletAddress: (airnodeXpub, sponsorAddress) => {
    const hdNodeFromXpub = ethers.utils.HDNode.fromExtendedKey(airnodeXpub);
    const sponsorWalletHdNode = hdNodeFromXpub.derivePath(deriveWalletPathFromSponsorAddress(sponsorAddress));
    return sponsorWalletHdNode.address;
  },
  deriveSponsorWallet: (airnodeMnemonic, sponsorAddress) => {
    const hdNodeFromMnemonic = ethers.utils.HDNode.fromMnemonic(airnodeMnemonic);
    const sponsorWalletHdNode = hdNodeFromMnemonic.derivePath(deriveWalletPathFromSponsorAddress(sponsorAddress));
    return new ethers.Wallet(sponsorWalletHdNode.privateKey);
  },
  deriveServiceId: (airnodeAddress, endpointId) => {
    return ethers.utils.keccak256(ethers.utils.solidityPack(['address', 'bytes32'], [airnodeAddress, endpointId]));
  },
  getCurrentTimestamp: async (provider) => {
    const currentBlockNumber = await provider.getBlockNumber();
    const currentBlock = await provider.getBlock(currentBlockNumber);
    return currentBlock.timestamp;
  },
};
