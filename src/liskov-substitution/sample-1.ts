export abstract class Person {
  name: string = "";
  lastName: string = "";

  abstract sayGreeting(): string;
}

export class Brazilian extends Person {
  sayGreeting(): string {
    return "Bom dia! Eu sou o " + this.name + " " + this.lastName;
  }
}

export class American extends Person {
  sayGreeting(): string {
    return "Good Morning! I'm " + this.name + " " + this.lastName;
  }
}

export class Italian extends Person {
  sayGreeting(): string {
    return "Buongiorno! Sono " + this.name + " " + this.lastName;
  }
}

export class WriteGreeting {
  writerGreeting(person: Italian): string {
    return person.sayGreeting();
  }
}
