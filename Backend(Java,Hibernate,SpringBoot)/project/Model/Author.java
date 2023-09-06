package com.example.project.Model;

import org.hibernate.annotations.DynamicUpdate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@DynamicUpdate
public class Author {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column
    private String  authorName;
	@Column
    private String authorEmail;
	@Column
    private String authorCountry;


	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getAuthorEmail() {
		return authorEmail;
	}

	public void setAuthorEmail(String aothorEmail) {
		this.authorEmail = aothorEmail;
	}

	public String getAuthorCountry() {
		return authorCountry;
	}

	public void setAuthorCountry(String authorCountry) {
		this.authorCountry = authorCountry;
	}
}
