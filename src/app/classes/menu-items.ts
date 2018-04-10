export class MenuItems {
    private method:any;
    private itemId: any;
    private name: any;
    private category: any;
    private type: any;
    private description: any;
    private price: any;
    private restaurantId: any;
    constructor(
        method:any,
        itemId: any,
        name: any,
        type: any,
        category: any,
        description: any,
        price: any,
        restaurantId: any
    ){
        this.method = method;
        this.itemId = itemId;
        this.type = type;
        this.name = name;
        this.category = category
        this.description = description
        this.price = price;
        this.restaurantId = restaurantId;
    }
    getitemId(){
        return this.itemId;
    }
    getName(){
        return this.name;
    }
    getCategory(){
        return this.category;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
    getRestaurantId(){
        return this.restaurantId;
    }
    setMethod(method: any){
        this.method = method;

    }
}
