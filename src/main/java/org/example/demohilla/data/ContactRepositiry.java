package org.example.demohilla.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ContactRepositiry extends JpaRepository<Contact, Integer> {
    JpaSpecificationExecutor<Contact> findByEmail(String email);
}
