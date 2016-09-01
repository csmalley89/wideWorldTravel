"use strict";

app.factory("BookStorage", ($q, $http) => {

  let getBookList = () => {
    let books = [];
    return $q((resolve, reject)=>{
      $http.get("../../data/guides.json")
      .success((bookObject)=>{
        resolve(bookObject);
      })
      .error((error) =>{
        reject(error);
      });
    });
  };
  return{getBookList};
});
