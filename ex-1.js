// Exercise #1: For Each Function

function forEach(array, operaion) {
  // Start coding here
  for (let i =0;i<employeeSalaries.length;i++){
    operaion(employeeSalaries[i])
  }
}

function plus5k(array){
  newEmployeeSalaries.push(array+5000);
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries,plus5k);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
