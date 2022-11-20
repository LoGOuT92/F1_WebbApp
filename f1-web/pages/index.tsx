import Content from "../components/Content/Content";
import MoreNews from "../components/Content/MoreNews/MoreNews";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <MoreNews />
    </div>
  );
}
