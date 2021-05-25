/* eslint-disable camelcase */
import React, {
  useState, createContext, useContext, useEffect, useCallback,
} from 'react';
import { getAttachments, getTechnology, getTechnologyCosts } from '@services/technology';

export interface Technology {
  id?: number;
  title: string;
  taxonomies: {
    category: string;
    classification: string;
    dimension: string;
    target_audience: string;
    biome: string;
    government_program: string;
  }
  knowledgeAreas: {
    greatArea: {name: string}
    area: {name: string}
    subArea: {name: string}
    speciality: {name: string}
  };
  public_domain: string;
  patent: string;
  currentLevel: number;
  primary_purpose: string;
  application_mode: string;
  application_examples: string;
  solves_problem: string;
  contribution: string;
  risks: string;
  requirements: string;
  installation_time: number;
  costs?: {
    implementation_costs: [];
    maintenance_costs: [];
  };
  terms?: [];
  videos?: [];
  attachments?: {
    images?: {
      id: number;
      url: string;
    }[],
    documents?: {
      id: number;
      url: string;
      filename: string;
    }[]
  }
}

interface TechnologyProps {
  children: JSX.Element
  technologyId: number
}

const TechnologyContext = createContext<Technology | {}>(null);

const TechnologyProvider = ({ children, technologyId }: TechnologyProps): JSX.Element => {
  const [technology, setTechnology] = useState<Technology | {} >({});

  const loadData = useCallback(
    async () => {
      let tech = await getTechnology(technologyId, {
        taxonomies: true,
        normalizeTaxonomies: true,
      } as any);

      const techCosts = await getTechnologyCosts(technologyId, { normalize: true });

      const techAttachments = await getAttachments(technologyId, {
        normalize: true,
      });

      tech = { ...tech, costs: techCosts.costs, attachments: techAttachments };

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

const useTechnology = (): Technology => {
  const context = useContext(TechnologyContext);

  if (!context) {
    throw new Error('useTechnology must be used within an TechnologyProvider');
  }

  return context;
};

export { TechnologyProvider, useTechnology };
