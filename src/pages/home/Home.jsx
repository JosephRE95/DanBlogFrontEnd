import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import Footer from "../../components/footer/Footer";

export default function Home() {

  return (
    <>
    
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}