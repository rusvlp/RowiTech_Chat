package com.example.rowitechjwt3.services;

import com.example.rowitechjwt3.entities.Chat;
import com.example.rowitechjwt3.entities.Product;
import com.example.rowitechjwt3.entities.User;
import com.example.rowitechjwt3.enums.Role;
import com.example.rowitechjwt3.repostiories.ChatRepository;
import com.example.rowitechjwt3.repostiories.ProductRepository;
import com.example.rowitechjwt3.repostiories.UserRepository;
import com.example.rowitechjwt3.requests.AssignChatRequest;
import com.example.rowitechjwt3.requests.CreateChatRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public long createChat(CreateChatRequest request, User user){
        Product product = productRepository.findById(request.productId).orElse(null);

        Chat chat = new Chat();
        chat.setUser(user);
        chat.setCategory(product);

        chatRepository.save(chat);

        return chat.getId();
    }

    public void assignChat(AssignChatRequest r){
        Chat chat = chatRepository.findById(r.chatId).orElse(null);
        User manager = userRepository.findById(r.managerId).orElse(null);
        if (manager.getRoles().contains(Role.ROLE_USER) || manager.getRoles().contains(Role.ROLE_1STLINE_MANAGER)){
            throw new ResponseStatusException(HttpStatusCode.valueOf(401));
        }


       // assert chat != null;
        chat.setManager(manager);
        chat.setCategory(manager.getCategory());
        chatRepository.save(chat);
    }

    public Chat findById(long id){
        return chatRepository.findById(id).orElse(null);
    }
}
