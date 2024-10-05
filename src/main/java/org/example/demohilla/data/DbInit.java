package org.example.demohilla.data;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements ApplicationRunner {
    private final ContactRepositiry contactRepositiry;

    public DbInit(ContactRepositiry contactRepositiry) {
        this.contactRepositiry = contactRepositiry;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        String[] firstNamess = {"azer","amine","amen","adem","mouhamed","rayen"};
        String[] lastNames = {"Ben Azzouz","hentati","bjaoui","mestiri","issaoui","mrtyuo"};

        for(int i=0; i<100; i++) {
            String name = firstNamess[(int) (Math.random()*firstNamess.length)] + " " + lastNames[(int) (Math.random()*lastNames.length)];
            String email= name.replace(" ", "").toLowerCase() + "@gmail.com";
            String phone= "+216"+ (int) (Math.random() * 100000000);
            contactRepositiry.save(new Contact(name,email,phone));
        }
    }
}
