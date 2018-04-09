export class MenuItems {
    private itemId: any;
    private name: any;
    private category: any;
    private description: any;
    private price: any;
    private restaurantId: any;
    constructor(
        itemId: any,
        name: any,
        category: any,
        description: any,
        price: any,
        restaurantId: any
    ){
        this.itemId = itemId;
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
}
