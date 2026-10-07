export const colors = {
  background: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1E293B",
  muted: "#7A7F87",
  faint: "#9AA0A6",
  green: "#4157e6",
  greenLight: "#E8F5E9",
};

export const shadow = (elevation: number, radius: number, opacity = 0.08) => ({
  elevation,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: elevation > 1 ? 2 : 1 },
  shadowOpacity: opacity,
  shadowRadius: radius,
});