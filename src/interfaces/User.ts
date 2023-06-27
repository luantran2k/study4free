export default interface IUser {
  name: string;
  username: string;
  email: string;
  gender: string;
  phone: string;
  avatar: string;
  payment: boolean;
  company: string;
  location: string;
  id: string;
  roles: string[];
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  result: string;
  createdAt: Date;
  updatedAt: Date;
}
