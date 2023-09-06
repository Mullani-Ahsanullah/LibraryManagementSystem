package com.example.project.Serv;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.project.Model.User;
import com.example.project.Repo.UserRepository;

@Service
public class UserServiceImpl {
	
	@Autowired
	private UserRepository userRepo;

	public void addUser(User obj) {
		
		this.userRepo.save(obj);
	}
	
	public List<User> findBookedUsersByBookId(long bookId) {
		
		return this.userRepo.findUsersByBookId(bookId);
	}
}
