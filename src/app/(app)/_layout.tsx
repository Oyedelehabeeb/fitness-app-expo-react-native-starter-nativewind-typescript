import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function Layout() {
  const { isSignedIn, isLoaded, userId, sessionId, getToken } = useAuth();

  if(!isLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" className="flex-1 justify-center items-center" />
  }

  return (
    <Stack>
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>

      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
