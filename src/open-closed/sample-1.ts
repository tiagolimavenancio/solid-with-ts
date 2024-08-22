class CreditCard {
  private code: string;
  private expiration: Date;
  private montlyCost: number;

  constructor(code: string, expiration: Date, montlyCost: number) {
    this.code = code;
    this.expiration = expiration;
    this.montlyCost = montlyCost;
  }

  getCode(): string {
    return this.code;
  }

  getExpiration(): Date {
    return this.expiration;
  }

  getMontlyDiscount(): number {
    return this.montlyCost * 0.02;
  }

  getMontlyDiscountSilver(): number {
    return this.montlyCost * 0.03;
  }

  getMontlyDiscountGold(): number {
    return this.montlyCost * 0.05;
  }
}
