export type Stat = { icon: string; number: string; label: string };
export type Activity = {
  emoji: string;
  title: string;
  subtitle: string;
  time: string;
};

export const PROFILE = {
  initial: "R",
  name: "Rina Relova",
  course: "BS Computer Science",
  school: "Northwest Samar State University",
};

export const STATS: Stat[] = [
  { icon: "📚", number: "12", label: "Courses" },
  { icon: "📝", number: "24", label: "Projects" },
  { icon: "⭐", number: "92%", label: "Progress" },
];

export const ACTIVITIES: Activity[] = [
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