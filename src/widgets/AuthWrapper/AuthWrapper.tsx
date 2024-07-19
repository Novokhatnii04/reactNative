import { FC, ReactNode } from "react";
import { View, StyleSheet, Text } from "react-native";

interface IAuth {
  children: ReactNode;
  title: string;
  subTitle: string;
  svg: ReactNode;
}

const AuthWrapper: FC<IAuth> = ({ children, title, subTitle, svg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContent}>
          {svg}
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "80%",
    width: "100%",
    marginTop: "auto",
    borderRadius: 27,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  innerContainer: {
    height: 85,
    borderBottomColor: "#EBEFF5",
    borderBottomWidth: 2,
    justifyContent: "center",
  },
  titleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingLeft: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 16,
    color: "#606773",
  },
});

export default AuthWrapper;
