import { stakeContract } from "./contract";

export const unstake = async () => {
  try {
    const tx = await stakeContract.unstake();
    tx.wait(1);
    alert("Unstake successfull!");
  } catch (err) {
    console.log("Something went worng!:", err);
  }
};
