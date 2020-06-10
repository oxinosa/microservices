export interface IConfig {
  clientID: string;
  clientSecret: string;
  redirectURI: string;
  applicationID: string;
  apiKey: string;
  clientPort: number;
  serverPort: number;
  fusionAuthPort: number;
}

export const config: IConfig = {
  // OAuth info (copied from the FusionAuth admin panel)
  clientID: "6bf49db3-192e-428c-a8d0-22b4c7c61d1d",
  clientSecret: "r5lpc-AVSIugvf7DfRtd-JsdjYcHPorzdALGqD7yQFQ",
  redirectURI: "http://localhost:9000/oauth-callback",
  applicationID: "6bf49db3-192e-428c-a8d0-22b4c7c61d1d",

  // our FusionAuth api key
  apiKey: "Fq_kEO90O98gLtvKPYohbzhCU2Qsx997b_jZfFus1tM",

  // ports
  clientPort: 8080,
  serverPort: 9000,
  fusionAuthPort: 9011,
};
