import "../styles/style.css";
import {ContactService} from "Frontend/generated/endpoints";
import {AutoCrud} from "@vaadin/hilla-react-crud";
import ContactModel from "Frontend/generated/org/example/demohilla/data/ContactModel";

export default function ContactView() {
    return <AutoCrud service={ContactService} model={ContactModel} className="h-full"/>;
}