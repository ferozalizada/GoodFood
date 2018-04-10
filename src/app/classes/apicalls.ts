export class Apicalls {
    public method: string;
    public parameter: string;
    constructor(method: string, parameter: string){
        this.method = method;
        this.parameter = parameter;
    }
    getMethod(){
        return this.method;
    }
    getParameter(){
        return this.parameter;
    }
    setParameter(parameter){
        this.parameter = parameter;
    }
    setMethod(method){
        this.method = method;
    }
}
