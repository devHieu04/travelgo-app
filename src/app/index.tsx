import { StyleSheet, Text, View } from "react-native";

// Màn hình tạm cho bản init. Các màn hình thật (chuyến đi, lịch trình,
// chi tiêu) làm theo backlog Sprint 1.
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelGo</Text>
      <Text style={styles.subtitle}>
        Lên lịch trình và ngân sách chung cho cả nhóm.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
  },
});
