export interface NewsItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  tag?: string;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration?: string;
}

export interface QuickLink {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'ticket' | 'instagram' | 'map';
  gradient: string;
}

export interface GameScore {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string;
  date: string;
  pitcherHome: string;
  pitcherAway: string;
}