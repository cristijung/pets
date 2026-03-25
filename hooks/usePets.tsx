'use client';

import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode, 
  useCallback 
} from 'react';

// tipos da entidade Pet do sistema
export interface Pet {
  id: string;
  nome: string;
  especie: string;
  idade: string;
  imagem: string;
}

// tipos do retorno da TheCatAPI  ....
interface CatApiResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface PetContextData {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  refreshPets: () => Promise<void>;
}

const PetContext = createContext<PetContextData | undefined>(undefined);

export function PetProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPets = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12');
      
      if (!response.ok) throw new Error('Erro ao buscar gatinhos na API.');

      // tipando o JSON como um array da interface da API .....
      const data: CatApiResponse[] = await response.json();

      const mappedPets: Pet[] = data.map((item) => ({
        id: item.id,
        nome: `Gatinho ${item.id.substring(0, 3).toUpperCase()}`,
        especie: 'Gato',
        idade: 'Disponível',
        imagem: item.url
      }));

      setPets(mappedPets);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  return (
    <PetContext value={{ pets, loading, error, refreshPets: fetchPets }}>
      {children}
    </PetContext>
  );
}

export function usePets(): PetContextData {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePets deve ser usado dentro de um PetProvider');
  }
  return context;
}