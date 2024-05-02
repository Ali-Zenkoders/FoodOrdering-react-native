import { Redirect } from "expo-router";

// this index is create to redirect menu/index.tsx
export default function TabIndex() {
  return <Redirect href={"/(admin)/menu/"} />;
}
