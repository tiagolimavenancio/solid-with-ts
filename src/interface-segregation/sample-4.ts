interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Troll implements Shooter, Dancer {
  public shoot() {
    console.log("Troll shoots");
  }

  public dance(): void {
    console.log("Troll dances");
  }
}
