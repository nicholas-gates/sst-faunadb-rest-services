import { SSTConfig } from "sst";
import { RestStack } from "./stacks/RestStack"

export default {
  config(_input) {
    return {
      name: "rest-services",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(RestStack)
  },
} satisfies SSTConfig;
