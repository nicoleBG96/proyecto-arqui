import {generateBill} from '../bill'
import {Employee} from '../Employee'
import {FullTimeEmployeeCalculator, HalfTimeEmployeeCalculator, SalesmanCalculator} from '../SalaryCalculator'

describe ("Bill", function(){
    test("get bill with name and salary of full-time employee", function () {
        let salaryCalculator = new FullTimeEmployeeCalculator(1100,0);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Basic Salary: 1100\n Discount: 0% \n Total Discount: 0\n Total Salary: 1100");
    });
    test("get bill with name and salary of half-time employee", function () {
        let salaryCalculator = new HalfTimeEmployeeCalculator(100,11);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });
    test("get bill with name and salary of salesman employee", function () {
        let salaryCalculator = new SalesmanCalculator(200,900);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });
})