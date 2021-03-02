import React, {
  useState, createContext, useContext, useEffect, useCallback,
} from 'react';
import { getTechnology, getTechnologyCosts, getTechnologyTerms } from '../services/technology';

const TechnologyContext = createContext({});

const TechnologyProvider = ({ children, technologyID }: any): JSX.Element => {
  const [technology, setTechnology] = useState({});

  const loadData = useCallback(
    async () => {
      const tech = await getTechnology(technologyID, {
        taxonomies: true,
        normalizeTaxonomies: true,
      } as any);

      setTechnology(tech);
    },
    [],
  );

  useEffect(() => {
    loadData();
  }, []);

  return (
    <TechnologyContext.Provider
      value={technology}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

const useTechnology = (): any => {
  const context = useContext(TechnologyContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { TechnologyProvider, useTechnology };
