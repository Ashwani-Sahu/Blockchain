// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const CRUD = await hre.ethers.getContractFactory("CRUD");
  const crud = await CRUD.deploy();

  await crud.deployed();

  const totalNumberOfEmployee1 = await crud.totalEmployees();
  
  const response = await crud.createEmployee(
    "Ashwani Sahu",
    "sahua8066@gmail.com",
    25,
    "0xba93Ea1d868A11F73f21CB469b13707Cd92FE222"
  );

  const response2 = await crud.createEmployee(
    "Ashwani Rathor",
    "sahua8067@gmail.com",
    26,
    "0xba93Ea1d868A11F73f21CB469b13707Cd92FE222"
  );

  const response3 = await crud.createEmployee(
    "Ashwani Shaw",
    "sahua8068@gmail.com",
    27,
    "0xba93Ea1d868A11F73f21CB469b13707Cd92FE222"
  );

  const totalNumberOfEmployee2 = await crud.totalEmployees();
  const employee0 = await crud.employees(0);
  const employee1 = await crud.employees(1);
  const employee2 = await crud.employees(2);
  console.log('employee', employee0, employee1, employee2);

  await crud.updateEmployee("Akshay Sahu", "sahua8066@gmail.com");
  const updatedEmployee = await crud.employees(0);
  console.log('updated employee', updatedEmployee);

  console.log("response", response, totalNumberOfEmployee1, totalNumberOfEmployee2);

  await crud.deleteEmployee("sahua8067@gmail.com");
  const employee3 = await crud.employees(1);
  console.log('deleted employee', employee3);

  const totalEmployees = await crud.totalEmployees();
  console.log('final number of employees', totalEmployees);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
