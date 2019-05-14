export class AuthentificationService {

  isAuthentified = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuthentified = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuthentified = false;
  }
}
