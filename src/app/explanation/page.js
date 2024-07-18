'use client'

import { getDoc, doc, getFirestore, query, collection, where, getDocs,updateDoc} from "firebase/firestore"
import React, {useState, useEffect} from "react";
import app from '../../../firebase_Config'
import {useRouter} from 'next/navigation';
import { useSearchParams } from "next/navigation";

const firestore = getFirestore(app)


//解説画面
const Explanation = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [quiz, setQuiz] = useState(null);
    const [statistics, setStatistics] = useState([]);
    const quizId = searchParams.get('quizid')
    const choiceId = searchParams.get('choiseid')

    const fetchData = async () => {
        try {
            const quizDocRef = doc(firestore, 'quiz',String(quizId));
            const statisticsDocRef = doc(firestore, 'statistics',String(choiceId));
            const quizSnapshot = await getDoc(quizDocRef);
            const statisticsSnapshot = await getDoc(statisticsDocRef);
            if (quizSnapshot.exists()) {
                const q = quizSnapshot.data()
                const s = statisticsSnapshot.data()
                try {
                    const docRef = doc(firestore, 'statistics', String(choiceId));
                    const docRef2 = doc(firestore, 'quiz', String(quizId));
                    await updateDoc(docRef, {choice_responses:s.choice_responses+1})
                    await updateDoc(docRef2, {total_reaoinses:q.total_reaoinses+1})
                } catch (error) {
                    console.error('Error adding document: ', error);
                }
                setQuiz(q);
                setStatistics(s);
                console.log("question: ",q);
                console.log("statistics: ",s);
            } else {
                console.log('Quiz not found');
            }
        } catch (error){
            console.error('Error fetching quiz data: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <>
        {quiz ? (
            <div style={{padding: 12,max_width: 800,margin:(0,"auto")}}>
                <div style={{left: 50, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400'}}>
                    解説:<p style={{textAlign:"left"}} dangerouslySetInnerHTML={{__html:String(quiz.description)}}/>
                </div>
                <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400'}}>
                    <p>total:{quiz.total_reaoinses+1}</p>
                    <p>choice:{statistics.choice_responses+1}</p>
                    <p>{Math.floor((statistics.choice_responses + 1) / (quiz.total_reaoinses + 1) * 100)}%</p>
                </div>
                <div style={{width: 141.96, height: 33, left: 296, position: 'absolute'}}>
                    <div onClick={() => router.push('/question')} style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                    <div onClick={() => router.push('/question')} style={{width: 74.13, height: 18.78, left: 34, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400'}}>
                        next
                    </div>
                </div>
            </div>
        ):(
            <p></p>
        )}
        </>
        );
}

export default Explanation