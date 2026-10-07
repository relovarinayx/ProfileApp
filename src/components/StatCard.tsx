import { StyleSheet, Text, View } from "react-native";

import type { Stat } from "./profileData";
import { colors, shadow } from "./profileTheme";

export default function StatCard({ icon, number, label }: Stat) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    width: "31%",
    backgroundColor: colors.card,
    paddingVertical: 18,
    alignItems: "center",
    borderRadius: 16,
    ...shadow(2, 4),
  },
  statIcon: { fontSize: 22 },
  statNumber: {
    fontSize: 21,
    fontWeight: "700",
    color: colors.text,
    marginTop: 6,
  },
  statLabel: { fontSize: 12, color: colors.muted, marginTop: 3 },
});