interface UsersData {
  id: number;
  email: string;
  fullname: string;
  phoneNumber: string;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
}

export const users: UsersData[] = [];
