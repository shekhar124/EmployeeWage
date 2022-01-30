const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const EMP_WAGE_PER_HRS=20;
const NUM_OF_WORKING_DAYS= 20;

function getWorkingHours(empCheck){
switch(empCheck) {
    
    case IS_PART_TIME:
        return PART_TIME_HRS;

    case IS_FULL_TIME:
        return FULL_TIME_HRS;
    default:
        return 0;
   }    
}
let empHrs=0;
for (let day=0; day<NUM_OF_WORKING_DAYS; day++) {
let empCheck=Math.floor(Math.random()*10)%3;
empHrs += getWorkingHours(empCheck);

}

let empWage=empHrs* EMP_WAGE_PER_HRS;

console.log("Total Hrs: "+ empHrs +" Employee Wage is :" + empWage);