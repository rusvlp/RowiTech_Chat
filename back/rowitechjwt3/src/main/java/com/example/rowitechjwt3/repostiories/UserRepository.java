package com.example.rowitechjwt3.repostiories;

import com.example.rowitechjwt3.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select u from User u where u.authToken = ?1")
    public User findUserByAuthToken(String token);
}
