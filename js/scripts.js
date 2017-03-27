$(document).ready(function() {
  $(".form").submit(function(event){
    event.preventDefault();

    var favoriteArr = [];
    console.log("Arr before: " + favoriteArr)
    favoriteArr.push($("input#input1").val());
    favoriteArr.push($("input#input2").val());
    favoriteArr.push($("input#input3").val());
    favoriteArr.push($("input#input4").val());
    console.log("Arr after: " + favoriteArr)

    $("#out1").text(favoriteArr[0]);
    $("#out2").text(favoriteArr[1]);
    $("#out3").text(favoriteArr[2]);
    $("#out4").text(favoriteArr[3]);


  });

});
