import "../global.css"

import { Tabs } from "expo-router";
import { Alert } from "react-native";
import { Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-white">
      {/* Button positioned behind the tabs - demonstrates pointer events behavior */}
      <Pressable
        onPress={() => Alert.alert("Success!", "Button behind tabs was clicked!")}
        className="absolute inset-x-5 bg-blue-500 rounded-xl p-4"
        style={{ bottom: insets.bottom + 60 }} // Position above the tab bar
      >
        <Text className="text-center font-bold text-base">
          🎯 Try to Click Me! (Behind Tabs)
        </Text>
      </Pressable>

      <Tabs
        screenOptions={{
          headerShown: true,
          animation: 'shift',
          headerStyle: {
            backgroundColor: "#f3f4f6",
          },
          sceneStyle: {
            backgroundColor: "transparent",
            // This allows pointer events to pass through for Tab screens
            pointerEvents: "box-none",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <View>
                <Text style={{ color }}>🏠</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="simple-tab"
          options={{
            title: "Simple Tab",
            tabBarIcon: ({ color }) => (
              <View>
                <Text style={{ color }}>✅</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="nested-stack"
          options={{
            title: "Nested Stack",
            tabBarIcon: ({ color }) => (
              <View>
                <Text style={{ color }}>❌</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
