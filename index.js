// Code your solution in this file!

const headquarters = 42; // Scuber's headquarters location in blocks

function distanceFromHqInBlocks(someValue) {
  // Returns the number of blocks given a value
  return Math.abs(someValue - headquarters);
}

function distanceFromHqInFeet(someValue) {
  // Calls the distanceFromHqInBlocks function and converts the result to feet
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  // Calculates the number of feet traveled
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // The first 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
  } else {
    return 'cannot travel that far'; // Rides over 2500 feet are not allowed
  }
}


