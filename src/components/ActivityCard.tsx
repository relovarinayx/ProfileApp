import { StyleSheet, Text, View } from "react-native";

import type { Activity } from "./profileData";
import { colors, shadow } from "./profileTheme";
export default function ActivityCard({
  title,
  subtitle,
  time,
}: Activity) {
  return (
    <View style={styles.activityCard}>

      <View style={styles.activityText}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activitySubtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 15,
    borderRadius: 15,
    ...shadow(1, 3, 0.06),

  },
  activityText: { flex: 1, marginLeft: 12 },
  activityTitle: { fontSize: 14, fontWeight: "600", color: colors.text },
  activitySubtitle: { fontSize: 12, color: colors.muted, marginTop: 3 },
  time: { fontSize: 10, color: colors.faint, marginLeft: 5 },
});