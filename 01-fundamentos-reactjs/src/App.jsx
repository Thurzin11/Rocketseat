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
      imgPath: "https://picsum.photos/200/300?random=1",
      comments: [
        { 
          author: "Jose da Silva",
          textComment: "Parabéns, ficou muito bom!",
        }
      ]
    },
    {
      author: "Maria Oliveira",
      content: "Concluí o curso de JavaScript e já estou desenvolvendo meu primeiro projeto!",
      imgPath: "https://picsum.photos/200/300?random=2",
      comments: [
        { 
          author: "Carlos Alberto",
          textComment: "Muito bom, Maria! Continue assim!",
        }
      ]
    },
    {
      author: "João Pedro",
      content: "Hoje foi meu primeiro dia na Premiersoft Academy. Estou muito animado!",
      imgPath: "https://picsum.photos/200/300?random=3",
      comments: [
        { 
          author: "Ana Beatriz",
          textComment: "Parabéns pela conquista, João! Sucesso na sua jornada!",
        }
      ]
    },
    {
      author: "Camila Santos",
      content: "Desenvolvi uma aplicação de controle de tarefas usando React e TypeScript. Foi um grande aprendizado!",
      imgPath: "https://picsum.photos/200/300?random=4",
      comments: [
        { 
          author: "Felipe Costa",
          textComment: "Ficou top, Camila! Eu também quero aprender React!",
        }
      ]
    },
    {
      author: "Ricardo Almeida",
      content: "Passei no processo seletivo para a empresa dos meus sonhos! Agora sou desenvolvedor pleno!",
      imgPath: "https://picsum.photos/200/300?random=5",
      comments: [
        { 
          author: "Luana Ferreira",
          textComment: "Parabéns, Ricardo! Você merece muito essa conquista!",
        }
      ]
    },
    {
      author: "Gabriela Souza",
      content: "Finalizei meu portfólio online e já estou começando a divulgar para empresas!",
      imgPath: "https://picsum.photos/200/300?random=6",
      comments: [
        { 
          author: "Marcos Vinícius",
          textComment: "Seu portfólio ficou incrível, Gabriela! Boa sorte na sua busca por oportunidades!",
        }
      ]
    },
    {
      author: "Eduardo Lima",
      content: "Consegui minha primeira vaga de estágio na área de desenvolvimento de software!",
      imgPath: "https://picsum.photos/200/300?random=7",
      comments: [
        { 
          author: "Carla Mendes",
          textComment: "Parabéns, Eduardo! Muito feliz por você!",
        }
      ]
    },
    {
      author: "Fernanda Ribeiro",
      content: "Hoje consegui resolver um bug que estava me travando por 3 dias. A sensação de vitória é indescritível!",
      imgPath: "https://picsum.photos/200/300?random=8",
      comments: [
        { 
          author: "Rafael Nunes",
          textComment: "Eu sei bem como é, Fernanda! Parabéns pela persistência!",
        }
      ]
    },
    {
      author: "Gustavo Henrique",
      content: "Acabei de lançar minha primeira extensão para o VS Code! Ela ajuda a formatar JSON de forma automática.",
      imgPath: "https://picsum.photos/200/300?random=9",
      comments: [
        { 
          author: "Pedro Martins",
          textComment: "Que da hora, Gustavo! Vou instalar agora mesmo!",
        }
      ]
    },
    {
      author: "Isabela Costa",
      content: "Publiquei meu primeiro artigo técnico no Medium sobre Clean Code!",
      imgPath: "https://picsum.photos/200/300?random=10",
      comments: [
        { 
          author: "Leonardo Borges",
          textComment: "Muito bom, Isabela! Já vou salvar para ler depois!",
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
              imgPath={post.imgPath}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
