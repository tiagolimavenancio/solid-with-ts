interface Developer {
  develop(): void;
}

class FrontEndDeveloper implements Developer {
  public develop(): void {
    this.writeHtmlCode();
  }

  private writeHtmlCode(): void {
    console.log("Write HTML code");
  }
}

class BackEndDeveloper implements Developer {
  public develop(): void {
    this.writeTypeScriptCode();
  }

  private writeTypeScriptCode(): void {
    console.log("Write TypeScript code");
  }
}

class SoftwareProject {
  private developers: Developer[] = [];

  public createProject(): void {
    this.developers.forEach((developer: Developer) => {
      developer.develop();
    });
  }
}
