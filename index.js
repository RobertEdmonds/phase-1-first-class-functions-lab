// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(){
    return drivers.slice (0, 2);
}
const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer){
    return function(){
        return integer * integer
    }
}
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
 
const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(arrayOfDrivers);
}