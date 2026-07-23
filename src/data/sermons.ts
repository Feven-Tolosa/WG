export type Playlist = {
  id: string;
  title: string;
  videoCount: number;
  youtubeUrl: string;
};

export type FeaturedSermon = {
  title: string;
  publishedLabel: string;
  youtubeWatchUrl: string;
  youtubeVideoId: string;
};

export const featuredSermon: FeaturedSermon = {
  title: 'ትንቢት 1 መግቢያ',
  publishedLabel: 'Published 9/26/2025',
  youtubeWatchUrl: 'https://www.youtube.com/watch?v=CFKr7drtobc',
  youtubeVideoId: 'CFKr7drtobc',
};

export const recentSermons: { title: string; date: string; url: string }[] = [
  { title: 'ትንቢት 13 የብሉይ ነቢያት አይነቶች', date: '12/9/2025', url: 'https://www.youtube.com/watch?v=iQKnc9zAoUg' },
  { title: 'ትንቢት 21 በአዲስ ኪዳን', date: '1/30/2026', url: 'https://www.youtube.com/watch?v=-blgJSZKVAI' },
  { title: 'ትንቢት 15 የብሉይ ነቢያት የትንቢት ጠባዮች', date: '12/17/2025', url: 'https://www.youtube.com/watch?v=NgXpAVGSqT8' },
  { title: 'ትንቢት 23 1ቆሮንቶስ ጥናት', date: '2/10/2026', url: 'https://www.youtube.com/watch?v=MAMlP9CcW7Y' },
  { title: '94 ንቅሳት ? የሰውነት ባለአደራነት?', date: '9/12/2025', url: 'https://www.youtube.com/watch?v=pOvtE5jGkDo' },
  { title: 'ትንቢት 3 ኢየሱስ ታላቁ ነቢይ', date: '10/3/2025', url: 'https://www.youtube.com/watch?v=PJJGF-1TFU0' },
];

