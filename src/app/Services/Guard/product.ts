export interface AddProduct {
  length: any;
  userId: String;
  id: Number;
  productName: String;
  productType: String;
  productPrice: Number;
  productImage: String;
  deliveryStatus: String;
}

export interface errorMessage{
  status:Number;
  name:String;
}
