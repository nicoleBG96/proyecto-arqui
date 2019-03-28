export class SalaryCalculator {
    constructor() {

    }
    calculateSalary() {
    }
}

export class FullTimeEmployeeCalculator extends SalaryCalculator {
    constructor(basicSalary) {
        super();
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

export class HalfTimeEmployeeCalculator extends SalaryCalculator {
    constructor(salaryPerHour, workedHours) {
        super();
        this.salaryPerHour = salaryPerHour;
        this.workedHours = workedHours;
    }

    calculateSalary() {
        return this.salaryPerHour * this.workedHours;
    }
}

export class SalesmanCalculator extends SalaryCalculator {
    constructor(basicSalary, saleCommision) {
        super();
        this.basicSalary = basicSalary;
        this.saleCommision = saleCommision;
    }

    calculateSalary() {
        return this.basicSalary +this.saleCommision;
    }
}