import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { InitUser } from '@/comp/inituser'
import Appbar from '@/comp/Appbar'
export default function App({Component,pageProps}:AppProps){
  
    return (<RecoilRoot>
        <Appbar></Appbar>
        <InitUser></InitUser>
        <Component {...pageProps} />
        </RecoilRoot>)
}