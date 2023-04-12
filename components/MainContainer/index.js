import Navbar from "../Navbar";
import styles from "./MainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </>
  );
}
