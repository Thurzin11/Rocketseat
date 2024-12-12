import "./global.css";
import styles from "../src/App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/Thurzin11.png",
        name: "Thurzin",
        role: "Software Developer",
      },
      content:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      publishedAt: new Date("2024-12-11 09:00:00"),
      imgPath: "https://picsum.photos/200/300?random=1",
      comments: [
        {
          author: "Jose da Silva",
          textComment: "Parabéns, ficou muito bom!",
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/Thurzin11.png",
        name: "Jose da Silva",
        role: "Software Developer",
      },
      content:
        "Concluí o curso de JavaScript e já estou desenvolvendo meu primeiro projeto!",
      publishedAt: new Date("2024-12-10 09:00:00"),
      imgPath: "https://picsum.photos/200/300?random=1",
      comments: [
        {
          author: "Arthur",
          textComment: "Parabéns, ficou muito bom!",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author.name}
              content={post.content}
              comments={post.comments}
              imgPath={post.author.avatarUrl}
              postedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
