import logo from './logo.svg';
import './App.css';
import HOC from './HOC';
import Welcome from './Welcome';

function App() {

  const AppComp = HOC(Welcome)
  return (
    <div >

      <ol>
        <li>
          <div> <strong>High Order Components</strong>
          </div>

          <p>High Order Components(HOC) were inspired by High Order Functions. HOC takes another component as arguments, and returns an upgrades component.
            HOC is used for reusing component logic or rather used for sharing logic scross multiple components without the necessity to rewrite it in every component.
          </p>
          <AppComp/>
        </li> <br /> <br />

        <li>
        <div> <strong>What do you know about SEO</strong></div>
        <p>SEO - Search Engine Optimization, can be described as the process of enhancing your site to icrease its visibilty when people search for products or services related to your webpages or websites.
          The better the visibilty of your webpage, the more traffic it will attract to your webpage.
          Most of the Search Engines, use bots that collects data of various webpages in the web and store the data in a index(library). If anyone searches for something and the keywords match any index, all the webpages will be dsiplayed according to the rankings.
        </p>
        <p>
          React is SEO friendly but has some challenges. in React, JS constructs the DOM on runtime i.e. when we open the webpage for the first time, JS executes the code and displays elements on the webpage. SEO prefers to have content already included inside the html response.

        </p>
        </li>
       
        <li>
        <div> <strong>Clean up in useEffect</strong></div>
        <p>useEffect allows us to manage component lifecycles with a functional component. This hooks tells React to perform an action after a render. Well, there are some side effects, we should clean up before the component unmounts as if we
          fail to do this, it will lead to memory leak eg. cleaning up subscriptions, event listeners. The cleanup function in the useEffect Hook helps us clean any subscriptions, setintervals before the component unmounts.
        </p>
        </li>

        <li>
        <div> <strong>Use of usecallback and usememo</strong></div>
        <ul>
          <li>
            The useMemo Hook allows us to memorize a computed value between renders. This hook takes in two arguments - the work that has to be performed and list of dependencies.
            During Mount, when the component is rendered for the first time, React will invoke this function to run the logic, calculate the logic. Whatever is returned from the useMemo function is assigned to the variable.
            After every render, useMemo does a shallow comparison between the value of the variable before the render and after the render, and if the value is same, it will not re-render and display the previous calculated value.
          </li>
          <li>
            useCallback is similar to useMemo, but useCallback is used for functions instead of arrays and objects. Functions are compared by reference, not by value i.e. if we define a function with our components, it will re-execute on every single render, producing an identical function every time. useCallback helps us avid this, but remembering the funcntion and avoiding re-render if it is the same and not changed.
          </li>
        </ul>
        </li> <br />

        <li>
        <div> <strong>Why do we use keys in React</strong></div>
        <p>
         keys are props that are passed in child elements of a list and help us identify which items have changed , are added or deleted.
         It serves as an identification of an element. Keys plays an important role in the diffing algorithm.
        </p>
        </li> <br /> 

        <li>
        <div> <strong>What do you know about redux</strong></div>
        <p>
          Redux is a JS library used to manage appliation state and prevent props drilling. It helps us manage state through unidirectional data flow model. it allows for a good React architecture.
          React has 3 main components
          <ul>
          <li>Store - A store is a place where the entire state of your application list. it manages and stores data of the application and has a dispatch function.</li>
          <li>Action - Action is dispatched which are read by reducers. it is a pure object created to store the information of the user's events</li>

        <li>Reducer - reducer reads the dispatch action and then updates the store via the state accordingly. Its a pure function to return a new state from the inital state.</li>  
          </ul> 
        </p>
        </li>
      </ol>
      
    </div>
  );
}

export default App;
