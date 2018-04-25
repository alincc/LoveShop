export class AuthenticationDataSharingService {

  public loginEmail: string = '';

  // tslint:disable-next-line:member-ordering
  private static _instance: AuthenticationDataSharingService = new AuthenticationDataSharingService();
  public static getInstance(): AuthenticationDataSharingService {
    return AuthenticationDataSharingService._instance;
  }

  constructor() {
    if (AuthenticationDataSharingService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use AuthenticationDataSharingService.getInstance() instead of new.');
    }

    AuthenticationDataSharingService._instance = this;
  }

}
