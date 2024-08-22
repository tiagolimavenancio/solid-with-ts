interface CanWalk {
  walk(): void;
}

interface CanFly {
  fly(): void;
}

class Nightingale implements CanFly, CanWalk {
  public fly(): void {
    console.log("I can fly");
  }

  public walk(): void {
    console.log("I can walk");
  }
}

class Kiwi implements CanWalk {
  public walk(): void {
    console.log("I can walk");
  }
}
