export class CreditCard {
  private code: string;
  private expiration: Date;
  protected monthlyCost: number;

  constructor(code: string, expiration: Date, monthlyCost: number) {
    this.code = code;
    this.expiration = expiration;
    this.monthlyCost = monthlyCost;
  }

  getCode(): string {
    return this.code;
  }

  getExpiration(): Date {
    return this.expiration;
  }

  monthlyDiscount(): number {
    return this.monthlyCost * 0.02;
  }
}

export class GoldCreditCard extends CreditCard {
  monthlyDiscount(): number {
    return this.monthlyCost * 0.05;
  }
}

export class SilverCreditCard extends CreditCard {
  monthlyDiscount(): number {
    return this.monthlyCost * 0.03;
  }
}
