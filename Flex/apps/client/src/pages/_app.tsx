import type { AppProps } from 'next/app'
import {AppBar} from "ui/comp"
import { useRouter } from 'next/router'
import { BASE_URL } from '@/config'
export default function App({Component,pageProps}:AppProps){
    const router = useRouter()
    return (<div>
        <AppBar onSignup={()=>{
            router.push(`${BASE_URL}/signup`)
        }}
        onLogIn={()=>{
            router.push(`${BASE_URL}/login`)
        }}
        ></AppBar>
        <Component {...pageProps} />
    </div>)
}