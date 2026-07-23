export const church = {
  nameAmharic: 'የወንጌል እውነት ቤተ ክርስቲያን',
  nameEnglish: 'Gospel Truth Church — Ethiopia',
  location: 'Jimma, Ethiopia',
  verse: {
    text: '“ ክርስቶስ ኢየሱስን ጌታ እንደ ሆነ እንጂ ራሳችንን አንሰብክምና፥ ስለ ኢየሱስም ራሳችንን ለእናንተ ባሪያዎች እናደርጋለን።”',
    reference: '2 ቆሮንቶስ 4፡5',
  },
  about:
    'The Gospel Truth Church is an evangelical church that believes in the main pillars of faith: the Holy Trinity, the deity and person of Jesus Christ, the authority of the Bible, the gospel of grace, the forgiveness of sins, the second coming, and the coming judgment. It has local congregations in the South, Southwest, and West Ethiopia.',
  pastorWelcome:
    'Grace and peace to you in the name of our Lord Jesus Christ. Whether you are visiting for the first time, seeking answers, or looking for a church family, our prayer is that you would encounter the truth of God\u2019s Word and experience the transforming power of the Gospel.',
  phones: ['+251917804407', '+251906202626'],
  website: 'https://gospeltruthethiopia.com',
  telegram: 'https://t.me/DawitFassilMinistry',
  facebook: 'https://www.facebook.com/Dawit-Fassil-Ministry-1873139229468315/',
  mapsUrl: 'https://maps.app.goo.gl/AXft8Dqg5noqpCFZ6',
}

export type ScheduleItem = {
  day: string
  dayAmharic: string
  title: string
  titleAmharic: string
  time: string
  note?: string
}

export const schedule: ScheduleItem[] = [
  {
    day: 'Sunday',
    dayAmharic: 'እሑድ',
    title: 'Worship & Lord\u2019s Supper',
    titleAmharic: 'አምልኮና ጌታ እራት',
    time: '9:30 AM – 12:00 PM',
  },
  {
    day: 'Sunday',
    dayAmharic: 'እሑድ',
    title: 'Bible Teaching',
    titleAmharic: 'የቃሉ ትምህርት',
    time: '6:00 PM – 2:00 AM',
    note: 'Preceded by choir worship beginning at 5:00 PM',
  },
  {
    day: 'Monday',
    dayAmharic: 'ሰኞ',
    title: 'Bible Teaching',
    titleAmharic: 'የቃሉ ትምህርት',
    time: '6:00 PM – 2:00 AM',
  },
  {
    day: 'Tuesday',
    dayAmharic: 'ማክሰኞ',
    title: 'Prayer',
    titleAmharic: 'ጸሎት',
    time: '6:00 PM – 2:00 AM',
  },
  {
    day: 'Wednesday',
    dayAmharic: 'ረቡዕ',
    title: 'Bible Study',
    titleAmharic: 'የመጽሐፍ ቅዱስ ጥናት',
    time: '6:00 PM – 2:00 AM',
  },
  {
    day: 'Thursday',
    dayAmharic: 'ሐሙስ',
    title: 'Choir Practice',
    titleAmharic: 'የዘማሪዎች ልምምድ',
    time: '6:00 PM – 2:00 AM',
  },
  {
    day: 'Friday',
    dayAmharic: 'አርብ',
    title: 'Worship & Praise',
    titleAmharic: 'አምልኮና ምስጋና',
    time: '6:00 PM – 2:00 AM',
  },
  {
    day: 'Saturday',
    dayAmharic: 'ቅዳሜ',
    title: 'Youth Fellowship',
    titleAmharic: 'የወጣቶች ኅብረት',
    time: '4:00 PM – 6:00 PM',
    note: 'Worship, preaching, and a solo song',
  },
  {
    day: 'Saturday',
    dayAmharic: 'ቅዳሜ',
    title: 'Bible Study',
    titleAmharic: 'የመጽሐፍ ቅዱስ ጥናት',
    time: '6:00 PM – 2:00 AM',
  },
]
