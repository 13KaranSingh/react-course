import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

/**
+ * The main App component.
+ * 
+ * This component renders the main structure of the application.
+ * It contains a greeting message and a heading.
+ * 
+ * @returns {JSX.Element} The rendered App component.
+ */
function App() {
  return (
    // The main div for the App component
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event)=>{
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div>
        <div className="todo__wrapper">
          <Todo
           title = "Finish FES"
           />
          <Todo
            title = "Finish Interview Section"
           />
          <Todo
           title = "Land a job"
          />
        </div>
      </div>
      <Modal  title = "Are you ?"/>
    </div>
  );
}

export default App;
