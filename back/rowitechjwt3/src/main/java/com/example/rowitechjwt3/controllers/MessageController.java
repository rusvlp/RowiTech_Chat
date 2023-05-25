package com.example.rowitechjwt3.controllers;

import com.example.rowitechjwt3.entities.Chat;
import com.example.rowitechjwt3.entities.Message;
import com.example.rowitechjwt3.entities.User;
import com.example.rowitechjwt3.requests.CreateChatRequest;
import com.example.rowitechjwt3.responses.MessageStatusResponse;
import com.example.rowitechjwt3.services.ChatService;
import com.example.rowitechjwt3.services.MessageService;
import com.example.rowitechjwt3.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
@RequiredArgsConstructor
public class MessageController {

    private final UserService userService;
    private final ChatService chatService;

    private final MessageService messageService;

    @PostMapping("/checkMessage/{chatid}")
    @ResponseBody
    public MessageStatusResponse checkMsg(@PathVariable long chatid, @RequestHeader("Auth") String auth, HttpServletResponse response){
        User user = userService.findUserByAuthToken(auth);
        if (user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;
        }

        Chat chat = chatService.findById(chatid);
        if (chat.getUser() != user || chat.getManager() !=user){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return null;
        }

        List<Message> undeliveredMessages = messageService.findUndeliveredMessagesByChatId(chatid);
        MessageStatusResponse msr = new MessageStatusResponse();
        msr.messages = undeliveredMessages;
        messageService.markMessagesAsDelivered(undeliveredMessages);
        return msr;

    }

    @PostMapping("/sendMessage/{chatid}")
    public void sendMessage(@PathVariable long chatid, @RequestHeader("Auth") String auth, HttpServletResponse response, @RequestBody Message m){
        User user = userService.findUserByAuthToken(auth);
        if (user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        }

        Chat chat = chatService.findById(chatid);
        if (chat.getUser() != user || chat.getManager() !=user){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);

        }



    }
}
