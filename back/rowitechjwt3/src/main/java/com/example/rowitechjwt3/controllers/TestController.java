package com.example.rowitechjwt3.controllers;

import com.example.rowitechjwt3.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/test")
@RequiredArgsConstructor
public class TestController {
    private final UserService userService;


    @GetMapping("/secured")

    public String securedTest(@RequestHeader("Auth") String auth, HttpServletResponse response){
        if (userService.findUserByAuthToken(auth) == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return "";
        }
        return "secured";
    }
}
