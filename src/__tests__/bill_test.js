import {generateBill} from '../bill'

describe ("Bill", function(){
    test("get bill with name and salary of employee", function () {
        let bill = generateBill("Andres", 500);
        expect(bill).toBe("Bill \n Employee: Andres \n Salary: 500");
    });
})