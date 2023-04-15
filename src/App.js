import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (<div className="loader-container"> </div> ):(
      <Main/>
      )    
}
</div>
  );
}

export default App;
