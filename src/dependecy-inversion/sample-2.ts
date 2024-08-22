class Order {
  constructor(
    public id: number,
    public customer: string,
    public total: number,
    public status: string
  ) {}
}

interface IDatabase {
  create(order: Order): void;
  update(order: Order): void;
}

class OrderServive {
  database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  public create(order: Order): void {
    this.database.create(order);
  }

  public update(order: Order): void {
    this.database.update(order);
  }
}

class MySQLDatabase implements IDatabase {
  public create(order: Order): void {
    console.log("MySQLDatabase.create");
  }

  public update(order: Order): void {
    console.log("MySQLDatabase.update");
}
