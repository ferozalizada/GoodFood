export class Apicalls {
    private method: string;
    private parameter: string;
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
