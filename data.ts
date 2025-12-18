import { FaDungeon, FaProjectDiagram, FaGhost, FaFileExport } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type Language = 'pt' | 'en' | 'es';

export interface AppData {
  id: number;
  link: string;
  icon: IconType;
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
}

export interface UIContent {
  title: string;
  subtitle: string;
  visit: string;
}

export const uiContent: Record<Language, UIContent> = {
  pt: {
    title: "RPG Hub do Urso",
    subtitle: "Ferramentas essenciais para Mestres e Jogadores.",
    visit: "Acessar Ferramenta"
  },
  en: {
    title: "Bear's RPG Hub",
    subtitle: "Essential tools for Game Masters and Players.",
    visit: "Visit Tool"
  },
  es: {
    title: "RPG Hub del Oso",
    subtitle: "Herramientas esenciales para Game Masters y Jugadores.",
    visit: "Visitar Herramienta"
  }
};

export const apps: AppData[] = [
  {
    id: 1,
    link: "https://dungeon.rpgdourso.com",
    icon: FaDungeon,
    title: {
      pt: "Arquiteto de Masmorras",
      en: "Dungeon Architect",
      es: "Arquitecto de Mazmorras"
    },
    description: {
      pt: "Gerador de eventos aleatórios para RPG.",
      en: "Random event generator for RPGs.",
      es: "Generador de eventos aleatorios para RPG."
    }
  },
  {
    id: 2,
    link: "https://roguemap.rpgdourso.com",
    icon: FaProjectDiagram,
    title: {
      pt: "RogueMap do Urso",
      en: "Bear's RogueMap",
      es: "RogueMap del Oso"
    },
    description: {
      pt: "Criador de mapas de nós interativos estilo roguelike.",
      en: "Roguelike style interactive node map creator.",
      es: "Creador de mapas de nodos interactivos estilo roguelike."
    }
  },
  {
    id: 3,
    link: "https://void.rpgdourso.com",
    icon: FaGhost,
    title: {
      pt: "Void do Urso",
      en: "Bear's Void",
      es: "Vacío del Oso"
    },
    description: {
      pt: "Ferramentas de geração de monstros de Daggerheart e tradução de fichas.",
      en: "Daggerheart monster generation tools and sheet translation.",
      es: "Herramientas de generación de monstruos Daggerheart y traducción de fichas."
    }
  },
  {
    id: 4,
    link: "https://forbidden-converter.rpgdourso.com",
    icon: FaFileExport,
    title: {
      pt: "Forbidden Lands Converter",
      en: "Forbidden Lands Converter",
      es: "Conversor Forbidden Lands"
    },
    description: {
      pt: "Converte texto PDF de Forbidden Lands para o Foundry VTT.",
      en: "Converts Forbidden Lands PDF text to Foundry VTT.",
      es: "Convierte texto PDF de Forbidden Lands para Foundry VTT."
    }
  }
];