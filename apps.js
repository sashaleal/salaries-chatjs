//apps.js
//fetch data from the api

async function apiData(){
  const apiLink="http://dummy.restapiexample.com/api/v1/employees";

  const response = await fetch(apiLink)
  const datapoints = await response.json()
  console.log(datapoints);

  const salary = datapoints.data.map((amount)=> amount.employee_salary)
  console.log(salary)
  employeeSalaryData = salary

  const fullname = datapoints.data.map((name)=> name.employee_name)
  console.log(fullname)
  employeeFullName = fullname
}