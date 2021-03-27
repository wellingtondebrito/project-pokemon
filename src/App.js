import React from 'react'
import Router from './Routers/Router'
import GlobalState from './global/globalState'



function App() {

  return (
    <GlobalState>
        <Router />
     </GlobalState>
  );
}

export default App;
