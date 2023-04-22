import React from 'react'; 
import './app.jsx';
import 'my-react.app/src/App.css';

/* I markup that convertes html tags into 
elements
(variables) 
/*Part 1*/
let Gilbert = <h1>Hello, world!</h1>; 


/*Part 2*/
const name = 'Xavi';
const Ashley = <h1>Hello, {name}</h1>;

/* Part 3 */

  
  const user = {
    petAnimal: 'monkey',
    petName: 'Hunter'
  }; 
  function formatName(user) {
    return 'i have a pet '+user.petAnimal + 'its named ' 
    + user.petName;
  }
  
  const et = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  const Daniel = {
    height: '5`6',
    hairLength: 'short',
    mind: 'crazy' 
  }

  function kevin(){
    return 'Hello I am Daniel my height is ' + Daniel.height +
    'and my hair is ' + Daniel.hairLength +
    'im also ' + Daniel.mind 
  }

  const randomthing = (
    <h1> {kevin(Daniel)}</h1>
  )
  
  
  
  
  
  
  /* Part 4 */
  const el = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
      </div>
  );


  /*KEY WORDS*/
 
  /*JSX: JSX is an extention to HTML and React */

  /*Rendering: Let's you grab a specific part of your code 
  to edit*/
  const root = ReactDOM.createRoot(
  document.getElementById('root')
);/*ReactDOM is a package allows 
you to use JS and HTML more 
.createRoot creates a React root for 
displaying content inside a browser DOM element.
*/
const e = <h1>Hello, world</h1>;
root.render(e);

const root1 = ReactDOM.createRoot(
    document.getElementById('root')
  );

  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  
  setInterval(tick, 1000);
  
/*Async:*/


/*Await:*/

  export default JSX;