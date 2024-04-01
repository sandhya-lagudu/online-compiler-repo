import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import {Header} from "./Header";


export function Problems() {
  const hasPageBeenRendered=useRef(0);
    const [quesList, setQuestList] = useState([]);
    const [prob,setprob] = useState({});
    useEffect(() => {
        getQuesList();
        hasPageBeenRendered.current=1;
    }, []);
    const navigate = useNavigate();
    const getQuesList = async event => {
      await Axios.get(`${import.meta.env.BACKEND_URL}/problemList`)
      .then(async res => {
        // const jsonRes=await res.json;
        // console.log(jsonRes);
        setQuestList(res.data.problems);
        console.log(quesList);
        setprob(quesList[0]);
      })
      .catch(err => {
        console.log("Error in GET", err);
      });
    };
    const handleClick=(question)=>{
      setprob(question);
      hasPageBeenRendered.current+=1;
      // console.log(prob.problemDescription);
    } 
    useEffect(()=>{
      if(hasPageBeenRendered.current>1){

        navigate('/problem',{state:prob});
      }

    },[prob]);
    return (
      <>
      <Header />
      <div id="clear" className="place-items-center pl-40 pt-11 aspect-video mr-20">
                    <table className="mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-violet-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody>
            {quesList.map((question) => {
              return (
                <tr
                //   key={index}
                
                
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    <button onClick={()=>{
                      handleClick(question);
                      // setprob(question);
                      // console.log(question.title);
                    }}> {question.title}</button>
                    
                  </th>
                  <td className="px-6 py-4">{question.difficulty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        </div>
        </>
    );
}