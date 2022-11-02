const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  let firstWaveTxn = await waveContract.wave("Hey you!!");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  let secondWaveTxn = await waveContract
    .connect(randomPerson)
    .wave("How's it going?");
  await secondWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  secondWaveTxn = await waveContract
    .connect(randomPerson)
    .wave("It's a nice day.");
  await secondWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  secondWaveTxn = await waveContract
    .connect(randomPerson)
    .wave("Testing messages");
  await secondWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.wave("Lot of testing.");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.wave("Testing1");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.wave("Testing2");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  secondWaveTxn = await waveContract.connect(randomPerson).wave("Test3");
  await secondWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.wave("Test4");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.wave("Test5");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.connect(randomPerson).wave("Test6");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  firstWaveTxn = await waveContract.wave("Test7");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  secondWaveTxn = await waveContract.connect(randomPerson).wave("Test9");
  await secondWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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
