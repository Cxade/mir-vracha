import React, { FC } from "react";
import Image from "next/image";
import styles from "./InfoOne.module.scss";

const InfoOne: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__text_box}>
        <p className={styles.card__text}>
          В десятилетнем исследовании
          <span className="bold">
            «Генетическая эпидемиология ХОБЛ» (COPDGene)
          </span>
          среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено{" "}
          <span className="bold">преобладание женщин (66%)</span>, а в возрасте
          60-64 лет количество женщин и мужчин.
        </p>
        <p className={styles.card__text}>
          Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть
          связано с тем, что дыхательные пути курящих женщин имеют более{" "}
          <span className="bold">высокий процент площади стенок</span>, но
          меньшую площадь просвета, внутренний диаметр и толщину дыхательных
          путей по сравнению с курящими мужчинами.
        </p>
      </div>
      <Image src="/diagram_info.png" alt="diagram" width={1211} height={389} />
    </div>
  );
};

export default InfoOne;
