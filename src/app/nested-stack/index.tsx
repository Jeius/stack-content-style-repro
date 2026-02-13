import React from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function NestedStackScreen() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 mb-20"
      contentContainerClassName="p-5"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-2xl font-bold mb-4">Nested Stack Screen ❌</Text>

      <View className="bg-red-100 p-4 rounded-lg mb-5 border-l-4 border-red-500">
        <Text className="font-bold mb-2 text-red-900">
          ❌ This Doesn't Work!
        </Text>
        <Text className="leading-6 text-red-900">
          This screen is inside a Stack navigator, which is nested inside the
          Tabs navigator. Even though the Stack has contentStyle with
          pointerEvents='box-none', the button below is NOT clickable.
        </Text>
      </View>

      <View className="bg-blue-100 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
        <Text className="font-bold mb-2">🎯 Try This:</Text>
        <Text className="leading-6">
          Scroll down and try to click the blue button at the bottom. It won't
          work!
          {"\n\n"}
          Compare this with the "Simple Tab" where the same button IS clickable.
          Both have the same pointerEvents configuration, but Stack doesn't pass
          through touch events like Tabs does.
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/nested-stack/details")}
        className="bg-emerald-500 p-4 rounded-lg mb-6"
      >
        <Text className="text-white text-center font-bold text-base">
          Navigate to Details Screen
        </Text>
      </Pressable>

      <View className="mb-6">
        <Text className="font-bold mb-3 text-lg">Current Configuration:</Text>
        <View className="bg-gray-100 p-4 rounded-lg">
          <Text className="font-mono text-xs">
            {`<Stack screenOptions={{
  contentStyle: {
    backgroundColor: 'transparent',
    pointerEvents: 'box-none'
  }
}} />

<Tabs screenOptions={{
  sceneStyle: {
    backgroundColor: 'transparent',
    pointerEvents: 'box-none'
  }
}} />`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
