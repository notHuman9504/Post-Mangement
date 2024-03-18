import { userState } from "@/store/atoms/user";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { BASE_URL } from "@/config";
import { useEffect } from "react";

export function InitUser() {
    const setUser = useSetRecoilState(userState);   
    const init = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/api/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
  
            if (response.data.username) {
                setUser({
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    userEmail: null
                })
            }
        } catch (e) {
  
            setUser({
                userEmail: null
            })
        }
    };
  
    useEffect(() => {
        init();
    }, []);
  
    return <></>
  }