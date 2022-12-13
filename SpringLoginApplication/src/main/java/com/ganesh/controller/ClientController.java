package com.ganesh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ganesh.entity.Client;
import com.ganesh.service.ClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClientController {
	
	@Autowired
	private ClientService clientService;
	@PostMapping("/register")
	public Client saveClient(@RequestBody Client c) {
		return clientService.saveClient(c);
		 
	}
	@PostMapping("/login")
	public Client loginClient(@RequestBody Client c) {
		return clientService.loginClient(c);
		
	}

}
