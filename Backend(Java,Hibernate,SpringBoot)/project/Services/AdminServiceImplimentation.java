package com.example.project.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.Model.Admin;
import com.example.project.Repo.AdminRepository;

@Service
public class AdminServiceImplimentation{

	@Autowired
	private AdminRepository adminRepo;
	
	public void addadmin(Admin admin) {
		
		this.adminRepo.save(admin);
		
	}

	public Optional<Admin> getadminByEmail(String email) {
		
		return this.adminRepo.findByadminEmail(email);
		
	}


}