import "./global.css";
import styles from "../src/App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
function App() {
  const posts = [
    {
      author: "Arthur Santos Gonçalves",
      content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      comments: [
        { 
          author: "Jose da Silva",
          textComment: "Parabéns, ficou muito bom!",
        }
      ]
    }
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => (
            <Post
            key={post.author}
              author={post.author}
              content={post.content}
              comments={post.comments}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
