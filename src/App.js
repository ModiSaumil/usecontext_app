import React from 'react';
import { UserProvider } from './usecontext';
import SignupForm from './signup';
import DisplayData from './aboutus';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <SignupForm />
        <DisplayData />
      </div>
    </UserProvider>
  );
}

export default App;
