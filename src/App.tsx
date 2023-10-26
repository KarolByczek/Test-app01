import React from 'react';
import logo from './logo.svg';
import './App.scss';




export const FullName = () => {
  const fullName: string = 'Karol Byczek';
  return (
    <div className='fullName container'>
      <span className = 'text'>My name is Jeff. ...Oh no, I mean it's: </span>{fullName}.
    </div>
  )
};

export const Birthday = () => {
  const rawDate: Date = new Date("1986-06-16");
  const birthDate: string = rawDate.toLocaleDateString();
  return (
    <div className='birthDate container'>
      <span className = 'text'>My birthdate is: </span>{birthDate}.
    </div>
  )
};

export const PresentSuggestion = () => {
  const presentSuggestions: string[] = ['Nike sneakers', 'teddybear', 'a plant in a pot', 'party costume', 'iPhone 5000', 'rollerblades'];
  const suggestedPresentIndex: number = (Math.floor(Math.random()*5.9));
  const presentProposition: string = presentSuggestions[suggestedPresentIndex];

  return (
    <div className='presentProposition container'>
      <span className = 'text'>You can buy her/him: </span>{presentProposition}.
    </div>
  )
};

function App() {
  return (
    <div className='page'>
      <FullName />
      <Birthday />
      <PresentSuggestion />
    </div>
  );
};

export default App;
