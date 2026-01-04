//* Union '|'
type UserRole = 'Admin' | 'User' | 'Guest'
const getDashboard = (role: UserRole) => {
    if (role === 'Admin') {
        return "Admin Arrived"
    } else if (role === 'User') {
        return 'User Arrived'
    } else {
        return 'Guest Arrived'
    }
}
getDashboard('Admin')


// * InterSection '&'
type Employee = {
    name: string;
    id: number;
    phoneNo: string;
}
type Manager = {
    designation: string;
    teamSize: number
}
type ManagerEmployee = Employee & Manager


const RidwanulAzim: ManagerEmployee = {
    name: 'Ridwanul Azim',
    id: 987,
    phoneNo: '012030',
    designation: 'IT',
    teamSize: 20
}