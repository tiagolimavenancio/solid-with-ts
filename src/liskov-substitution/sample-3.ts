export class Employee {
  protected permissions = new Set<string>();

  public addPermissions(permissionName: string) {
    return this.permissions.add(permissionName);
  }
}

class Cashier extends Employee {
  public addPermissions(permissionName: string): Set<string> {
    if (permissionName === "deleteProducts") {
      throw new Error("Cashier cannot delete products");
    }

    return this.permissions.add(permissionName);
  }
}

const employee = new Employee();
employee.addPermissions("deleteProducts");

const cashier = new Cashier();
cashier.addPermissions("deleteProducts");
