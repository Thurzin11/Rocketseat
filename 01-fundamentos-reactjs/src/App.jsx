import Post from "./Post";
import "./global.css";
import styles from "../src/App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Arthur Santos Gonçalves"
            content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est?"
          />
          <Post author="Jose da Silva" />
        </main>
      </div>
    </div>
  );
}

export default App;
