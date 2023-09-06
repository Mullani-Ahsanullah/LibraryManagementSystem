package com.example.project.Services;
import java.util.List;
import com.example.project.Model.User;
public interface UserServices {
	public void addUser(User obj);
	public List<User> findBookedUsersByBookId(long bookId);
}
