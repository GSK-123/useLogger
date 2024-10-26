import { useState } from 'react';
import './App.css';
import useLogger from './useLogger'; 

function App() {
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [logType, setLogType] = useState('LOG');
  const [Data, setData] = useState({ scope: '', consoleType: '', message: '' });
  const [trigger, setTrigger] = useState(0);

  useLogger(Data.scope, Data.consoleType, Data.message, trigger); 

  const handleSubmit = () => {
    setData({ scope, consoleType: logType, message });
    setTrigger(prev => prev + 1);
  };

  return (
    <div className="container">
      <div className="form">
        <input 
          type="text" 
          placeholder="SCOPE" 
          value={scope} 
          onChange={(e) => setScope(e.target.value)} 
          className="input" 
        />
        <select value={logType} onChange={(e) => setLogType(e.target.value)} className="dropdown">
          <option value="ERROR">ERROR</option>
          <option value="WARN">WARN</option>
          <option value="LOG">LOG</option>
          <option value="DEBUG">DEBUG</option>
        </select>
        
        <textarea 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="textarea" 
        />
        
        <button onClick={handleSubmit} className="button">Submit</button>
      </div>
    </div>
  );
}

export default App;
