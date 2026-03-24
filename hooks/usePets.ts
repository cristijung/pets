
import { useState, useEffect } from "react";

interface Pet {
  id: number;
  nome: string;
  especie: "Cachorro" | "Gato"; // union type
  idade: string;
  imagem: string;
}

export function usePets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPets() {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData: Pet[] = [
          {
            id: 1,
            nome: "Yoona",
            especie: "Cachorro",
            idade: "2 anos",
            imagem: "/dog.jpg",
          },
          {
            id: 2,
            nome: "Grogu",
            especie: "Gato",
            idade: "1 ano",
            imagem: "/cat.jpg",
          },
          {
            id: 3,
            nome: "Seth",
            especie: "Gato",
            idade: "3 anos",
            imagem: "/cat2.jpg",
          },
        ];

        setPets(mockData);
      } catch (error) {
        setError("Ops! Não conseguimos carregar os pets!");
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, []); // array de dependencias -- isso faz com q o useEffect execute a função somente 1x

  return { pets, loading, error };
}
