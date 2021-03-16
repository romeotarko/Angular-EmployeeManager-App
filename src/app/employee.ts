export interface Employee{
    id: number;
    name: string;
    email: string;
    jobTitle: string;
    phone: string;
    imageUrl: string;
    employeeCode: string;
}

export interface EmployeeUpdateRequest{
    email: string;
    jobTitle: string;
    phone: string;
    imageUrl: string;
}
