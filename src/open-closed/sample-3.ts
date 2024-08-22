interface IShapeArea {
  getArea(): number;
}

class Triangle implements IShapeArea {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  public getArea(): number {
    return (this.base * this.height) / 2;
  }
}

class Rectangle implements IShapeArea {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

class Circle implements IShapeArea {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
