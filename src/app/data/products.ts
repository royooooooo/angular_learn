export interface Product {
  id: number;
  name: String;
  size: number;
}

export interface Price {
  id: number;
  type: String;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: 'product 1', size: 10 },
  { id: 2, name: 'product 2', size: 10 },
];
