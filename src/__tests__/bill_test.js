import {generateBill} from '../bill'

describe ("Bill", function(){
    test("get bill with name and salary of employee", function () {
        let bill = generateBill("Andres", 500, 0, 0);
        expect(bill).toBe("Bill \n Employee: Andres \n Basic Salary: 500 \n Discount: 0 \n Contributions: 0 \n Total Salary: 500");
    });
    test("get bill with name and salary with discount of employee", function () {
        let bill = generateBill("Andres", 500, 50, 0);
        expect(bill).toBe("Bill \n Employee: Andres \n Basic Salary: 500 \n Discount: 50 \n Contributions: 0 \n Total Salary: 250");
    });
    test("get bill with name and total salary with discount and contributions of employee", function () {
        let bill = generateBill("Andres", 500, 50, 100);
        expect(bill).toBe("Bill \n Employee: Andres \n Basic Salary: 500 \n Discount: 50 \n Contributions: 100 \n Total Salary: 150");
    });
})