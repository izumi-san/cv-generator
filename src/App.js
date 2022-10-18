import style from './App.module.scss';
import FormContainer from './components/FormContainer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className={style.App}>
        <FormContainer />
      </div>
    </>
  );
}

export default App;
