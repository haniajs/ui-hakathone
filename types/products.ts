

export interface Product {
    _id : string;
    title : string;
    _type : "product";
    productImage? : {
        asset: {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description : string;
    category : string;
    dicountPercentage : number;
    isNew : boolean;
    slug : {
        _type : "slug"
        current : string;
    };
    inventory : number;
}