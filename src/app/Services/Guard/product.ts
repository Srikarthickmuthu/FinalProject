export interface AddProduct {
  length: any;
  userId: string;
  id: number;
  productName: string;
  productType: string;
  productPrice: number;
  productImage: string;
  deliveryStatus: string;
}

export interface errorMessage{
  status:number;
  name:string;
}
