package com.example.project.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.project.Model.Author;
import com.example.project.Repo.AuthorRepository;

@Service
public class AuthorService {
    @Autowired
    AuthorRepository authorRepository;
    
    public void createAuthor(Author author){
        authorRepository.save(author);
    }
    public Optional<Author> getAuthorById(int id)
	{ 
		Optional<Author> author=authorRepository.findById(id);
		return author;
	}
    
    public Author updateAuthor( Optional<Author> AuthDetails,Author newVal) {
		Author author =AuthDetails.get();
		author.setAuthorName(newVal.getAuthorName());
		author.setAuthorEmail(newVal.getAuthorEmail());
		author.setAuthorCountry(newVal.getAuthorCountry());
		return authorRepository.save(author);
	}
    public void deleteAuthor(int id ){
        authorRepository.deleteById(id);
    }
    
    public List<Author> getAuthorFromDb(String title) {
		List<Author> author = new ArrayList<Author>();
		if (title == null) 
			authorRepository.findAll().forEach(author::add);
		else
			authorRepository.findByAuthorNameContainingIgnoreCase(title).forEach(author::add);
		return  author;
	}
}
