import React, {
  useState, createContext, useContext, useEffect, useCallback,
} from 'react';
import { getTechnology, getTechnologyCosts } from '../services/technology';

const TechnologyContext = createContext({});

const TechnologyProvider = ({ children, technologyId }: any): JSX.Element => {
  const [technology, setTechnology] = useState({});

  const loadData = useCallback(
    async () => {
      let tech = await getTechnology(technologyId, {
        taxonomies: true,
        normalizeTaxonomies: true,
      } as any);

      const techCosts = await getTechnologyCosts(technologyId, { normalize: true });

      tech = { ...tech, costs: techCosts.costs };

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
    throw new Error('useTechnology must be used within an TechnologyProvider');
  }

  return context;
};

export { TechnologyProvider, useTechnology };
