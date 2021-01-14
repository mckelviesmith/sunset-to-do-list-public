package com.example.wap.daos;

import com.example.wap.models.Item;
import com.example.wap.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemDao {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping("/findAllItems")
    public Iterable<Item> findAllItems() {
        return itemRepository.findAll();
    }

    @GetMapping("/findItemById/{id}")
    public Item findItemById(@PathVariable("id") Integer id) {
        return itemRepository.findById(id).get();
    }

    @GetMapping("/createItem")
    public Item createItem(Item item) {
        item.setTitle("new item");
        item.setDescription("");
        item.setDeadline("");
        return itemRepository.save(item);
    }

    @GetMapping("/deleteItem/{id}")
    public void deleteItem(@PathVariable("id") Integer id) {
        itemRepository.deleteById(id);
    }



    @GetMapping("/updateThisItem/{id}/{newTitle}/{newDescription}/{newDeadline}")
    public Item renameItem(
            @PathVariable("id") Integer id,
            @PathVariable("newTitle") String newTitle,
            @PathVariable("newDescription") String newDescription,
            @PathVariable("newDeadline") String newDeadline) {
        Item item = itemRepository.findById(id).get();
        item.setTitle(newTitle);
        item.setDescription(newDescription);
        item.setDeadline(newDeadline);
        return itemRepository.save(item);
    }
}
