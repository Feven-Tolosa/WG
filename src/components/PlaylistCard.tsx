import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadow, spacing } from '../theme';
import type { Playlist } from '../data/sermons';

export default function PlaylistCard({ playlist }: { playlist: Playlist }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => Linking.openURL(playlist.youtubeUrl)}
      accessibilityRole="button"
      accessibilityLabel={`Open ${playlist.title} playlist on YouTube`}
    >
      <View style={styles.iconWrap}>
        <Ionicons name="play" size={16} color={colors.parchment} />
      </View>
      <View style={styles.textCol}>
        <Text style={styles.title} numberOfLines={2}>
          {playlist.title}
        </Text>
        <Text style={styles.count}>
          {playlist.videoCount} {playlist.videoCount === 1 ? 'teaching' : 'teachings'}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadow.card,
  },
  pressed: { opacity: 0.7 },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  textCol: { flex: 1 },
  title: { fontFamily: fonts.bodySemiBold, fontSize: 15, color: colors.textPrimary },
  count: { fontFamily: fonts.body, fontSize: 12, color: colors.clay, marginTop: 2 },
});
