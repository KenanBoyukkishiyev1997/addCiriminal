var cloned_nbr = $(".clonedInput").length - 1; //Exclude Default (first) div 

function clone() {
  
    cloned_nbr++;
  var new_clone = $(".clonedInput").first().clone();
    $("#formy").append(new_clone);
    rearrange();
}

function remove() {
  $(this).closest(".clonedInput").remove();
  cloned_nbr--;
  rearrange();
}

function rearrange() {
  var count = 1;
  var totalCount = $(".clonedInput").length;
  $(".clonedInput").each(function() {
    $(this).attr("id", "clonedInput" + count).find(".label-nbr").text(count).end().
    find(".category").attr("id", "category" + count).end().find(".remove").toggle(totalCount != 1).attr("id", "remove" + count);
    count++;
  });
}
$(".clone").on("click", clone);

$(document).on("click", ".remove", remove);







var cloned_nbr_cinayet = $(".clonedInputCinayet").length - 1; //Exclude Default (first) div 

function cloneCinayet() {
  
  cloned_nbr_cinayet++;
  var new_clone_cinayet = $(".clonedInputCinayet").first().clone();
    $("#formyCinayet").append(new_clone_cinayet);
    rearrangeCinayet();
}

function removeCinayet() {
  $(this).closest(".clonedInputCinayet").remove();
  cloned_nbr_cinayet--;
  rearrangeCinayet();
}

function rearrangeCinayet() {
  var countCinayet = 1;
  var totalCountCinayet = $(".clonedInputCinayet").length;
  $(".clonedInputCinayet").each(function() {
    $(this).attr("id", "clonedInputCinayet" + countCinayet).find(".label-nbrCinayet").text(countCinayet).end().
    find(".category").attr("id", "category" + countCinayet).end().find(".remove").toggle(totalCountCinayet != 1).attr("id", "remove" + countCinayet);
    countCinayet++;
  });
}
$(".cloneCinayet").on("click", cloneCinayet);

$(document).on("click", ".remove", removeCinayet);
