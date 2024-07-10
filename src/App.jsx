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
        <div className="todo__wrapper">
          <Todo
           title = "Finish FES"
           paragraph = "Code along and lock in"
           />
          <Todo
            title = "Finish Interview Section"
            paragraph = "Get ready for the next interview and grind leet code"
           />
          <Todo
           title = "Land a job"
           paragraph = "Apply everywhere and reach out to recruiters"
          />
        </div>
      </div>
      <Modal  title = "Are you ?"/>
    </div>
  );
}

export default App;
