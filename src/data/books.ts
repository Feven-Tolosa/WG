export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  pdfUrl: string;
};

const BASE = 'https://gospeltruth.vercel.app/books/';

export const books: Book[] = [
  {
    id: 'hiyaw-qal',
    title: 'ሕያው ቃል',
    author: 'LIVING BIBLES INTERNATIONAL',
    description:
      'ቋንቋ በየዘመኑና በየትውልዱ እየተሻሻለ ስለሚሄድ፣ የቅዱሳት መጻሕፍት መልእክት በዘመኑ ቋንቋ በግልጽ ተተርጉሞ እንዲቀርብ ያለመ ትርጉም።',
    pdfUrl: BASE + 'HiyawQal.pdf',
  },
  {
    id: 'yeamnet-aqom',
    title: 'የእምነት አቋም',
    author: 'Church Elders',
    description:
      'በመላው ኢትዮጵያ የሚገኙ የወንጌል እውነት ቤተክርስቲያን አባላት የሚያምኑበት፣ የሚጠብቁትና የሚያስጠብቁት ዘላለማዊ የክርስትና እውነት።',
    pdfUrl: BASE + encodeURIComponent('የእምነትአቋም.pdf'),
  },
  {
    id: 'church-order',
    title: 'ትምህርተ ቤተክርስቲያንና ስርዓተ ቤተክርስቲያን',
    author: 'Church Elders',
    description:
      'የቤተክርስቲያኒቱ አባላት በአጥቢያ ቤተ ክርስቲያን ውስጥ ሊያውቋቸውና ሊጠብቋቸው የሚገቡ የጌታችን የኢየሱስ ክርስቶስ እና የቅዱሳን ሐዋርያት አስተምህሮዎች።',
    pdfUrl: BASE + encodeURIComponent('ትምህርተ_ቤተክርስቲያንና_ስርዓተ_ቤተክርስቲያን.pdf'),
  },
  {
    id: 'holy-scripture',
    title: 'Holy Scripture',
    author: 'Dawit Fassil',
    description:
      'ቅዱስ የሚለው ቃል ከግዕዙ "ቀደሰ" የሚል ግስ የወጣ ሲሆን ትርጉሙም "መረጠ፤ ለየ" እንደማለት ነው — መጽሐፍ ቅዱስ ለምን ቅዱስ እንደተባለ የሚያብራራ ጥናት።',
    pdfUrl: BASE + 'Holy-scripture.pdf',
  },
  {
    id: 'trinity',
    title: 'Trinity',
    author: 'Dawit Fassil',
    description:
      '"ሥላሴ" የሚለው የግዕዝ ቃል በአማርኛ "ሦስትነት" የሚል ፍቺ ይሰጣል — Three-Unity ስለሚለው መለኮታዊ እውነት የሚያስተምር ጥናት።',
    pdfUrl: BASE + 'Trinity.pdf',
  },
  {
    id: 'holy-spirit',
    title: 'Holy Spirit',
    author: 'Dawit Fassil',
    description:
      'መንፈስ ቅዱስ አምላክ ስለመሆኑና ስላለው መለኮታዊ ባህርያት — ሁሉን አዋቂ፣ ሁሉን ቻይ፣ በሁሉ ቦታ የሚገኝ ስለመሆኑ የሚያስተምር ጥናት።',
    pdfUrl: BASE + 'Holy-Spirit.pdf',
  },
  {
    id: 'christology',
    title: 'Cristology',
    author: 'Dawit Fassil',
    description:
      'ስለ ኢየሱስ ክርስቶስ ስም፣ ማዕረግና ስልጣን — “ኢየሱስ” እና “ክርስቶስ” የሚሉት ስሞች ምን ትርጉም እንዳላቸው የሚያብራራ ጥናት።',
    pdfUrl: BASE + 'Cristology.pdf',
  },
  {
    id: 'grace-and-law',
    title: 'Grace and Law',
    author: 'Dawit Fassil',
    description:
      'ሮሜ 6:14ን መሠረት አድርጎ ጸጋና ሕግ ስላላቸው ልዩነት፣ ጸጋ በሥራ ሳይሆን በእምነት ብቻ ስለሚገኝ ደህንነት የሚያስተምር ጥናት።',
    pdfUrl: BASE + 'Grace-and-Law.pdf',
  },
  {
    id: 'salvation',
    title: 'Salvation',
    author: 'Dawit Fassil',
    description:
      'ደህንነት ከሚመጣው ፍርድ መዳን ብቻ ሳይሆን በሕይወት ሳሉ ከኃጢአት ኃይል መዳንንም እንደሚያካትት የሚያስረዳ ጥናት።',
    pdfUrl: BASE + 'Salvation.pdf',
  },
  {
    id: 'amagn-yetedereglet-neger',
    title: 'አማኝ የተደረገለት ነገር',
    author: 'Dawit Fassil',
    description:
      'ለአማኙ የተሰጠው የዘላለም ሕይወት ዋስትና እና የተትረፈረፈ የእግዚአብሔር ጸጋና በረከት ስለሚገልጹ ነገሮች የሚያስተምር ጥናት።',
    pdfUrl: BASE + encodeURIComponent('አማኝ-የተደረገለት-ነገር.pdf'),
  },
  {
    id: 'kristian-mindenew',
    title: 'ክርስቲያን ምንድነው',
    author: 'Dawit Fassil',
    description:
      '"ክርስቲያን ምንድነው?" ለሚለው ጥያቄ መጽሐፍ ቅዱስ ብቻውን የሚሰጠውን ትክክለኛ መልስ የሚያብራራ ጥናት።',
    pdfUrl: BASE + encodeURIComponent('ክርስቲያን-ምንድነው.pdf'),
  },
  {
    id: 'dispensationalism',
    title: 'Dispensationalism',
    author: 'Dawit Fassil',
    description:
      'መጽሐፍ ቅዱስ ከአዳም መፈጠር እስከ አዲሱ ሰማይና ምድር ያለውን ጊዜ በሰባት ክፍለ ዘመናት (Dispensations) የሚከፍልበትን አገባብ የሚያስረዳ ጥናት።',
    pdfUrl: BASE + 'dispensation.pdf',
  },
  {
    id: 'dispensationalism-oromo',
    title: 'Dispensationalism (Afaan Oromoo)',
    author: 'Dawit Fassil',
    description:
      'Macaafni Qulqulluun bara Addaam irraa hamma samii fi lafa haaraatti jiru kutaalee baraa torbatti akkamitti akka qoodu ibsu qorannoo.',
    pdfUrl: BASE + 'Doctrine-of-Discipleshipin-Afan-Oromo_GTC.pdf',
  },
  {
    id: 'prophecy',
    title: 'Prophecy',
    author: 'Dawit Fassil',
    description:
      'በአዲስ ኪዳን ያለው የትንቢት አገልግሎት ከብሉይ ኪዳኑ የተለየ፣ መንፈስ ቅዱስ ለወቅቱ የሚያስፈልግ ምክርና መጽናናት እንደሚያመጣ የሚያስተምር ጥናት።',
    pdfUrl: BASE + 'Tenbit.pdf',
  },
  {
    id: 'mestet',
    title: 'መስጠት',
    author: 'Dawit Fassil',
    description:
      'መስጠት ለእግዚአብሔር ለዓላዊነትና ገዢነት እውቅና የመስጠት ልምምድ እንደሆነ፣ እግዚአብሔር ከስጦታ ይልቅ ትሕትናችንን እንደሚፈልግ የሚያስተምር ጥናት።',
    pdfUrl: BASE + encodeURIComponent('መስጠት.pdf'),
  },
];
