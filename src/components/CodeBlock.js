import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; 
import 'prismjs/themes/prism-tomorrow.css'; 
import 'prismjs/components/prism-javascript'; 

import { Copy } from 'lucide-react';


import "./css/codeBlock.css"

export const  CodeBlock=({ code })=>{
    const codeRef = useRef(null);
  
    useEffect(() => {
      Prism.highlightAll();
    }, []);
  
    const copyToClipboard = () => {
      const codeElement = codeRef.current;
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    };
  
    return (
      <div>
        <div className="code-container">
          <pre>
            <code ref={codeRef} className="language-javascript">
              {code}
            </code>
          </pre>
        </div>
        <button onClick={copyToClipboard} className="copy-button">
          <Copy size={16} />
        </button>
      </div>
    );
  }
