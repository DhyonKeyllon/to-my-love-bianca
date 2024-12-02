import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Te amo minha morena, Bianca! 💘
      </h1>

      <p className={styles.description}>
        <span>Obrigado por ser essa pessoa (gostosa) que completa minha metade. </span>
        <span>Você sempre vai ser um pedaço de mim! Os mesmos neuronios, ideias e brisas...</span>
        <span>Mas que nossa brisa sempre exista independente da altura das ondas do nosso mar.</span>
      </p>


      <div className={styles.final}>
        <span>Com <span className={styles.withLove}>amor</span>, </span>
        <span>de Dhyon</span>
        <span>para <strong>Bianca</strong></span>  
      </div>      
    </div>
  );
}
