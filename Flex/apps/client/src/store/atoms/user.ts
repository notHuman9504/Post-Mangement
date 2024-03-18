import {atom} from "recoil";

export const userState = atom<{
    userEmail: string | null
}>({
  key: 'userState',
  default: {
    userEmail: null
  },
});