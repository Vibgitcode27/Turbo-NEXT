import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Appbar from '@/components/Appbar.'
import { RecoilRoot ,useRecoilValue , useRecoilState , useSetRecoilState } from 'recoil'
import { isUserLoading , userState } from 'store'
import axios from "axios"
import { useEffect } from 'react'

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
      <InitUser/>
    </div>
  }
  return <div>
    <Appbar/>
    <Component {...pageProps} />
  </div>
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async() => {
      try {
          const response = await axios.get(`/api/auth/me`, {
              headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
              }
          })

          if (response.data.user) {
              setUser({
                  isLoading: false,
                  userEmail: response.data.user.username
              })
          } else {
              setUser({
                  isLoading: false,
                  userEmail: null
              })
          }
      } catch (e) {

          setUser({
              isLoading: false,
              userEmail: null
          })
      }
  };

  useEffect(() => {
      init();
  }, []);

  return <></>
}