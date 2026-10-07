import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ================= PROFILE DATA =================

type Stat = {
  icon: string;
  number: string;
  label: string;
};

type Activity = {
  emoji: string;
  title: string;
  subtitle: string;
  time: string;
};

const PROFILE = {
  initial: "R",
  name: "Rina Relova",
  course: "BS Computer Science",
  school: "Northwest Samar State University",
};

const STATS: Stat[] = [
  { icon: "📚", number: "12", label: "Courses" },
  { icon: "📝", number: "24", label: "Projects" },
  { icon: "⭐", number: "92%", label: "Progress" },
];

const ACTIVITIES: Activity[] = [
  {
    emoji: "📖",
    title: "Data Structures and Algorithms",
    subtitle: "Completed today's lesson",
    time: "Today",
  },
  {
    emoji: "💻",
    title: "Mobile App Project",
    subtitle: "Profile page UI updated",
    time: "Yesterday",
  },
  {
    emoji: "🎓",
    title: "Academic Progress",
    subtitle: "Progress reached 92%",
    time: "2 days ago",
  },
];

// ================= THEME =================

const colors = {
  background: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1E293B",
  muted: "#7A7F87",
  faint: "#9AA0A6",
  green: "#4157e6",
  greenLight: "#E8F5E9",
};

const shadow = (elevation: number, radius: number, opacity = 0.08) => ({
  elevation,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: elevation > 1 ? 2 : 1 },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

// ================= STAT CARD =================

function StatCard({ icon, number, label }: Stat) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// ================= ACTIVITY CARD =================

function ActivityCard({
  emoji,
  title,
  subtitle,
  time,
}: Activity) {
  return (
    <View style={styles.activityCard}>
      <View style={styles.activityIcon}>
        <Text style={styles.activityEmoji}>{emoji}</Text>
      </View>

      <View style={styles.activityText}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activitySubtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

// ================= MAIN SCREEN =================

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Welcome back!</Text>
            <Text style={styles.title}>My Profile</Text>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{PROFILE.initial}</Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>{PROFILE.name}</Text>
            <Text style={styles.course}>{PROFILE.course}</Text>
            <Text style={styles.school}>{PROFILE.school}</Text>
          </View>
        </View>

        {/* OVERVIEW */}
        <Text style={styles.sectionTitle}>Overview</Text>

        <View style={styles.statsContainer}>
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </View>

        {/* RECENT ACTIVITY */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        {ACTIVITIES.map((item) => (
          <ActivityCard key={item.title} {...item} />
        ))}

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Full Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ================= STYLES =================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 15,
  },

  smallText: {
    fontSize: 14,
    color: colors.muted,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginTop: 3,
  },

  notification: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    ...shadow(3, 6),
  },

  notificationIcon: {
    fontSize: 20,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    ...shadow(3, 6),
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },

  course: {
    fontSize: 13,
    color: colors.green,
    marginTop: 4,
    fontWeight: "600",
  },

  school: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: colors.text,
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  statCard: {
    width: "31%",
    backgroundColor: colors.card,
    paddingVertical: 18,
    alignItems: "center",
    borderRadius: 16,
    ...shadow(2, 4),
  },

  statIcon: {
    fontSize: 22,
  },

  statNumber: {
    fontSize: 21,
    fontWeight: "700",
    color: colors.text,
    marginTop: 6,
  },

  statLabel: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 3,
  },

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

  activityIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: colors.greenLight,
    justifyContent: "center",
    alignItems: "center",
  },

  activityEmoji: {
    fontSize: 20,
  },

  activityText: {
    flex: 1,
    marginLeft: 12,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  activitySubtitle: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 3,
  },

  time: {
    fontSize: 10,
    color: colors.faint,
    marginLeft: 5,
  },

  button: {
    backgroundColor: colors.green,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    ...shadow(2, 4, 0.12),
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});