import React, { FC } from "react";
import Image from "next/image";
import styles from "./InfoTwo.module.scss";
import InfoTwoCard from "./InfoTwoCard";

const InfoTwo: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__text_box}>
        <p className={styles.card__text}>
          <span className="bold">
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
            77% пациентов&sup1;.
          </span>
        </p>
        <p className={styles.card__text}>
          В течение 5 лет после первого тяжёлого обострения в живых остаются
          только 40% пациентов.&sup2; Прогноз после обострений ХОБЛ схож с
          таковым при сердечной недостаточности, инфаркте миокарда и некоторых
          злокачественных опухолях.
        </p>
      </div>
      <p className={styles.card__heading}>Пятилетняя выживаемость пациентов</p>
      <div className={styles.card__box}>
        <InfoTwoCard
          pathToSvg="/info_card_1.svg"
          percent="45,5%"
          text="Популяционное когортное исследование (N=385)"
        >
          <p className={styles.card__frame_text}>
            пациентов с{" "}
            <span className="bold">сердечной недостаточностью&sup1;</span>
          </p>
        </InfoTwoCard>
        <InfoTwoCard
          pathToSvg="/info_card_2.svg"
          percent="55,3%"
          text="Апостериорный анализ когортного исследования (N=2887)"
        >
          <p className={styles.card__frame_text}>
            пациентов с <span className="bold">инфарктом миокарда&sup1;</span>
          </p>
        </InfoTwoCard>
        <InfoTwoCard
          pathToSvg="/info_card_3.svg"
          percent="50,5%"
          text="Исследование Национальной статистической службы (N=42642)"
        >
          <p className={styles.card__frame_text}>
            пациентов с <span className="bold">раком мочевого пузыря</span>
          </p>
        </InfoTwoCard>
      </div>
    </div>
  );
};

export default InfoTwo;
