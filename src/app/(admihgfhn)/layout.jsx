'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/AppContext.js'
import { getSpecificData } from '@/firebase/utils'
import { onAuth } from '@/firebase/utils'

function Home({ children }) {

    const { user, userDB, setUserProfile, setUserData, cliente, setNavItem, setCliente, setFocus, trackingDB, setTrackingDB} = useUser()
    const router = useRouter()
    useEffect(() => {
        if (user === undefined) { onAuth(setUserProfile, setUserData) }
        if (user === null) { router.replace('/') }
        if (userDB === null) { router.replace('/') }
        if (userDB && userDB !== undefined && userDB.rol !== 'Admin') { router.replace('/') }
        if (cliente === undefined) getSpecificData('/Cliente', setCliente)
        if (trackingDB === undefined ) getSpecificData('/Tracking', setTrackingDB)

    }, [user, cliente, trackingDB])
    return (

       user && user !== undefined && userDB && userDB.rol === 'Admin' && <div  onClick={() => {setFocus(false); setNavItem(false)} }>
                    <img src="/background.png" className='fixed  w-screen h-screen  object-cover  ' alt="" />

        {children}
        </div>

    )
}

export default Home