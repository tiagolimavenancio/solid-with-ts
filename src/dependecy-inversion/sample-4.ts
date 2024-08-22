interface IntroductionService {
  introduce(): void;
}

class EngineerIntroductionService implements IntroductionService {
  introduce(): void {
    console.log("I am an engineer");
  }
}

class MusicianIntroductionService implements IntroductionService {
  introduce(): void {
    console.log("I am a musician");
  }
}

class Person {
  private introductionService: IntroductionService;

  constructor(introductionService: IntroductionService) {
    this.introductionService = introductionService;
  }

  public introduceSelf() {
    this.introductionService.introduce();
  }
}

export class Engineer extends Person {
  private introduceService: EngineerIntroductionService;

  constructor(introduceService: EngineerIntroductionService) {
    super(introduceService);
    this.introduceService = introduceService;
  }

  public introduceSelf(): void {
    this.introduceService.introduce();
  }
}

const engineer = new Person(new EngineerIntroductionService());
const musician = new Person(new MusicianIntroductionService());
