'use client'

import {useState, useEffect} from "react";
import { onAuthStateChanged,getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '../../../firebase_Config';
const auth = getAuth(app);

//スタート画面
const Start = () => {
    const router = useRouter();

        const [user, setUser] = useState(null);

        useEffect(() => {

            // ログイン状態が変更されたときに呼ばれるコールバック
            const unsubscribe = onAuthStateChanged(auth, (authUser) => {
                if (authUser) {
                    setUser(authUser);
                    // router.push('/start');
                } else {
                    setUser(null);
                    console.log("ng")
                    router.push('/login');
                }
            });

            // コンポーネントがアンマウントされるときにunsubscribe
            return () => unsubscribe();
        }, []);

    return (
        <div style={{width: 498, height: 275, position: 'relative', background: 'white'}}>
            <div style={{width: 132, height: 67, left: 77, top: 87, position: 'absolute', color: '#050505', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Teston
            </div>
            <div style={{width: 150, height: 45, left: 272, top: 143, position: 'absolute', background: '#E77878', borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div onClick={() => router.push('/question')} style={{alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                        start
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Start