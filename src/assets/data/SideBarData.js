import { main, mainB, car, carB, user, userB, staff, staffB } from "../img/icon/SideBarIcon";

export const SideBarData = [
    {
        title: "홈",
        path: "/main",  
        icon: main,
        focus: mainB,
    },
    {
        title: "자동차 관리",
        path: "/car-management",
        icon: car,
        focus: carB
    },
    {
        title: "회원 관리",
        path: "/user-management",
        icon: user,
        focus: userB
    },
    {
        title: "직원 관리",
        path: "/staff-management",
        icon: staff,
        focus: staffB
    }
];