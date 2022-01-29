import { Swiper, SwiperItem, View, Image } from "@tarojs/components";
import pic from "../../assets/1.jpg";
import "./index.less";

export const HomeSwiper = () => {
  return (
    <Swiper
      className="home-swiper"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots={false}
      autoplay
    >
      <SwiperItem>
        <View className="home-swiper-tab">
          <Image src={pic} />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View className="home-swiper-tab">
          <Image src={pic} />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View className="home-swiper-tab">
          <Image src={pic} />
        </View>
      </SwiperItem>
    </Swiper>
  );
};
