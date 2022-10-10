type BlogItemType = {
  data?: any;
  onClick?: (data: any) => void;
  onEditClick?: (data: any) => void;
  itemIndex?: any;
  onSubmitForm?: (data: any) => void;
};
type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
};
type Address = {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
};
type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type PostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
  date: any;
};

export type { BlogItemType, User, PostItem };
