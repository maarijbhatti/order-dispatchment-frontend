import { FieldError } from "./toErrorMap";

export type User = {
  id: any;
  email: string;
  fName: string;
  loc: string;
  password: string;
  phoneNo: string;
  walletBalance: number;
};

export type UserResponseType = {
  errors: FieldError[] | null;
  user: User | null;
};
