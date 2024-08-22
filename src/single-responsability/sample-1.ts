class Activity {
  constructor(private name: string, private term: Date) {}

  getName() {
    return `${this.name} (${this.term})`;
  }
}

class RepoActivity {
  private dataBase: Database;

  constructor() {
    this.dataBase = Database.connect("admin:password@database-name", ["activities"]);
  }

  save() {
    this.dataBase.activities.save({
      title: this.name,
      date: this.term,
    });
  }
}
