package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    public String deadline;


    public Item(Integer id, String title, String description, String deadline) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    // no argument constructor is required
    public Item() { }


    // to string method to print instance to console
    public String toString() {
        if (this.deadline == null) {
            return "Id: " + id + ", Title: " + title + ", Description: " + description
                    + ", Deadline: null" + ", Deadline's ID: null";
        }
        else {
            return "Id: " + id + ", Title: " + title + ", Description: " + description
                    + ", Deadline:" + deadline;
        }
    }
}

