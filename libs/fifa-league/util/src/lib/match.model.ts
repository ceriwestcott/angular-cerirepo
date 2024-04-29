export interface Player {
  name: string;
  team?: string;
}

export interface Match {
  home: Player;
  away: Player;
  winner?: Player;
  score?: {
    home: number;
    away: number;
  };
  inPlay: boolean;
}
