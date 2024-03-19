import { FC, useEffect, useRef, useState } from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import Title from "@/components/Title";
import Card from "@/components/Card";
import InfoOne from "@/components/InfoOne";
import InfoTwo from "@/components/InfoTwo";

const Home: FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const popupRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen1(false);
      setIsOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={styles.top__image}>
        <Image
          className={styles.top__image_1}
          src="/top image 1.svg"
          alt="decoration"
          width={1247}
          height={77}
        />
        <Image
          className={styles.top__image_2}
          src="/top image 2.svg"
          alt="decoration"
          width={939}
          height={69}
        />
        <Image
          className={styles.top__image_3}
          src="/top image 3.svg"
          alt="decoration"
          width={1039}
          height={67}
        />
      </div>
      <div className={styles.disease}>
        <div className={`${styles.disease__main} center`}>
          <Title titleMargin={50} text="ХОБЛ: мифы и реальность" />
          <div className={styles.disease__info_box}>
            <div
              className={styles.disease__info}
              onClick={() => setIsOpen1(true)}
            >
              <div className={styles.disease__info_icon}>
                <Image
                  src="/icon_person.svg"
                  alt="icon person"
                  width={39}
                  height={38}
                />
              </div>
              <div className={styles.disease__info_border}>
                <p className={styles.disease__info_title}>
                  ХОБЛ болеют
                  <span className="bold"> преимущественно мужчины?</span>
                </p>
                <Image
                  className={styles.disease__info_frame}
                  src="/border.svg"
                  alt="border"
                  width={0}
                  height={0}
                />
              </div>
              <div className={styles.disease__info_text}>
                В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
                (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет,
                было выявлено преобладание...
                <div className={styles.disease__info_fade}></div>
              </div>
            </div>

            {isOpen1 && (
              <div ref={popupRef}>
                <InfoOne />
              </div>
            )}
            <div
              className={styles.disease__info}
              onClick={() => setIsOpen2(true)}
            >
              <div className={styles.disease__info_icon}>
                <Image
                  src="/icon_arrow.svg"
                  alt="icon arrow"
                  width={44}
                  height={44}
                />
              </div>
              <div className={styles.disease__info_border}>
                <p className={styles.disease__info_title}>
                  <span className="bold">Опасно </span>не наличие заболевания, а
                  обострения?
                </p>
                <Image
                  className={styles.disease__info_frame}
                  src="/border.svg"
                  alt="border"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.disease__info_text}>
                Большинство пациентов с ХОБЛ столкнется с обострениями: как
                минимум одно среднетяжелое или тяжелое обострение случится в
                течение...
                <div className={styles.disease__info_fade}></div>
              </div>
            </div>

            {isOpen2 && (
              <div ref={popupRef}>
                <InfoTwo />
              </div>
            )}
          </div>
          <Title titleMargin={40} text="Терапия ХОБЛ: что в фокусе?" />
          <div className={styles.disease__heading}>
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </div>
          <p className={styles.disease__title}>
            Приоритетные направления фармакотерапевтической стратегии при
            ХОБЛ&sup1;:
          </p>
          <div className={styles.disease__cards_box}>
            <Card
              pathToSvg="/drug_1.svg"
              text="Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов&sup1;"
            >
              <p>
                Ингаляционный<span className="bold"> антихолинергик</span>
              </p>
            </Card>
            <Card
              pathToSvg="/drug_2.svg"
              text="Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции"
            >
              <p style={{ maxWidth: "254px" }}>
                Ингаляционный
                <span className="bold"> β2-агонист</span>
              </p>
            </Card>
            <Card
              pathToSvg="/drug_3.svg"
              text="Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов&sup1;"
            >
              <p>
                Ингаляционный<span className="bold"> глюкокортикостероид </span>
                (ИГКС)
              </p>
            </Card>
          </div>
          <div className={styles.disease__arrow_box}>
            <div className={styles.disease__arrow_line}>
              <div className={styles.disease__arrow}></div>
            </div>
            <div className={styles.disease__arrow_line}>
              <div className={styles.disease__arrow}></div>
            </div>
          </div>
          <div className={styles.disease__description_box}>
            <div className={styles.disease__description}>
              <p>
                Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров
                с разными механизмами действия;
              </p>
              <p></p>
              Назначение 2-х бронходилататоров из группы длительнодействующих
              β2-агонистов (ДДБА) и длительнодействующих антихолинергиков
              (ДДАХ), действие которых дополняет и усиливает друг друга&sup1;.
            </div>
            <div className={styles.disease__description}>
              <p>
                Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых
                обострений в течение 1 года/1 тяжелое обострение, потребовавшее
                госпитализации) рекомендуется назначение ИГКС в дополнение к
                ДДБА;
              </p>
              <p>
                Последние исследования показали, что амбулаторное применение
                ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по
                сравнению с пациентами, принимавшими только ДДБА (8,1% vs
                13,2%)&sup1;.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
