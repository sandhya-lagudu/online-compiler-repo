import { useLocation } from "react-router-dom";
import Editor from 'react-simple-code-editor';
import {useState} from "react";
import {highlight, languages} from 'prismjs/components//prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import Axios from "axios";


export function CurProblem(){
    // console.log("This is curproblem jsx");
    const location=useLocation();
    const problem=location.state;
    const [lang,setLang] = useState('cpp');
    const [inp,setInp]=useState("This is inp");
    const [out,setOut]=useState(`Output will appear here`);
    const [verdict,setVerdict]=useState(`Here is the verdict`);
    const [code, setCode] = useState(`#include <iostream> 
    using namespace std;
    // Define the main function
    int main() { 
        // Declare variables
        int num1, num2, sum;
        // Prompt user for input
        cin >> num1 >> num2;  
        // Calculate the sum
        sum = num1 + num2;  
        // Output the result
        cout << "The sum of the two numbers is: " << sum;  
        // Return 0 to indicate successful execution
        return 0;  
    }`);

    const url=`${import.meta.env.BACKEND_URL}/viewProblem/${problem._id}/run`;
    const submitUrl=`${import.meta.env.BACKEND_URL}/viewProblem/${problem._id}/submit`;
    
    const sendCode=async (funcUrl)=>{
      const payload={
        lang,
        code,
        inp
      };
      try{
        // console.log(inp);
        const {data} = await Axios.post(`${funcUrl}`,payload);
        // console.log(data.output);
        console.log(data.output);
        setOut(data.output);
      }
      catch(error){
        console.log(error.response);
        // setOut("Compilation error");
      }
    };

    const sendCodeSubmit=async (funcUrl)=>{
      const payloadSubmit={
        lang,
        code
      };
      try{
        // console.log(lang);
        // console.log(code);
        const {data} = await Axios.post(`${funcUrl}`,payloadSubmit);
        // console.log(data.output);
        // console.log(data.output);
        setVerdict(data.verdict);
      }
      catch(error){
        console.log(error.response);
      }
    };
    return (
      <>
    <div className="flex-horizontal pt-0 pl-20 bg-violet-200">

<div className="flex px-10 max-w-screen-xl aspect-video items-stretch">
  <div className="container border-collapse place-items-center px-10 py-24 max-w-screen-sm">
    <h1 className="text-3xl">Problem Description</h1>
    <br />
    <h2 className="text-xl text-wrap">{problem.title}</h2>
    <br />
    <p className="leading-relaxed">{problem.problemDescription}</p>
    <br />
    <h3 className="text-md font-mono">Sample Input:</h3>
    
     <pre className="code-badge-pre text-wrap">
      <code className="hljs">
         {problem.testcases[0].input} 
        
      </code>
    </pre> 

  
    <br />
    <h3 className="text-md font-mono">Sample Output:</h3>
    <pre className="code-badge-pre text-wrap">
      <code className="hljs">
        {problem.testcases[0].output}
      </code>
    </pre>
  </div>
  
  <div className="max-w-screen-sm px-10 py-10">
  <div className="col-sm-8">
                <select className="form-control rounded-md" id="languages" onChange={(e)=>setLang(e.target.value)}>
                  <option value="c">C</option>
                  <option value="cpp" selected="">C++</option>
                  <option value="java">Java</option>
                  <option value="py">Python 3</option>
                </select>
              </div>
              <br />
  <div className="bg-gray-100 shadow-md w-full max-w-lg pt-10 items-stretch rounded-xl" style={{ width: '800px', height: '600px', overflowY: 'auto' }}>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              outline: 'none',
              border: 'none',
              backgroundColor: '#f7fafc',
              height: '100%',
              overflowY: 'auto'
            }}
          />
        </div>
        <br />
        <div className="space-x-4">
        <button type="button" onClick={()=>{sendCode(url)}} class="bg-violet-500 py-1.5 px-1.5 rounded-xl text-xl shadow-2xl shadow-violet-950">
          Run
        </button>
        <button type="button" onClick={()=>{sendCodeSubmit(submitUrl)}} class="bg-violet-500 py-1.5 px-1.5 rounded-xl text-xl shadow-2xl shadow-violet-950">
          Submit
        </button>
        </div>
  </div>
  </div>
  <div className="container pl-72 py-10 items-center">
    <div className="container content-evenly">
  <h3>Custom Input:</h3>
  <textarea
  className="rounded-xl"
            rows={15}
            cols={110}
            type="textbox"
            // value={this.state.value}
            onChange={e=>{setInp(e.target.value)}}
         />
    <br />
    <h3>Custom Output:</h3>
    <pre className="code-badge-pre w-1/2">
      <code className="hljs">
        {out}
      </code>
    </pre>
    <br />
    <h3>Verdict:</h3>
    <pre className="code-badge-pre w-1/2">
      <code className="hljs">
        {verdict}
      </code>
    </pre>
    </div>
    </div>
</div>
</>
    );
};

// export default CurProblem;