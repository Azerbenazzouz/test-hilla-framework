import React, {useEffect} from 'react';
import Contact from "Frontend/generated/org/example/demohilla/data/Contact";
import {useForm} from "@vaadin/hilla-react-form";
import ContactModel from "Frontend/generated/org/example/demohilla/data/ContactModel";
import {Button, TextField} from "@vaadin/react-components";

interface ContactEditorProps {
    contact: Contact;
    onSubmit: (contact: Contact) => Promise<void>;
}

const ContactEditor = ({ contact , onSubmit} : ContactEditorProps) => {
    const { field, model, submit, read } = useForm(ContactModel, {onSubmit});

    useEffect(() => {
        read(contact)
    }, [contact]);

    return (
        <div className="grid grid-cols-2 gap-s items-baseline snippet-container">
            <TextField label="Name" {...field(model.name)}/>
            <TextField label="Email" {...field(model.email)}/>
            <TextField label="Phone" {...field(model.phone)}/>
            <Button onClick={submit} theme="primary">Save</Button>
        </div>
    );
};

export default ContactEditor;