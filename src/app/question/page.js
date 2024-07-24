'use client'

import { getDoc, doc, getFirestore, query, collection, where, getDocs,orderBy} from "firebase/firestore"
import React, {useState, useEffect, Component} from "react";
import app from '../../../firebase_Config'
import {useRouter} from "next/navigation";


const firestore = getFirestore(app)

//出題画面
const Question = () => {
    //firebaseから取ってきたquizを入れる変数
    const [quiz, setQuiz] = useState(null);
    //firebaseから取ってきたchoiceを入れる配列
    const [choice, setChoise] = useState([]);
    //ランダムで呼び出すやつ
    const randomNumber = Math.floor(Math.random() * (3 + 1 - 0)) + 0;
    //画面遷移に使うやつ
    const router = useRouter();
    


    //firebaseから取ってくる
    const fetchData = async () => {
        //get
        try {
            const quizDocRef = doc(firestore, 'quiz',String(randomNumber));
            const choiceDocRef = query(collection(firestore,'choice'),where('quiz_id','==',randomNumber))
            const quizSnapshot = await getDoc(quizDocRef);
            const choiceSnapshot = await getDocs(choiceDocRef);
            if (quizSnapshot.exists()) {
                const q = quizSnapshot.data()
                const c = choiceSnapshot.docs.map(doc=>({ id: doc.id, ...doc.data() }))
                setQuiz(q);
                setChoise(c);
                console.log("question: ",q);
                console.log("choice: ",c);
            } else {
                console.log('Quiz not found');
            }
        } catch (error){
            console.error('Error fetching quiz data: ', error);
        }
    };
    //アクセスと同時にやる関数
    useEffect(() => {
        fetchData();
    }, []);

    return (
    <>
    {quiz ? (
            <div style={{width: 498, height: 275,background: 'white'}}>
                <div>
                    <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                        問題:
                        <div dangerouslySetInnerHTML={{__html:String(quiz.question)}}/>
                    </div>
                </div>
                <div style={{position: 'absolute'}}>
                    <div onClick={() => router.push(`/explanation?choiseid=${choice[3].id}&quizid=${choice[3].quiz_id}`)} style={{width: 141.96, height: 33, left: 283, top: 100, position: 'absolute'}}>
                        <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                        <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                            {choice[3].choice}<br/>
                        </div>
                    </div>
                    <div onClick={() => router.push(`/explanation?choiseid=${choice[2].id}&quizid=${choice[2].quiz_id}`)}style={{width: 141.96, height: 33, left: 73, top: 100, position: 'absolute'}}>
                        <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                        <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                            {choice[2].choice}</div>
                        </div>
                    <div onClick={() => router.push(`/explanation?choiseid=${choice[1].id}&quizid=${choice[1].quiz_id}`)} style={{width: 141.96, height: 33, left: 283, top: 50, position: 'absolute'}}>
                        <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                        <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                            {choice[1].choice}</div>
                        </div>
                    <div onClick={() => router.push(`/explanation?choiseid=${choice[0].id}&quizid=${choice[0].quiz_id}`)} style={{width: 141.96, height: 33, left: 73, top: 50, position: 'absolute'}}>
                        <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                        <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                            {choice[0].choice}
                        </div>
                    </div>
                    <div onClick={() => router.push('/start')} style={{width: 141.96, height: 33, left: 175, top: 150, position: 'absolute'}}>
                        <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                        <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                            end
                        </div>
                    </div>
                </div>
            </div>
    ):(
            <></>
    )}

  </>
)
}

export default Question