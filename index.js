// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(){
    return drivers.slice (0, 2);
}
const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier =function (integer){
    return function(){
        return integer ** 2
    }
}
const fareDoubler = function(fare){
    console.log (createFareMultiplier())
     return fare * 2;
}

const fareTripler = function(fare){
    console.log (createFareMultiplier)
    return fare * 3
}
 
const selectDifferentDrivers = (arrayOfDrivers, selectTwoDrivers) =>{
    return selectTwoDrivers(arrayOfDrivers);
}