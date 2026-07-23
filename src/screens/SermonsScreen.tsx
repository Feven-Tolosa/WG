import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PlaylistCard from '../components/PlaylistCard';
import Screen from '../components/Screen';
import SectionHeader from '../components/SectionHeader';
import SermonCard from '../components/SermonCard';
import { playlists, recentSermons } from '../data/sermons';
import { spacing } from '../theme';

export default function SermonsScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <SectionHeader
          eyebrow="Sermon Library"
          title="Sermon Series & Collections"
          subtitle="Browse teaching series and curated sermon collections from Dawit Fassil Ministries."
        />
      </View>

      <View style={styles.section}>
        <SectionHeader eyebrow="Recently Added" title="Latest Teachings" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentSermons.map((s) => (
            <SermonCard key={s.url} title={s.title} date={s.date} url={s.url} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionHeader eyebrow={`${playlists.length} Series`} title="All Playlists" />
        {playlists.map((p) => (
          <PlaylistCard key={p.id} playlist={p} />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  section: { paddingHorizontal: spacing.lg, marginTop: spacing.xl },
});
