interface IArea {
  calculateArea(): number;
}

interface IVolume {
  calculateVolume(): number;
}

export class Square implements IArea {
  calculateArea(): number {
    // some logic
    return 0;
  }
}

export class Cylinder implements IArea, IVolume {
  calculateArea(): number {
    // some logic
    return 0;
  }

  calculateVolume(): number {
    // some logic
    return 0;
  }
}
