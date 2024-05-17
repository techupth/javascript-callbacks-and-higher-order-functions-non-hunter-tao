// Exercise #1: For Each Function

function forEach(array, callback) {
  for (let i=0; i<array.length; i++) {
    callback(array[i]);
  }
}

function plusFiveK(salary) {
  newEmployeeSalaries.push(salary + 5000);
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries, plusFiveK)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
