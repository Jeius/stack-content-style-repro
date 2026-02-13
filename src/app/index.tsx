import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function HomeTab() {
  return (
    <ScrollView className="flex-1 bg-white" contentContainerClassName="p-5 grow">
      <Text className="text-2xl font-bold mb-4">
        Stack contentStyle Bug Demo
      </Text>
      <Text className="text-base text-gray-500 mb-5">
        This app demonstrates an issue with expo-router Stack's `contentStyle`
        where `pointerEvents` doesn't work properly.
      </Text>

      <View className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-500 mb-5">
        <Text className="font-bold mb-2">
          📋 Test Instructions:
        </Text>
        <Text className="leading-6">
          1. Go to "Simple Tab" ✅ - the button IS clickable{"\n"}
          2. Go to "Nested Stack" ❌ - the button is NOT clickable{"\n"}
          3. Both have the same configuration{"\n"}
          4. This shows Stack's contentStyle pointerEvents doesn't work
        </Text>
      </View>

      <View className="bg-indigo-100 p-4 rounded-lg border-l-4 border-indigo-500">
        <Text className="font-bold mb-2">
          🔍 What to Look For:
        </Text>
        <Text className="leading-6">
          • Simple Tab: Button click works ✅{"\n"}
          • Nested Stack: Button click doesn't work ❌{"\n"}
          • Same button, same configuration{"\n"}
          • Different behavior!
        </Text>
      </View>
    </ScrollView>
  );
}
