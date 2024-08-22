abstract class Employee {
  abstract calculateSalary(): number;
  abstract hoursWorked(): number;
  protected storeToDB(): any;
}

class Technical extends Employee {
  calculateSalary(): number {
    return 1000;
  }

  hoursWorked(): number {
    return 40;
  }
}

class Financial extends Employee {
  calculateSalary(): number {
    return 2000;
  }

  hoursWorked(): number {
    return 40;
  }
}
