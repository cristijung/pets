'use client';
import styles from './pageHome.module.css';
import { usePets } from '@/hooks/usePets';


export default function Home() {
  const { pets, loading, error } = usePets();


  return (
    <>
      <main className="container">
        <section className={styles.hero}>
          <h1>Encontre seu melhor amigo</h1>
          <p>No <strong>Ponto do Pets</strong>, conectamos corações e lares.</p>
        </section>

        <section className={styles.container}>
          <h2>Disponíveis para adoção!</h2>
          {loading && <p className={styles.message}>Carregando fofuras de pelos ...</p>}
          {error  && <p className={styles.error}>{error}</p>}

          <div className={styles.grid}>
          {!loading && pets.map((pet) => (
            <div key={pet.id} className={styles.card}>
              <div className={styles.imgPlaceholder}>📸</div>
              <h3>{pet.nome}</h3>
              <span>{pet.especie} • {pet.idade}</span>
              <button className={styles.btnAdopt}>Quero Conhecer</button>
            </div>
          ))}
        </div>


        </section>
        
      </main>
    </>
  );
}
