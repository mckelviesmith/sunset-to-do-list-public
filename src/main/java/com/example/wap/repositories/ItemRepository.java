package com.example.wap.repositories;

import com.example.wap.models.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository
        extends CrudRepository<Item, Integer> {
}
