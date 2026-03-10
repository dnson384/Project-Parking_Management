export interface UserEntity {
  id: number;
  email: string;
  fullname: string;
  phoneNumber: string;
  hashedPassword: string;
  role: "CUSTOMER" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
}
