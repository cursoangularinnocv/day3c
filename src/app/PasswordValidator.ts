export default class PasswordValidatorInnoCV {
    pwd = undefined;

    constructor (pwd) {
        this.pwd = pwd;
    }
    validate() {
        const pwd = this.pwd;

        if (pwd.length < 3) {
            return 'Password not strong enough';
        }

        if (pwd.indexOf("$") === -1) {
            return 'Password doesnt have $ special character';
        }
    }
}