export function generateBill(employee) {
    let totalSalary = employee.calculateSalaryToPay();
    return "Bill \n Employee: " + employee.name + " \n Total Salary: " + totalSalary; 
}