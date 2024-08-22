class Book {
  name: string;
  author: string;
  year: Date;
  price: number;
  isbn: string;

  constructor(name: string, author: string, year: Date, price: number, isbn: string) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.price = price;
    this.isbn = isbn;
  }
}

class Invoice {
  book: Book;
  amount: number;
  discountPercentage: number;
  taxPercentage: number;
  total: number;

  constructor(book: Book, amount: number, discountPercentage: number, taxPercentage: number) {
    this.book = book;
    this.amount = amount;
    this.discountPercentage = discountPercentage;
    this.taxPercentage = taxPercentage;
    this.total = this.calculateTotal();
  }

  public calculateTotal(): number {
    const price = (this.book.price - this.book.price * this.discountPercentage) * this.amount;
    const priceWithTax = price * (1 + this.taxPercentage);
    return priceWithTax;
  }
}

export class InvoicePrinting {
  constructor(private invoice: Invoice) {}

  public print(): string {
    return ``;
  }
}

export interface InvoicePersistence {
  save(invoice: Invoice): void;
}

export interface BookPersistence {
  save(invoice: Invoice): void;
}

export class DatabaseInvoicePersistence implements InvoicePersistence {
  public save(invoice: Invoice) {}
}

export class FileInvoicePersistence implements InvoicePersistence {
  public save(invoice: Invoice) {}
}

export class PersistenceManager {
  constructor(
    private invoicePersistence: InvoicePersistence,
    private bookPersistence: BookPersistence
  ) {}
}
