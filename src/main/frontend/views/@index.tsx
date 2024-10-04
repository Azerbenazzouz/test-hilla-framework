import "../styles/style.css";
import {useEffect, useState} from "react";
import Contact from "Frontend/generated/org/example/demohilla/data/Contact";
import {ContactService} from "Frontend/generated/endpoints";
import {Grid, GridActiveItemChangedEvent, GridColumn} from "@vaadin/react-components";

export default function ContactView() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [selected , setSelected ] = useState<Contact | undefined>();
    useEffect(() => {
        // @ts-ignore
        ContactService.findAll().then(setContacts);
    }, []);

    return (
        <div className="m-5">
            <h1>Contact</h1>

            <Grid
                items={contacts}
                onActiveItemChanged={(e : GridActiveItemChangedEvent<Contact>) => setSelected(e.detail.value)}
                selectedItems={selected ? [selected] : []}
            >
                <GridColumn path="name"/>
                <GridColumn path="email"/>
                <GridColumn path="phone"/>
            </Grid>

            {selected?.email}
        </div>
    );
}