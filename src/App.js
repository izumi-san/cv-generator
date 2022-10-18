import style from './App.module.scss';
import FormContainer from './components/FormContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className={style.App}>
        <FormContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
