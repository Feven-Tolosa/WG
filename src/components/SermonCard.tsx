import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadow, spacing } from '../theme';

type Props = {
  title: string;
  date: string;
  url: string;
  videoId?: string;
  featured?: boolean;
};

function videoIdFromUrl(url: string): string | undefined {
  const match = url.match(/[?&]v=([^&]+)/);
  return match?.[1];
}

export default function SermonCard({ title, date, url, videoId, featured = false }: Props) {
  const id = videoId ?? videoIdFromUrl(url);
  const thumbnail = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        featured && styles.cardFeatured,
        pressed && styles.pressed,
      ]}
      onPress={() => Linking.openURL(url)}
      accessibilityRole="button"
      accessibilityLabel={`Watch ${title} on YouTube`}
    >
      <View style={[styles.thumbWrap, featured && styles.thumbWrapFeatured]}>
        {thumbnail ? (
          <Image source={{ uri: thumbnail }} style={styles.thumb} resizeMode="cover" />
        ) : (
          <View style={[styles.thumb, styles.thumbFallback]} />
        )}
        <View style={styles.playBadge}>
          <Ionicons name="play" size={featured ? 20 : 14} color={colors.ink} />
        </View>
      </View>
      <View style={styles.textCol}>
        <Text style={[styles.title, featured && styles.titleFeatured]} numberOfLines={featured ? 3 : 2}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: 220, marginRight: spacing.md },
  cardFeatured: { width: '100%', marginRight: 0 },
  pressed: { opacity: 0.75 },
  thumbWrap: {
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.inkSoft,
    aspectRatio: 16 / 9,
    ...shadow.card,
  },
  thumbWrapFeatured: {},
  thumb: { width: '100%', height: '100%' },
  thumbFallback: { backgroundColor: colors.inkSoft },
  playBadge: {
    position: 'absolute',
    bottom: spacing.sm,
    right: spacing.sm,
    width: 30,
    height: 30,
    borderRadius: radius.pill,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: { marginTop: spacing.sm },
  title: { fontFamily: fonts.bodySemiBold, fontSize: 13, color: colors.textPrimary, lineHeight: 18 },
  titleFeatured: { fontFamily: fonts.display, fontSize: 19, lineHeight: 25 },
  date: { fontFamily: fonts.body, fontSize: 12, color: colors.textSecondary, marginTop: 4 },
});
