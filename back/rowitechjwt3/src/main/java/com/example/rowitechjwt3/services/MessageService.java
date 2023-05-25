package com.example.rowitechjwt3.services;

import com.example.rowitechjwt3.entities.Chat;
import com.example.rowitechjwt3.entities.Message;
import com.example.rowitechjwt3.repostiories.ChatRepository;
import com.example.rowitechjwt3.repostiories.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final ChatRepository chatRepository;

    public List<Message> findMessagesByChat(long chatId){
        return messageRepository.findByChatId(chatId);
    }

    public List<Message> findUndeliveredMessagesByChatId(long chatId){
        return messageRepository.findUndeliveredByChatId(chatId);
    }

    public void markMessagesAsDelivered(List<Message> messages){
        messages.forEach(message -> {
            message.setDelivered(true);
            messageRepository.save(message);
        });

    }

    public void registerMessage(Message message){
        Chat ch = chatRepository.findById(message.getId()).orElse(null);
        ch.getMessages().add(message);
        chatRepository.save(ch);

    }
}
