package main

type Page struct {
    Name       string       `json:"name"`
    Body       string       `json:"body"`
    Author     string       `json:"author"`
}

type Pages []Page
