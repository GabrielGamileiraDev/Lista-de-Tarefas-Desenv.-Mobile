import { View } from "react-native";

interface IBaseInputProps{
  children : React.ReactNode
}

export default function BaseInputDate({ children } : IBaseInputProps) {
  return (
    <View>
    {children}
    </View>
  );
}