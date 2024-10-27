import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { PlatformColor, useColorScheme } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTransparent: true,
            headerLargeTitle: true,
            headerBlurEffect: "prominent",
            headerShadowVisible: true,
            headerLargeTitleShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgba(255,255,255,0.01)",
            },
            headerLargeStyle: {
              backgroundColor: PlatformColor("systemGroupedBackground"),
            },
            title: "Header",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
