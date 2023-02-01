export interface AddProduct {
  filter(arg0: (el: { userId: string; deliveryStatus: String; }) => boolean): AddProduct;
  length: any;
  userId: String;
  id: Number;
  productName: String;
  productType: String;
  productPrice: Number;
  productImage: String;
  deliveryStatus: String;
}

export interface response {
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
