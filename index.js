function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }

  //distanceFromHqInFeet
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet long
  }

  //distanceTravelledInFeet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Each block is 264 feet long
  }

  calculateFarePrice
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }