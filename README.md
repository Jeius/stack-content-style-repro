# Stack contentStyle pointerEvents Issue Reproduction

This repository is a minimal reproduction of an issue with expo-router Stack's `contentStyle` where the `pointerEvents` property does not work as expected in Stack `screenOptions`.

## Issue Description

The `pointerEvents` property in Stack's `contentStyle` does not allow touch events to pass through to elements positioned behind the Stack navigator, even when set to `'box-none'`.

### Navigation Structure

- **Root Layout**: Contains a button positioned under the Tabs navigator
- **Tabs Navigator**: Main tab navigation
- **Stack Navigator**: Nested inside a Tab Screen
- **Expected Behavior**: Button behind the Stack should be interactable when `pointerEvents='box-none'` is set in both Stack and Tab screen options
- **Actual Behavior**: Button remains non-interactable despite `pointerEvents='box-none'` configuration

### Configuration

Both Stack and Tabs navigators have `screenOptions` configured with:

```tsx
<Stack.Screen
  options={{
    contentStyle: {
      pointerEvents: "box-none",
    },
  }}
/>
```

```tsx
<Tabs.Screen
  options={{
    sceneStyle: {
      pointerEvents: "box-none",
    },
  }}
/>
```

However, elements positioned behind the Stack navigator remain non-interactable.

## 🚀 How to use

```sh
pnpm install
pnpm start
```

## Related Issue

This reproduction demonstrates that `pointerEvents` in Stack's `contentStyle` does not propagate touch events through the navigation hierarchy as expected.
