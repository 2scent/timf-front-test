export interface LoadPlaceInput {
  name: string;
  date: string;
  address: string;
}

export interface OrderInput {
  name: string;
  phoneNumber: string;
  fromDate: string;
  toDate: string;
  item: string;
  itemDetail: string;
  supply: string;
  supplyDetail: string;
  address: string;
  loadPlace: LoadPlaceInput[];
}
