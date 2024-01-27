import { Children } from 'react';
import Fruid from '../components/Rendering/Frurd';

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
          <h1>Who lives in my garage?</h1>
          <Car brand="Ford thon" />
      </>
    );
  }

function RowList({ children }) {

  return (
    <>
      <button>Total rows: {Children.count(children +2)}</button>
      {/* The rest of your component */}
       <Fruid />
       <br />
       <Garage />
    </>
  );
}

export default RowList;
