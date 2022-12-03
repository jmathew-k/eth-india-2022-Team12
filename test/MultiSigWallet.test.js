const { expect } = require("chai");
const { ethers } = require("hardhat");


function tokens(val) {
  return ethers.utils.parseEther(val);
}

function format(n) {
  return ethers.utils.formatEther(n);
}