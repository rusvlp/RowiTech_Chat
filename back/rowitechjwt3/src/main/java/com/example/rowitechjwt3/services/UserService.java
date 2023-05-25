package com.example.rowitechjwt3.services;

import com.example.rowitechjwt3.config.HashProvider;
import com.example.rowitechjwt3.entities.User;
import com.example.rowitechjwt3.enums.Role;
import com.example.rowitechjwt3.repostiories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

//import javax.xml.bind.DatatypeConverter;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HashSet;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final HashProvider hashProvider;


    public String registerUser(User user){


        user.setPassword(encoder.encode(user.getPassword()));
        String toHash = user.getUsername() + user.getUsername();

        user.setAuthToken(hashProvider.getHash(toHash));

        user.getRoles().add(Role.ROLE_USER);

        userRepository.save(user);



        return user.getAuthToken();
       // toHash += user.getPassword();


    }

    public User findUserByAuthToken(String token){
       return userRepository.findUserByAuthToken(token);
    }
}
