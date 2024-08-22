abstract class PostalAddress {
  public addressee: string;
  public contry: string;
  public postalCode: string;
  public city: string;
  public street: string;
  public house: string;

  abstract writeAddress(): string;
}

export class ItalyPostalAddress extends PostalAddress {
  writeAddress(): string {
    return "Formatted address italy" + this.city;
  }
}

export class UKPostalAddress extends PostalAddress {
  writeAddress(): string {
    return "Formatted Address UK" + this.city;
  }
}

export class USAPostalAddress extends PostalAddress {
  writeAddress(): string {
    return "Formatted Address USA" + this.city;
  }
}

export class AddressWriter {
  printPostalAddress(writer: PostalAddress): string {
    return writer.writeAddress();
  }
}
