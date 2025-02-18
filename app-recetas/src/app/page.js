'use client';

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecipe('aqui veremos la receta')

  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Recomendador de Recetas AI</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingresa tus ingredientes..."
            rows={4} 
          />
          <button type="submit" className={styles.primary}>Obtener Receta</button>
        </form>
        {recipe && (
          <div className={styles.recipe}>
            <h2>Receta Recomendada:</h2>
            <p>{recipe}</p>
          </div>
        )}
      </main>
    </div>
  );
}
