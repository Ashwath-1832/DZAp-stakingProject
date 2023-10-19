import { ethers } from "ethers";
import { StakeAbi } from "../abi/staking.json";
import { STAKING_CONTRACT_ADDRESS } from "../constants";
import { getSigner } from "./signer";

export const stakeContract = new ethers.Contract(
  STAKING_CONTRACT_ADDRESS,
  StakeAbi,
  await getSigner()
);
