import { View, Text } from "@tarojs/components";
import "./index.less";

export const Header = () => {
  return (
    <View className="header">
      <Text className="header-tab active">首页</Text>
      <Text className="header-tab">山前</Text>
    </View>
  );
};
