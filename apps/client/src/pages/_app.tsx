import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Appbar from '@/components/Appbar.'
import { RecoilRoot ,useRecoilValue , useRecoilState } from 'recoil'
import { isUserLoading } from 'store'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />

  return <RecoilRoot>
    <App2 Component={Component} pageProps={pageProps}/>
  </RecoilRoot>
}

function App2({Component , pageProps} : {Component : any , pageProps : any})
{
  const userLoading = useRecoilValue(isUserLoading)
  if(userLoading)
  {
    return <div>
      Loading...s
    </div>
  }
  return <div>
    <Appbar/>
    <Component {...pageProps} />
  </div>
}