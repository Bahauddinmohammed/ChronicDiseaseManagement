package com.hcl.cdmp.repo;

import org.springframework.stereotype.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hcl.cdmp.entity.UserDetails;

@Repository
public interface UserRepository extends JpaRepository<UserDetails ,Long>{

	@Query(value = "SELECT * FROM users_details WHERE email = :email", nativeQuery = true)
	Optional<UserDetails> findByEmail(String email);

	
}
