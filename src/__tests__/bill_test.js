import {generateBill} from '../bill'
import {Employee} from '../Employee'
import {FullTimeEmployeeCalculator, HalfTimeEmployeeCalculator} from '../SalaryCalculator'

describe ("Bill", function(){
    test("get bill with name and salary of full-time employee", function () {
        let salaryCalculator = new FullTimeEmployeeCalculator(1100);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });
    test("get bill with name and salary of half-time employee", function () {
        let salaryCalculator = new HalfTimeEmployeeCalculator(100,11);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });
})