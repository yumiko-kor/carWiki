import { atom } from "recoil";

export const auth = atom({
    key: 'adminAuth',
    default: false,
});