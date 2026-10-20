import { PortfolioProject } from '../types';
import { initialProjects } from '../data/mockPortfolio';

const STORAGE_KEY_PROJECTS = 'gadmicon_portfolio_projects_v1';

type StorageListener = () => void;
const listeners: Set<StorageListener> = new Set();

export function subscribeToDatabase(listener: StorageListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getPortfolioProjects(): PortfolioProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('LocalStorage error reading projects', err);
  }
  return initialProjects;
}
