import { Ionicons } from '@expo/vector-icons'
import React, { useMemo } from 'react'
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import ScheduleDayCard from '../components/ScheduleDayCard'
import ScriptureQuote from '../components/ScriptureQuote'
import SectionHeader from '../components/SectionHeader'
import { church, schedule } from '../data/church'
import { colors, fonts, radius, spacing } from '../theme'

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default function Schedule() {
  const groups = useMemo(() => {
    return WEEKDAYS.map((day) => ({
      day,
      dayAmharic: schedule.find((s) => s.day === day)?.dayAmharic ?? '',
      entries: schedule.filter((s) => s.day === day),
    })).filter((group) => group.entries.length > 0)
  }, [])

  const todayName = WEEKDAYS[new Date().getDay()]

  return (
    <Screen>
      <View style={styles.header}>
        <SectionHeader
          eyebrow='Service Schedule'
          title='Join Us Throughout the Week'
          subtitle="Worship, prayer, and Bible study meet every day — come as often as you're able."
        />
        <ScriptureQuote
          text='“በአንዳንዶችም ዘንድ ልማድ እንደ ሆነው፥ መሰብሰባችንን አንተው እርስ በርሳችን እንመካከር እንጂ፤ ይልቁንም ቀኑ ሲቀርብ እያያችሁ አብልጣችሁ ይህን አድርጉ።”'
          reference='ዕብራውያን 10፥25'
        />
      </View>

      <View style={styles.section}>
        {groups.map((group) => (
          <ScheduleDayCard
            key={group.day}
            day={group.day}
            dayAmharic={group.dayAmharic}
            entries={group.entries}
            isToday={group.day === todayName}
          />
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.noteCard}>
          <Ionicons
            name='information-circle-outline'
            size={16}
            color={colors.clay}
          />
          <Text style={styles.noteText}>
            Sunday evening Bible teaching is preceded by choir worship beginning
            at 5:00 PM.
          </Text>
        </View>
      </View>

      <View style={[styles.section, styles.visitCard]}>
        <SectionHeader eyebrow='Come & See' title='Plan Your Visit' dark />
        <Pressable
          style={styles.contactRow}
          onPress={() => Linking.openURL(church.mapsUrl)}
        >
          <Ionicons name='location-outline' size={16} color={colors.goldSoft} />
          <Text style={styles.contactText}>{church.location}</Text>
        </Pressable>
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
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.md,
  },
  section: { paddingHorizontal: spacing.lg, marginTop: spacing.lg },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: colors.parchmentDim,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  noteText: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  visitCard: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
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
})
