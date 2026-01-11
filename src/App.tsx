import './App.css';
import Counter from './components/Counter/Counter';
import DynamicForm from './components/DynamicForm/DynamicForm';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  return (
    <>
      <div className="body_flex_container">
        <DynamicForm />
        <ModalWindow />
        <Counter />
      </div>
    </>
  );
}

export default App;
