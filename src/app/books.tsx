import React from 'react';
import { StyleSheet, View } from 'react-native';
import BookCard from '../components/BookCard';
import Screen from '../components/Screen';
import ScriptureQuote from '../components/ScriptureQuote';
import SectionHeader from '../components/SectionHeader';
import { books } from '../data/books';
import { spacing } from '../theme';

export default function Books() {
  return (
    <Screen>
      <View style={styles.header}>
        <SectionHeader
          eyebrow="Books & Resources"
          title="Biblical Resources"
          subtitle="Christ-centered books, study guides, and resources to strengthen your faith and deepen your understanding of God's Word."
        />
        <ScriptureQuote
          text="ኃጢአት አይገዛችሁምና፤ ከጸጋ በታች ሆናችኋል እንጂ ከሕግ በታች አይደላችሁምና።"
          reference="ሮሜ 6:14"
        />
      </View>

      <View style={styles.section}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg, gap: spacing.md },
  section: { paddingHorizontal: spacing.lg, marginTop: spacing.lg },
});
