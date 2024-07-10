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
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
