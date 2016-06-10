$(document).ready(function(){
  $("#submit").click(function(){
    var name=$("input[name=first_name]").val();
    var comment=$("input[name=comment]").val();
    append(comment);
  })
})
