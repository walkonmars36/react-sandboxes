import "./App.css";

import ChildComponent from "./components/ChildComponent";
import UserProvider from "./context/UserContext";

const App = () => {
  // const userContext = {
  //   users: ["matt", "charlie"],
  //   sayHello: () => {console.log("Hello");}
  // }
  return (
    <div className="App">
      <h1>Context</h1>
      {/* <UserContext.Provider value={userContext}>
        <ChildComponent />
      </UserContext.Provider> */}
      <UserProvider>
        <ChildComponent />
      </UserProvider>
    </div>
  );
};

export default App;
