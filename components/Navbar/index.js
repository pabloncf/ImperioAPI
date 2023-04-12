import styles from "./Navbar.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/" legacyBehavior className={styles.click}>
          <a>
            <Image
              src="/images/logo.png"
              width={1280}
              height={1280}
              className={styles.logo}
            />
          </a>
        </Link>
        <h1>Império Shot Club</h1>
      </div>
    </>
  );
}
