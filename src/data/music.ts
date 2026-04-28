
export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string; // 本地路径，如 "/music/covers/cover1.jpg"
  audio: string; // 本地路径，如 "/music/audio/song1.mp3"
}

/**
 * 🎵 全本地音乐数据库配置说明 / Local Music Database Guide:
 * 
 * 1. 文件存放 (File Storage):
 *    - 请将音频文件放入: /public/music/audio/
 *    - 请将封面图片放入: /public/music/covers/
 * 
 * 2. 引用方式 (Referencing):
 *    - 必须使用以 "/" 开头的绝对路径（相对于 public 目录）
 */
export const MUSIC_PLAYLIST: Song[] = [
  {
    id: "local-01",
    title: "Ghiblian Magic",
    artist: "Studio Ghibli",
    cover: "/music/covers/ghibli.jpg",
    audio: "/music/audio/Ghiblian Magic-.flac"
  },
  {
    id: "local-02",
    title: "Sleepless nights - lofi hiphop mix pt.2",
    artist: "Mixed Artists",
    cover: "/music/covers/lofi-cat-night.jpg", 
    audio: "/music/audio/Sleepless nights - lofi hiphop mix pt.2.mp3"
  },
  {
    id: "local-03",
    title: "Island",
    artist: "Nujabes/Uyama Hiroto/Haruka Nakamura",
    cover: "/music/covers/spiritual state.jpg", // 确保文件名对应
    audio: "/music/audio/Nujabes,Uyama Hiroto,haruka nakamura - Island (feat. Uyama Hiroto & haruka nakamura).mp3"     // 确保文件名对应
  },
  {
    id: "local-04",
    title: "the updater",
    artist: "TSUTCHIE",
    cover: "/music/covers/Tsutchie-Samurai Champloo Music Recored.jpg", // 确保文件名对应
    audio: "/music/audio/TSUTCHIE - the updater.mp3"     // 确保文件名对应
  },
];
