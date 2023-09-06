package com.example.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.project.Model.Book;
import com.example.project.Services.EmailService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/email")
public class EmailController {
	@Autowired
	private EmailService emailService;
	@RequestMapping("/")
	public ResponseEntity<String> checkEmail(@RequestParam(required = false) String userEmail, @RequestBody Book bookDetails )
	{
		String bookName=bookDetails.getBookName();
		String strMsg = bookDetails.getBookName()+" "+bookDetails.getAuthorName()+" "+bookDetails.getIsPublished();
		
	System.out.println(bookDetails);	
	emailService.sendEmail(userEmail, "Your Book Lending is confirmed!", "We are happy to inform you that your Lending for a book"
			+ " Book Name:"+ bookName +" is confirmed!"
			+strMsg+" ");
	return new ResponseEntity<>("Message Send",HttpStatus.CREATED);
	}
}