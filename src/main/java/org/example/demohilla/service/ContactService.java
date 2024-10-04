package org.example.demohilla.service;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.example.demohilla.data.Contact;
import org.example.demohilla.data.ContactRepositiry;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class ContactService {
    private final ContactRepositiry contactRepositiry;

    public ContactService(ContactRepositiry contactRepositiry) {
        this.contactRepositiry = contactRepositiry;
    }

    public List<Contact> findAll(){
        return contactRepositiry.findAll();
    }

    public Contact save(Contact contact){
        return contactRepositiry.save(contact);
    }
}
