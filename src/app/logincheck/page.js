'use client'
import {useState, useEffect} from "react";
import { onAuthStateChanged,getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { app } from '../../../firebase_Config';

const auth = getAuth(app);


const UserInfoPage = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
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

    if (user) {
        return (
            <div>
                <h1>
                    ユーザー情報
                </h1>
                <p>Email:{user.email}</p>
                <p>User ID: {user.uid}</p>
            </div>
        );
    } else {
        // ユーザーがログインしていない場合の表示
        return <p>Loading...</p>;
    }
};

export default UserInfoPage;