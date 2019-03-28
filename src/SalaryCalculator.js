export class SalaryCalculator {
    constructor() {

    }
    calculateSalary() {
    }
}

export class FullTimeEmployeeCalculator extends SalaryCalculator {
    constructor(basicSalary, discount) {
        super();
        this.basicSalary = basicSalary;
        this.discount = discount;
    }

    calculateSalary() {
        let totalDiscount = this.discount * this.basicSalary /100;
        return "Basic Salary: " + this.basicSalary + "\n Discount: " + this.discount + "% \n Total Discount: " + totalDiscount + "\n Total Salary: " + (this.basicSalary - totalDiscount);
    }
}

export class HalfTimeEmployeeCalculator extends SalaryCalculator {
    constructor(salaryPerHour, workedHours) {
        super();
        this.salaryPerHour = salaryPerHour;
        this.workedHours = workedHours;
    }

    calculateSalary() {
        let totalSalary = this.salaryPerHour * this.workedHours;
        return "Total Salary: " + totalSalary; 
    }
}

export class SalesmanCalculator extends SalaryCalculator {
    constructor(basicSalary, saleCommision) {
        super();
        this.basicSalary = basicSalary;
        this.saleCommision = saleCommision;
    }

    calculateSalary() {
        let totalSalary = this.basicSalary + this.saleCommision;
        return "Total Salary: " + totalSalary; 
    }
}