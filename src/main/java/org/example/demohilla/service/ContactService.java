package org.example.demohilla.service;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;
import org.example.demohilla.data.Contact;
import org.example.demohilla.data.ContactRepositiry;


@BrowserCallable
@AnonymousAllowed
public class ContactService extends CrudRepositoryService<Contact,Long, ContactRepositiry> {

}
