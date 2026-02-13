import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function SimpleTab() {
  return (
    <ScrollView
      className="flex-1 mb-20"
      contentContainerClassName="p-5 pointer-events-box-none"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-2xl font-bold mb-4">Simple Tab Screen ✅</Text>

      <View className="bg-emerald-100 p-4 rounded-lg mb-5 border-l-4 border-emerald-500">
        <Text className="font-bold mb-2 text-emerald-900">✅ This Works!</Text>
        <Text className="leading-6 text-emerald-800">
          This is a regular Tab screen (not inside a Stack navigator). The
          sceneStyle has pointerEvents='box-none', which allows touch events to
          pass through to the button below.
        </Text>
      </View>

      <View className="bg-blue-100 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
        <Text className="font-bold mb-2">🎯 Try This:</Text>
        <Text className="leading-6">
          Scroll down and click the blue button at the bottom. It should work!
          {"\n\n"}
          This demonstrates that the Tabs navigator's sceneStyle with
          pointerEvents='box-none' works correctly.
        </Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold mb-3 text-lg">Configuration:</Text>
        <View className="bg-gray-100 p-4 rounded-lg">
          <Text className="font-mono text-xs">
            {`<Tabs screenOptions={{
  sceneStyle: {
    backgroundColor: 'transparent',
    pointerEvents: 'box-none'
  }
}} />`}
          </Text>
        </View>
      </View>

      <View className="bg-amber-100 p-4 rounded-lg mb-6 border-l-4 border-amber-500">
        <Text className="font-bold mb-2">📝 Compare With Nested Stack Tab</Text>
        <Text className="leading-6">
          Now go to the "Nested Stack" tab and try to click the same button. It
          won't work, even though it has the same pointerEvents configuration!
        </Text>
      </View>
    </ScrollView>
  );
}
