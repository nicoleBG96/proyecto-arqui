export class SalaryCalculator {
    constructor() {

    }
    calculateSalary() {
    }
}

export class FullTimeEmployeeCalculator extends SalaryCalculator {
    constructor(basicSalary, discount, contributions) {
        super();
        this.basicSalary = basicSalary;
        this.discount = discount;
        this.contributions = contributions;
    }

    calculateSalary() {
        let totalContributions = this.basicSalary * this.contributions /100;
        let totalDiscount = this.discount * this.basicSalary /100;
        return "Basic Salary: " + this.basicSalary + "\n Discount: " + this.discount + "% \n Total Discount: " + totalDiscount + "\n Contributions: " + this.contributions + "%\n Total Contributions: " + totalContributions + "\n Total Salary: " + (this.basicSalary - totalDiscount - totalContributions);
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