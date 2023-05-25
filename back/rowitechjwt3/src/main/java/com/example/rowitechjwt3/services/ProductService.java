package com.example.rowitechjwt3.services;

import com.example.rowitechjwt3.entities.Product;
import com.example.rowitechjwt3.repostiories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> findAll(){
        return productRepository.findAll();
    }
}
