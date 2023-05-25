package com.example.rowitechjwt3.repostiories;

import com.example.rowitechjwt3.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query("select m from Message m where m.chat_id = ?1")
    public List<Message> findByChatId(long chatId);

    @Query("select m from Message m where m.chat_id = ?1 and m.isDelivered = false")
    public List<Message> findUndeliveredByChatId(long chatId);
}
