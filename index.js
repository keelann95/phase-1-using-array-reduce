const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Assuming we have an array of assembled batteries
const assembledBatteries = [4, 5, 3, 7, 2, 10];

// Use the reduce method to sum up all the batteries
const totalBatteries = assembledBatteries.reduce((sum, battery) => sum + battery, 0);