// Sermon series / playlists, as listed on gospeltruth.vercel.app/playlists
export const playlists: Playlist[] = [
  { id: 'PLHpOmIPfnNVNsA-nXGDtIgbPJmCZnFwtH', title: 'ትንቢት', videoCount: 39, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNsA-nXGDtIgbPJmCZnFwtH' },
  { id: 'PLHpOmIPfnNVOH20uTSyYhq2DVPzWP0Hd5', title: 'ቅድስና', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVOH20uTSyYhq2DVPzWP0Hd5' },
  { id: 'PLHpOmIPfnNVPTv1r2yaaJQmQlZk9h-D6_', title: 'ክርስቲያናዊ ምልልስ', videoCount: 15, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVPTv1r2yaaJQmQlZk9h-D6_' },
  { id: 'PLHpOmIPfnNVNIHEhFBYPphWZK17jAJpRq', title: 'አምልኮ', videoCount: 16, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNIHEhFBYPphWZK17jAJpRq' },
  { id: 'PLHpOmIPfnNVO5hTCRJlz47QjtWNpDHNsO', title: 'የጌታ እራት', videoCount: 20, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVO5hTCRJlz47QjtWNpDHNsO' },
  { id: 'PLHpOmIPfnNVPGBUEzViUFdoAeScAtBjCu', title: 'የእግዚአብሔር በግ', videoCount: 2, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVPGBUEzViUFdoAeScAtBjCu' },
  { id: 'PLHpOmIPfnNVN_OFsYqby-FiDEYpaZtYFj', title: 'የመገለጥ መንፈስ', videoCount: 2, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVN_OFsYqby-FiDEYpaZtYFj' },
  { id: 'PLHpOmIPfnNVM7EdEduVUxdOhItdAEFbYl', title: 'የዘላለም ሕይወት ዋስትና', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVM7EdEduVUxdOhItdAEFbYl' },
  { id: 'PLHpOmIPfnNVNuvr8Npa4MrAT-KyqGQ1n5', title: 'ሶስቱ መስቀሎች', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNuvr8Npa4MrAT-KyqGQ1n5' },
  { id: 'PLHpOmIPfnNVPdZwg0-NWtNOcMqfAN_EMs', title: 'ሶስቱ ወገኖች', videoCount: 5, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVPdZwg0-NWtNOcMqfAN_EMs' },
  { id: 'PLHpOmIPfnNVPjqotzvtaxmq-6QRuKsrnr', title: 'አምስቱ የፍርድ አይነቶች', videoCount: 15, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVPjqotzvtaxmq-6QRuKsrnr' },
  { id: 'PLHpOmIPfnNVPCiJHiLu0iuQRMfJNfOtCq', title: 'ሁለቱ ትንሣኤዎች', videoCount: 2, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVPCiJHiLu0iuQRMfJNfOtCq' },
  { id: 'PLHpOmIPfnNVNCS84TxI86wZMq3yqh3q8t', title: 'ደህንነትና አክሊል', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNCS84TxI86wZMq3yqh3q8t' },
  { id: 'PLHpOmIPfnNVMoo3WDdZhodpn3ZoDKMUrd', title: 'የሴቲቱ ዘር', videoCount: 29, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVMoo3WDdZhodpn3ZoDKMUrd' },
  { id: 'PLHpOmIPfnNVODY-TCNuxvMJvi-6zgIM7E', title: 'የእግዚአብሔር በዓላት', videoCount: 22, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVODY-TCNuxvMJvi-6zgIM7E' },
  { id: 'PLHpOmIPfnNVMWV2uzOBgtfkR1o2oOnYtI', title: 'የገና በአል', videoCount: 3, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVMWV2uzOBgtfkR1o2oOnYtI' },
  { id: 'PLHpOmIPfnNVOu_i9S0Q2MDWmcA77tNVsD', title: 'የአማኞች ክህነት', videoCount: 12, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVOu_i9S0Q2MDWmcA77tNVsD' },
  { id: 'PLHpOmIPfnNVM3S-nji98ETa02AsVYPYTY', title: 'ተቃራኒ እውነታዎች', videoCount: 5, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVM3S-nji98ETa02AsVYPYTY' },
  { id: 'PLHpOmIPfnNVNtPtCc4u6ju-l7RmdjWrhU', title: 'የትንሣኤው ኃይል', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNtPtCc4u6ju-l7RmdjWrhU' },
  { id: 'PLHpOmIPfnNVNJkXuRZRp5TCfmrRpQ-sE1', title: 'በአዲስ ኪዳን የተገለጡ የሚሻሉ ነገሮች', videoCount: 18, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNJkXuRZRp5TCfmrRpQ-sE1' },
  { id: 'PLHpOmIPfnNVO-Ftlw8KzY74j2cGiG1u5n', title: 'የጋርዮሽ ጸጋ', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVO-Ftlw8KzY74j2cGiG1u5n' },
  { id: 'PLHpOmIPfnNVOhgVOQ7KD2ORRtdxtd5FWo', title: 'ደህንነት እና አክሊል — በወንድም ዳዊት ፋሲል 2022 GC', videoCount: 6, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVOhgVOQ7KD2ORRtdxtd5FWo' },
  { id: 'PLHpOmIPfnNVMFAqvqQIUJZN497pI2VprQ', title: 'ትንቢት — በወንድም ዳዊት ፋሲል', videoCount: 8, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVMFAqvqQIUJZN497pI2VprQ' },
  { id: 'PLHpOmIPfnNVNNI5CXekrz2g8HoOJuaB3Z', title: 'ሊቀ-ካህናት — በወንድም ዳዊት ፋሲል', videoCount: 18, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNNI5CXekrz2g8HoOJuaB3Z' },
  { id: 'PLHpOmIPfnNVPEAjqcWqJ2kkTEmMYtbjIV', title: 'መስጠት — በወንድም ዳዊት ፋሲል', videoCount: 9, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVPEAjqcWqJ2kkTEmMYtbjIV' },
  { id: 'PLHpOmIPfnNVMYgG3Ctc9ObW0e1iwNGdx0', title: 'ደም — በወንድም ዳዊት ፋሲል', videoCount: 9, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVMYgG3Ctc9ObW0e1iwNGdx0' },
  { id: 'PLHpOmIPfnNVNHZn3A5MOfhYROvpdRgJ0N', title: 'ሞት — በወንድም ዳዊት ፋሲል', videoCount: 9, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNHZn3A5MOfhYROvpdRgJ0N' },
  { id: 'PLHpOmIPfnNVNv4fQ14N312DevsxJPdkY8', title: 'ሕግ እና ፀጋ — በወንድም ዳዊት ፋሲል', videoCount: 11, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVNv4fQ14N312DevsxJPdkY8' },
  { id: 'PLHpOmIPfnNVOpwIpbmYS0HMzBuVWvf3HI', title: 'መገናኛው ድንኳን', videoCount: 13, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVOpwIpbmYS0HMzBuVWvf3HI' },
  { id: 'PLHpOmIPfnNVOlZHejqAgQ--f4gjKDXsBY', title: 'መሠረታዊ የ ክርስቲያን ጥያቄ አና መልስ', videoCount: 1, youtubeUrl: 'https://www.youtube.com/playlist?list=PLHpOmIPfnNVOlZHejqAgQ--f4gjKDXsBY' },
];
