import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Auth from './src/routes/auth';

export default function App() {

  return (
    <View className="w-full h-full "  >
      <Auth />
    </View>
  );
}