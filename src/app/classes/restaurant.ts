export class Restaurant {
    private id: any;
    private name: any;
    private url: any;
    private type: any;
    private pictureUrl: any;
    constructor(
        id: any,
        name: any,
        url: any,
        type: any,
        pictureUrl: any
    ){
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
}
