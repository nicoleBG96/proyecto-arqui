export function generateBill(employeeName, employeeSalary, discount, contributions) {
    let totalSalary = employeeSalary - (employeeSalary * discount /100);
    totalSalary = totalSalary - contributions;
    return "Bill \n Employee: " + employeeName + " \n Basic Salary: " + employeeSalary + " \n Discount: " + discount + " \n Contributions: " + contributions + " \n Total Salary: " + totalSalary; 
}