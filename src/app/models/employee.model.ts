export interface EmployeeList {
    id: number,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image: string
}
export interface ApiResponseModel {
    status: string,
    data: EmployeeList[],
    message: string
}