import { Subscription as Subscription_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
function getCompletion_1(prompt: string | undefined): Subscription_1<string | undefined> { return client_1.subscribe("AiService", "getCompletion", { prompt }); }
export { getCompletion_1 as getCompletion };
