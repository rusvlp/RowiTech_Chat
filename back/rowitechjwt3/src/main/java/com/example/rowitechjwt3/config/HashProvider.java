package com.example.rowitechjwt3.config;

import com.google.common.base.Charsets;
import com.google.common.hash.HashCode;
import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;

public class HashProvider {

    public String getHash(String input){

        Hasher hasher = Hashing.sha256().newHasher();
        hasher.putString(input, Charsets.UTF_8);
        HashCode sha256 = hasher.hash();

        return sha256.toString();
    }
}
