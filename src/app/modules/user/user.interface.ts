export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: "male" | "female";
  email?: string;
  contactNo: number;
  emergencyContact: number;
  presentAddress: string;
  permanentAddress: string;
}
