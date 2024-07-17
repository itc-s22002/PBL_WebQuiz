'use client'

import { getDoc, doc, getFirestore, query, collection, where, getDocs} from "firebase/firestore"
import React, {useState, useEffect, Component} from "react";
import app from '../../../firebase_Config'
import { useRouter } from 'next/navigation';


const firestore = getFirestore(app)

//出題画面
const Question = () => {

    const [quiz, setQuiz] = useState(null);
    const [choice, setChoise] = useState([]);
    //const randomNumber = Math.floor(Math.random() * (2 + 1 - 1)) + 1;
    const randomNumber = 0;
    const router = useRouter();
    



    const fetchData = async () => {
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
    useEffect(() => {
        fetchData();
    }, []);

    return (
        // <h1>Question:出題</h1>
    //     <>
    //     {quiz ? (
    //             <div style={{width: 498, height: 275, position: 'relative', background: 'white'}}>
    //                 <div>
    //                     <div style={{left: 92, top: 42, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
    //                         <div dangerouslySetInnerHTML={{__html:String(quiz.question)}}/>
    //                     </div>
    //                 </div>
    //                 <div>
    //                     <div onClick={() => router.push(`/explanation?choiseid=${choice[3].id}&quizid=${choice[3].quiz_id}`)} style={{width: 141.96, height: 33, left: 283, top: 200, position: 'absolute'}}>
    //                         <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
    //                         <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
    //                             {choice[3].choice}<br/>
    //                         </div>
    //                     </div>
    //                     <div onClick={() => router.push(`/explanation?choiseid=${choice[2].id}&quizid=${choice[2].quiz_id}`)}style={{width: 141.96, height: 33, left: 73, top: 200, position: 'absolute'}}>
    //                         <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
    //                         <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
    //                             {choice[2].choice}</div>
    //                         </div>
    //                     <div onClick={() => router.push(`/explanation?choiseid=${choice[1].id}&quizid=${choice[1].quiz_id}`)} style={{width: 141.96, height: 33, left: 283, top: 141, position: 'absolute'}}>
    //                         <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
    //                         <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
    //                             {choice[1].choice}</div>
    //                         </div>
    //                     <div onClick={() => router.push(`/explanation?choiseid=${choice[0].id}&quizid=${choice[0].quiz_id}`)} style={{width: 141.96, height: 33, left: 73, top: 141, position: 'absolute'}}>
    //                         <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
    //                         <div style={{width: 74.13, height: 18.78, left: 34, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
    //                             {choice[0].choice}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //     ):(
    //             <></>
    //     )}
        
    //   </>
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
                </div>
            </div>
    ):(
            <></>
    )}
    
  </>
)
}

export default Question