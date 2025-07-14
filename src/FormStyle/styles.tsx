import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerOff: {
    display: "none",
  },
  containerOn: {
    flex: 1,
    width: "100%",
    height: "10%",
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textInput: {
    height: 40,
    width: "100%",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  pressable: { backgroundColor: "blue", padding: 10, width: "100%", borderRadius: 5 },
  text: {
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  textForm: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  }
});
