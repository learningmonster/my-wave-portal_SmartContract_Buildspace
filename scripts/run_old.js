const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  await waveContract.getTotalWaves();

  let firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  await waveContract.getTotalWaves();

  let secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
