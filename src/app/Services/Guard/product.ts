export interface AddProduct {
length: any;
  user: String;
  id: Number;
  productName: String;
  productType: String;
  productPrice: Number;
  productImage: String;
}
export class Default {
  constructor(
    public id: Number,
    public productName: String,
    public productType: String,
    public productPrice: Number,
    public productImage: String
  ) {}
}
