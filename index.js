let nameOfSpaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let milesPerKilometer = 0.621;

console.log(typeof nameOfSpaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof milesPerKilometer);

//how many days it will take to reach Mars distanceToMars*milesPerKilometer
let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

console.log(nameOfSpaceShuttle + " will take " + daysToMars + " days to reach the moon ");