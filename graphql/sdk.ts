import { getBuiltGraphSDK } from "../.graphclient";

export type GraphqlSDK = ReturnType<typeof getBuiltGraphSDK>;
let sdk: GraphqlSDK | null = null;

export default function buildSDKClient(): GraphqlSDK {
  if (sdk == null) {
    sdk = getBuiltGraphSDK();
  }

  return sdk;
}
