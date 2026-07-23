import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadow, spacing } from '../theme';
import type { Book } from '../data/books';

export default function BookCard({ book }: { book: Book }) {
  return (
    <View style={styles.card}>
      <View style={styles.coverWrap}>
        <Ionicons name="book" size={22} color={colors.goldSoft} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {book.title}
        </Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {book.description}
        </Text>
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.actionBtn, styles.readBtn, pressed && styles.pressed]}
            onPress={() => Linking.openURL(book.pdfUrl)}
            accessibilityRole="button"
            accessibilityLabel={`Read ${book.title}`}
          >
            <Ionicons name="reader-outline" size={14} color={colors.parchment} />
            <Text style={styles.readLabel}>Read</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.actionBtn, styles.downloadBtn, pressed && styles.pressed]}
            onPress={() => Linking.openURL(book.pdfUrl)}
            accessibilityRole="button"
            accessibilityLabel={`Download ${book.title}`}
          >
            <Ionicons name="download-outline" size={14} color={colors.clay} />
            <Text style={styles.downloadLabel}>Download</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadow.card,
  },
  coverWrap: {
    width: 48,
    height: 48,
    borderRadius: radius.sm,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  body: { flex: 1 },
  title: { fontFamily: fonts.display, fontSize: 17, color: colors.textPrimary, lineHeight: 22 },
  author: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 11,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: colors.clay,
    marginTop: 2,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    marginTop: spacing.xs,
  },
  actions: { flexDirection: 'row', marginTop: spacing.sm, gap: spacing.sm },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.pill,
    gap: 5,
  },
  pressed: { opacity: 0.7 },
  readBtn: { backgroundColor: colors.ink },
  readLabel: { fontFamily: fonts.bodySemiBold, fontSize: 12, color: colors.parchment },
  downloadBtn: { backgroundColor: colors.parchmentDim, borderWidth: 1, borderColor: colors.line },
  downloadLabel: { fontFamily: fonts.bodySemiBold, fontSize: 12, color: colors.clay },
});
