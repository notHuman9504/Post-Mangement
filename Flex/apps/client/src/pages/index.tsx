import { BASE_URL } from "@/config";
import { userState } from "@/store/atoms/user";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import {Land} from "ui/comp"
export default function Landing() {
  const username=useRecoilValue(userState).userEmail;
  const router = useRouter()
  return (<>
    <Land username={username} onclick={()=>{
      router.push(`${BASE_URL}/home`)
    }}></Land>
    
  </>);
}
