import { Stack } from "expo-router";

export default function NestedStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
          // This is the key configuration that should allow pointer events
          // to pass through to the button below, but it doesn't work
          pointerEvents: "box-none",
        },
        animation: 'fade'
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Stack Screen",
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: "Details",
        }}
      />
    </Stack>
  );
}
