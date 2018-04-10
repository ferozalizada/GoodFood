export class Restaurant {
    private method: any;
    private id: any;
    private name: any;
    private url: any;
    private type: any;
    private pictureUrl: any;
    constructor(
        method: any,
        id: any,
        name: any,
        url: any,
        type: any,
        pictureUrl: any
    ){
        this.method = method;
        this.url = url;
        this.id = id;
        this.name = name;
        this. type = type;
        this. pictureUrl = pictureUrl;
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getUrl(){
        return this.url;
    }
    getType(){
        return this.type;
    }
    getPicture(){
        return this.pictureUrl;
    }
    setMethod(method: any){
        this.method = method;
    }
}
