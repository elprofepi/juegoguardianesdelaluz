export interface LevelData {
  id: number;
  title: string;
  icon: string;
  story: string;
  question: string;
  answer: string; // The numeric or text answer to the puzzle
  secretWord: string; // The word revealed upon solving
}

export enum GameState {
  INTRO,
  PLAYING,
  FINAL_CHALLENGE,
  CERTIFICATE
}

export interface PlayerProgress {
  currentLevelIndex: number;
  collectedWords: string[];
  isLevelComplete: boolean;
}