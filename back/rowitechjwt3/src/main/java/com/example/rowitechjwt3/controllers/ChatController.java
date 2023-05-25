package com.example.rowitechjwt3.controllers;

import com.example.rowitechjwt3.entities.User;
import com.example.rowitechjwt3.enums.Role;
import com.example.rowitechjwt3.requests.AssignChatRequest;
import com.example.rowitechjwt3.requests.CreateChatRequest;
import com.example.rowitechjwt3.services.ChatService;
import com.example.rowitechjwt3.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController{
    private final UserService userService;
    private final ChatService chatService;
    @PostMapping("/create")
    public long createChat(@RequestHeader("Auth") String auth, HttpServletResponse response, @RequestBody CreateChatRequest r){
        User user = userService.findUserByAuthToken(auth);
        if (user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return 0;
        }

        return chatService.createChat(r, user);
    }

    @PostMapping("/assign")
    public void assignChat(@RequestHeader("Auth") String auth, HttpServletResponse response, @RequestBody AssignChatRequest r){
        System.out.println("assign method is called");
        User user = userService.findUserByAuthToken(auth);
        if (user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        }
        if (!user.getRoles().contains(Role.ROLE_1STLINE_MANAGER)){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        }
        chatService.assignChat(r);
    }
}
