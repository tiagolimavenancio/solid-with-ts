interface Printer {
  printDocument(document: Document): void;
}

interface CopyMachine {
  copyDocument(document: Document): void;
}

interface Stapler {
  stapleDocument(document: Document): void;
}

class SimplePrinter implements Printer, CopyMachine {
  public printDocument(document: Document) {}

  public copyDocument(document: Document) {}
}

class SuperPrinter implements Printer, CopyMachine, Stapler {
  public printDocument(document: Document) {}

  public copyDocument(document: Document) {}

  public stapleDocument(document: Document) {}
}
