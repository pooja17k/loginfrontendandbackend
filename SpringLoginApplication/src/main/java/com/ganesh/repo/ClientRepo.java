package com.ganesh.repo;



import org.springframework.data.jpa.repository.JpaRepository;

import com.ganesh.entity.Client;

public interface ClientRepo extends JpaRepository<Client, Integer>{
		Client findByCemailAndCpassword(String cemail,String cpassword);
}
