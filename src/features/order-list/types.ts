export interface LoadPlace {
  name: string;
  date: Date;
  address: string;
}

export interface Order {
  seqNo: number;
  name: string;
  phoneNumber: string;
  fromDate: Date;
  toDate: Date;
  item: string;
  itemDetail: string;
  supply: string;
  supplyDetail: string;
  address: string;
  loadPlace: LoadPlace[];
}
