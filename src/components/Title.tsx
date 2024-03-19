import React from "react";
import Image from "next/image";
import styles from "./Title.module.scss";

type Props = { titleMargin: number; text: string };

const Title: React.FC<Props> = ({ titleMargin, text }) => {
  return (
    <div className={styles.title__box}>
      <Image
        className={styles.title__wave}
        src="/blue_wave.svg"
        alt="blue wave"
        width={100}
        height={100}
      />
      <h2
        style={{ marginBottom: `${titleMargin}px` }}
        className={styles.title__topic}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
