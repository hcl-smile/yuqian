import { View, Text, Image } from "@tarojs/components";
import pic from "../../assets/download.webp";
import viewPic from "../../assets/2.webp";
import "./index.less";

export const ListView = () => {
  return (
    <View className="list-wrapper">
      <View className="list-wrapper-left">
        <View className="list-left-top">
          玉前村第一得分后卫洪杰灵，今日大号三双克敌制胜
        </View>
        <View className="list-left-bot">
          <Image src={viewPic} />
          <Text>56</Text>
        </View>
      </View>
      <View className="list-wrapper-right">
        <Image src={pic} />
      </View>
    </View>
  );
};
