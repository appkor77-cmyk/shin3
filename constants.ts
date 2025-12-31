import { NewsItem, VideoItem, QuickLink, GameScore } from './types';

export const GAME_STATS: GameScore = {
  homeTeam: 'Heroes',
  awayTeam: 'Landers',
  homeScore: 3,
  awayScore: 4,
  status: '경기 종료',
  date: '09/30 (화) 고척',
  pitcherHome: '선발 알칸타라',
  pitcherAway: '선발 김건우',
};

export const QUICK_LINKS: QuickLink[] = [
  {
    id: 'ticket',
    title: '티켓 예매',
    subtitle: '바로가기',
    iconType: 'ticket',
    gradient: 'bg-gradient-to-br from-gray-800 to-black',
  },
  {
    id: 'instagram',
    title: '인스타그램',
    subtitle: '바로가기',
    iconType: 'instagram',
    gradient: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 'location',
    title: '구장 찾아오시는길',
    subtitle: '바로가기',
    iconType: 'map',
    gradient: 'bg-gradient-to-br from-green-600 to-emerald-800',
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: '키움히어로즈 출신 변상권 결혼',
    date: '2025-12-19',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: '2026시즌 외국인 선수 구성 완료',
    date: '2025-12-16',
    imageUrl: 'https://images.unsplash.com/photo-1516731237713-fc8888eb0258?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'NEW'
  },
  {
    id: 3,
    title: '송성문 키움증권 발행어음 기간형 1호 가입',
    date: '2025-12-16',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: '투수 양지율 결혼',
    date: '2025-12-11',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export const VIDEO_DATA: VideoItem[] = [
  {
    id: 1,
    title: '미션 : 힘을 모아 크리스마스 콘텐츠 만들기 🎅',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'AI로 시작했다가 억지로 끝나는 밸런스 게임 VS',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: '[오석주의 책책책 📚] 책 안 읽고 쓴 독후감 "나 널 좋아했어...💗"',
    thumbnailUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];