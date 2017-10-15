package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "strconv"

    "github.com/siddontang/go-mysql/client"
    "github.com/gorilla/mux"
)

func Index(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Welcome!")
}

func PageIndex(w http.ResponseWriter, r *http.Request) {
    pages := Pages{
        Page{Name: "Markdown numero uno"},
        Page{Name: "Markdown numer dos"},
    }

    if err := json.NewEncoder(w).Encode(pages); err != nil {
        panic(err)
    }
}

func PageShow(w http.ResponseWriter, r *http.Request) {
     vars := mux.Vars(r)
     userID, userE := strconv.Atoi(vars["userID"])
     pageID, pageE := strconv.Atoi(vars["pageID"])
     if userE != nil {
          return;
     }
     if pageE != nil{
          return;
     }

     conn, _ := client.Connect("104.236.141.69:3306", "gu-port", "gu-port", "gu-port")

     conn.Ping()

     m, _ := conn.Execute(`SELECT * FROM pages WHERE pageID=` + strconv.Itoa(pageID) + ` AND userID=` + strconv.Itoa(userID))

     name, _ := m.GetString(0,2)
     body, _ := m.GetString(0,4)
     author, _ := m.GetString(0,3)
     page :=  Page{
                    Name: name,
                    Body: body,
                    Author: author,
               }

     if err := json.NewEncoder(w).Encode(page); err != nil {
         panic(err)
     }
}
