'use client'

import {useState} from "react";
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';

import { app } from '../../../firebase_Config';

const auth = getAuth(app);


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState((''));

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // FirebaseのsignInWithEmailAndPasswordメソッドを使用してログイン
            await signInWithEmailAndPassword(auth, email, password);
            // router.push('/dashboard'); // ログイン成功後、ダッシュボードページにリダイレクト
            console.log('ok');
        } catch (error) {
            console.log('Login Error', error);
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;