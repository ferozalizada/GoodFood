export class User {
    public userid: string;
    public name: string;
    public email: string;
    public type: string;
    public reputation: number;
    public join_date: Date = new Date();
    public passwor: {
        password: string;
        passwordConfirmation: string;


    }
    public password: string
    
    constructor(userInfo: Object = {}) {
        //Constructor initialization
        Object.assign(this, userInfo);
    }
}

