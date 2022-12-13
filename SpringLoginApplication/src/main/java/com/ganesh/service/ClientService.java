package com.ganesh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ganesh.entity.Client;
import com.ganesh.repo.ClientRepo;

@Service
public class ClientService {
	@Autowired
	private ClientRepo clientRepo;
	
	public Client saveClient(Client c) {
		return clientRepo.save(c);	
	}
	
	public Client loginClient(Client c) {
		return clientRepo.findByCemailAndCpassword(c.cemail, c.cpassword);
	}

}
