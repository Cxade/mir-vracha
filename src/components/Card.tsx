import React, { ReactNode } from "react";
import Image from "next/image";

import styles from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
  text: string;
  pathToSvg: string;
}

const Card: React.FC<CardProps> = ({ children, text, pathToSvg }) => {
  return (
    <div className={styles.card}>
      <Image src={pathToSvg} alt="Inhalation drug" width={178} height={145} />
      <div className={styles.card__heading}>{children}</div>

      <p className={styles.card__text}>{text}</p>
    </div>
  );
};

export default Card;
