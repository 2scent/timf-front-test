export interface LoadPlace {
  name: string;
  date: string;
  address: string;
}

export interface Order {
  seqNo: number;
  name: string;
  phoneNumber: string;
  fromDate: string;
  toDate: string;
  item: string;
  itemDetail: string;
  supply: string;
  supplyDetail: string;
  address: string;
  loadPlace: LoadPlace[];
}
