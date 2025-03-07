import React from "react";
import { SafeAreaView } from "react-native";
import Counter from "./components/Counter";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Counter />
    </SafeAreaView>
  );
}
