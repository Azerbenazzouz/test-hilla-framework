package org.example.demohilla.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepositiry extends CrudRepository<Contact, Long>, JpaSpecificationExecutor<Contact> {
    JpaSpecificationExecutor<Contact> findByEmail(String email);
}
