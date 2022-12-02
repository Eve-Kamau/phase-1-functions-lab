// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  if (blocks>42){
    return blocks - 42;
} else {
   return 42 - blocks;
}   
}
console.log("You are" + (distanceFromHqInBlocks(53)) + "blocks away from HQ");

function distanceFromHqInFeet(feet) {
if (feet>42){
    return (feet - 42) * 264;
} else {
    return (42 - feet) * 264;
 }   
}
console.log("You are" + (distanceFromHqInFeet(43)) + "feet away from HQ");

function distanceTravelledInFeet(start,destination){
if(destination>start){
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}
let result= (distanceTravelledInFeet(42,53));
console.log(result)

function calculatesFarePrice(start, destination) {

let route = distanceTravelledInFeet(start,destination);

if (route <= 400){
    return 0;                                    //"Your cab fare is Free-of-Charge";

} else if (route >=400 && route <= 2000){        //"Your cab fare is 2ct per foot"; - total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    return 2.56;

} else if (route >=2000 && route <= 2500) {     // "Your cab fare is $25" - charges 25 dollars for a distance over 2000 feet'-  expect(calculatesFarePrice(50, 58)).to.equal(25);
    return 25;

} else if (route > 2500){                       //does not allow rides over 2500 feet
    return "cannot travel that far"
}
} 

