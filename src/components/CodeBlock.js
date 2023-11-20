import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; 
import 'prismjs/themes/prism-tomorrow.css'; 
import 'prismjs/components/prism-javascript'; 



import "./css/codeBlock.css"

export const  CodeBlock=({ code })=>{
    const codeRef = useRef(null);
  
    useEffect(() => {
      Prism.highlightAll();
    }, []);
  
  
  
    return (
      <div>
        <div className="code-container">
          <pre className='custom-code-block'>
            <code ref={codeRef} className="language-javascript">
              {code}
            </code>
          </pre>
        </div>
       
      </div>
    );
  }
