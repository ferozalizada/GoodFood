export class User {
    
    public password: string
    public passwordConfirmation: string
    
    constructor(
    public userid: string,
    public name: string,
    public email: string,
    public type: string,
    public reputation: number,
    password: string,
    passwordConfirmation: string,
    // public passwords:{
    // },
    public join_date?: string
    ) {
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        //Constructor initialization
        // Object.assign(this, userInfo);
    }
}

