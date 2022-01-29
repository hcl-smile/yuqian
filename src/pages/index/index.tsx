import { Component } from "react";
import { View } from "@tarojs/components";
import { Header } from "../../components/head/head";
import { HomeSwiper } from "../../components/swiper/swiper";
import { ListView } from "../../components/list/list";

import "./index.less";

export default () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View className="index">
      <Header />
      <HomeSwiper />
      {arr.map((ret) => (
        <ListView key={ret} />
      ))}
    </View>
  );
};
