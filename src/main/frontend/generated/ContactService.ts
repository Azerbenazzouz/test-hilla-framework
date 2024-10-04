import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
import type Contact_1 from "./org/example/demohilla/data/Contact.js";
async function findAll_1(init?: EndpointRequestInit_1): Promise<Array<Contact_1 | undefined> | undefined> { return client_1.call("ContactService", "findAll", {}, init); }
async function save_1(contact: Contact_1 | undefined, init?: EndpointRequestInit_1): Promise<Contact_1 | undefined> { return client_1.call("ContactService", "save", { contact }, init); }
export { findAll_1 as findAll, save_1 as save };
