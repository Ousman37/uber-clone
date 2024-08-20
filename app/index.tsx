import { Redirect } from "expo-router";
import React from "react";

const Home = (): React.ReactElement => {
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
