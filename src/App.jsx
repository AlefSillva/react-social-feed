import styles from './App.module.css'
import Header from './components/structure/Header'
import Main from './components/structure/Main'
import Footer from './components/structure/Footer'

function App() {

  return (
    <div className={styles["app-container"]}> 
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
