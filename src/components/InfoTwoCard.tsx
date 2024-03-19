import React, { ReactNode } from "react";
import Image from "next/image";

import styles from "./InfoTwoCard.module.scss";

interface InfoTwoCardProps {
  children: ReactNode;
  percent: string;
  text: string;
  pathToSvg: string;
}

const InfoTwoCard: React.FC<InfoTwoCardProps> = ({
  children,
  text,
  pathToSvg,
  percent,
}) => {
  return (
    <div className={styles.card__frame}>
      <Image src={pathToSvg} alt="info card" width={0} height={0} />
      <p className={styles.card__frame_percent}>{percent}</p>
      <div className={styles.card__frame_text}>{children}</div>
      <p className={styles.card__frame_mark}>{text}</p>
    </div>
  );
};

export default InfoTwoCard;
