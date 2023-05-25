package com.example.rowitechjwt3.controllers;

import com.example.rowitechjwt3.entities.Product;
import com.example.rowitechjwt3.repostiories.ProductRepository;
import com.example.rowitechjwt3.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {
    private final ProductRepository productRepository;
    private final UserService userService;

    @GetMapping("/all")
    //@ResponseBody
    public List<Product> getAll(@RequestHeader("Auth") String auth, HttpServletResponse response){
        if (userService.findUserByAuthToken(auth) == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;
        }

        System.out.println(productRepository.findAll());

        return productRepository.findAll();

        /*return new ArrayList<>(){{
            this.add(new Product());
            this.get(0).setTitle("asd");
            this.get(0).setId(1);
        }}; */

        //return null;
        //return productRepository.findAll();
    }




}
