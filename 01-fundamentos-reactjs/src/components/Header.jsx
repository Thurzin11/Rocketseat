import styles from "./Header.module.css";
import ingiteLogo from "../assets/ignite-logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={ingiteLogo} alt="logo-tipo do ignite" />
    </header>
  );
}

export default Header;
