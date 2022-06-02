export interface Employee {
  id: string;
  fullName: string;
  isActive: boolean;
  role: 'User' | 'Admin';
  age: number;
  hiredOn: Date;
  address?: string;
  gender: 'male' | 'female';
}
