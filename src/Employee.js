export class Employee {
    constructor(name, id, ci, position, salaryCalculator){
        this.name = name;
        this.id = id;
        this.ci = ci;
        this.position = position;
        this.salaryCalculator = salaryCalculator;
    }

    calculateSalaryToPay(){
        return this.salaryCalculator.calculateSalary();
    }
}

