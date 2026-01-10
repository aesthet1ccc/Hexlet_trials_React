import './App.css';
import DynamicForm from './components/DynamicForm/DynamicForm';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  return (
    <>
      <div className="body_flex_container">
        <DynamicForm />
        <ModalWindow />
      </div>
    </>
  );
}

export default App;
