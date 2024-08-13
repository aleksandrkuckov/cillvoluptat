import { Transak } from "@transak/transak-sdk";

const transakConfig = {
  apiKey: "YOUR_API_KEY",
  environment: Transak.ENVIRONMENTS.STAGING,
  exchangeScreenTitle: "React Native Expo",
};

const transak = new Transak(transakConfig);
transak.init();
