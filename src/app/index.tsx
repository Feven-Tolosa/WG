import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import BookCard from '../components/BookCard'
import ScheduleRow from '../components/ScheduleRow'
import Screen from '../components/Screen'
import ScriptureQuote from '../components/ScriptureQuote'
import SectionHeader from '../components/SectionHeader'
import SermonCard from '../components/SermonCard'
import { church, schedule } from '../data/church'
import { featuredSermon, recentSermons } from '../data/sermons'
import { colors, fonts, radius, spacing } from '../theme'

const DOCTRINES = [
  { title: 'The Holy Trinity', amharic: 'ቅድስት ሥላሴ' },
  { title: 'The Divinity of Christ', amharic: 'የኢየሱስ ክርስቶስ አምላክነት' },
  { title: 'Authority of Scripture', amharic: 'የመጽሓፍ ቅዱስ ስልጣን' },
]

export default function Index() {
  const router = useRouter()

  return (
    <Screen>
      {/* Hero */}
      <LinearGradient colors={[colors.ink, colors.inkSoft]} style={styles.hero}>
        <View style={styles.locationPill}>
          <Ionicons name='location-outline' size={12} color={colors.goldSoft} />
          <Text style={styles.locationText}>{church.location}</Text>
        </View>
        <Text style={styles.heroAmharic}>{church.nameAmharic}</Text>
        <Text style={styles.heroEnglish}>{church.nameEnglish}</Text>
        <ScriptureQuote
          text={church.verse.text}
          reference={church.verse.reference}
          dark
        />
        <View style={styles.heroActions}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryBtn,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push('/sermons')}
          >
            <Text style={styles.primaryBtnLabel}>Watch Sermons</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.secondaryBtn,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push('/schedule')}
          >
            <Text style={styles.secondaryBtnLabel}>Service Times</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <SectionHeader
          eyebrow='Who We Are'
          title='A Church Built on the Word of God'
        />
        <Text style={styles.body}>{church.about}</Text>
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow='What We Believe'
          title='Our Doctrinal Foundation'
        />
        <View style={styles.doctrineRow}>
          {DOCTRINES.map((d) => (
            <View key={d.title} style={styles.doctrineCard}>
              <Text style={styles.doctrineTitle}>{d.title}</Text>
              <Text style={styles.doctrineAmharic}>{d.amharic}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow='A Word From Our Pastor'
          title='Welcome to Gospel Truth Church'
        />
        <Text style={styles.body}>{church.pastorWelcome}</Text>
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow='Latest Sermons'
          title='Hear the Word of God'
          subtitle='Faithful biblical preaching and teaching from Dawit Fassil Ministries.'
        />
        <SermonCard
          title={featuredSermon.title}
          date={featuredSermon.publishedLabel}
          url={featuredSermon.youtubeWatchUrl}
          videoId={featuredSermon.youtubeVideoId}
          featured
        />
        <View style={{ height: spacing.md }} />
        <ScrollableSermons />
        <Pressable
          style={styles.linkRow}
          onPress={() => router.push('/sermons')}
        >
          <Text style={styles.linkRowLabel}>Browse all sermon series</Text>
          <Ionicons name='arrow-forward' size={14} color={colors.gold} />
        </Pressable>
      </View>

      <View style={[styles.section, styles.scheduleSection]}>
        <SectionHeader
          eyebrow='Service Schedule'
          title='Join Us for Worship'
          subtitle="Sunday is our main gathering — worship, the Lord's Supper, and Bible teaching. We also meet every evening of the week."
        />
        <View style={styles.scheduleCard}>
          {schedule.map((item, i) => (
            <ScheduleRow
              key={`${item.day}-${item.title}`}
              item={item}
              last={i === schedule.length - 1}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader eyebrow='Resources' title='Featured Book' />
        <BookCard
          book={{
            id: 'featured',
            title: 'የእምነት አቋም',
            author: 'Church Elders',
            description:
              'በመላው ኢትዮጵያ የሚገኙ የወንጌል እውነት ቤተክርስቲያን አባላት የሚያምኑበት ዘላለማዊ የክርስትና እውነት።',
            pdfUrl:
              'https://gospeltruth.vercel.app/books/' +
              encodeURIComponent('የእምነትአቋም.pdf'),
          }}
        />
        <Pressable style={styles.linkRow} onPress={() => router.push('/books')}>
          <Text style={styles.linkRowLabel}>Explore all books & resources</Text>
          <Ionicons name='arrow-forward' size={14} color={colors.gold} />
        </Pressable>
      </View>

      <View style={[styles.section, styles.contactSection]}>
        <SectionHeader
          eyebrow='Come & See'
          title='You Are Welcome Here'
          dark
          subtitle='Whether you are exploring Christianity, seeking a church home, or desiring deeper fellowship in Christ, we invite you to worship with us.'
        />
        {church.phones.map((phone) => (
          <Pressable
            key={phone}
            style={styles.contactRow}
            onPress={() => Linking.openURL(`tel:${phone}`)}
          >
            <Ionicons name='call-outline' size={16} color={colors.goldSoft} />
            <Text style={styles.contactText}>{phone}</Text>
          </Pressable>
        ))}
        <Pressable
          style={styles.contactRow}
          onPress={() => Linking.openURL(church.mapsUrl)}
        >
          <Ionicons name='location-outline' size={16} color={colors.goldSoft} />
          <Text style={styles.contactText}>{church.location}</Text>
        </Pressable>
        <View style={styles.socialRow}>
          <Pressable
            style={styles.socialBtn}
            onPress={() => Linking.openURL(church.telegram)}
          >
            <Ionicons name='paper-plane-outline' size={16} color={colors.ink} />
            <Text style={styles.socialLabel}>Telegram</Text>
          </Pressable>
          <Pressable
            style={styles.socialBtn}
            onPress={() => Linking.openURL(church.facebook)}
          >
            <Ionicons name='logo-facebook' size={16} color={colors.ink} />
            <Text style={styles.socialLabel}>Facebook</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  )
}

function ScrollableSermons() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {recentSermons.map((s) => (
        <SermonCard key={s.url} title={s.title} date={s.date} url={s.url} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  hero: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: radius.pill,
    paddingVertical: 4,
    paddingHorizontal: spacing.sm,
    gap: 4,
    marginBottom: spacing.md,
  },
  locationText: {
    fontFamily: fonts.bodyMedium,
    fontSize: 11,
    color: colors.goldSoft,
  },
  heroAmharic: {
    fontFamily: fonts.display,
    fontSize: 30,
    color: colors.textOnDark,
    lineHeight: 38,
  },
  heroEnglish: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.textOnDarkSecondary,
    marginTop: 4,
    marginBottom: spacing.lg,
  },
  heroActions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg },
  primaryBtn: {
    backgroundColor: colors.gold,
    borderRadius: radius.pill,
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
  },
  primaryBtnLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    color: colors.ink,
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: colors.lineDark,
    borderRadius: radius.pill,
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
  },
  secondaryBtnLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    color: colors.textOnDark,
  },
  pressed: { opacity: 0.75 },
  section: { paddingHorizontal: spacing.lg, marginTop: spacing.xxxl },
  body: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  doctrineRow: { gap: spacing.sm },
  doctrineCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.gold,
  },
  doctrineTitle: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 14,
    color: colors.textPrimary,
  },
  doctrineAmharic: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.md,
  },
  linkRowLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    color: colors.gold,
  },
  scheduleSection: {},
  scheduleCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    ...({} as object),
  },
  contactSection: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    marginHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  contactText: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.textOnDark,
  },
  socialRow: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.goldSoft,
    borderRadius: radius.pill,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
  },
  socialLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    color: colors.ink,
  },
})
