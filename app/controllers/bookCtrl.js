"use strict";

app.controller('bookCtrl', function($scope, BookStorage){

  BookStorage.getBookList()
  .then((bookCollection) => {
    $scope.books = bookCollection;
  });


});
