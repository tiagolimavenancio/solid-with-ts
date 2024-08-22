interface IEmailService {
  sendEmail(): void;
}

class InsertUserController extends BaseController {
  private emailService: IEmailService;

  constructor(emailService: IEmailService) {
    this.emailService = emailService;
  }

  protected sendEmail(): void {
    const email = new Email(...);
    this.emailService.sendEmail(email)
  }
}
