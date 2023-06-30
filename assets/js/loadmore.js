$(function() {
    var itemsToShow = 3;
    var items = $(".image-content");
    var numItems = items.length;
    var showMoreBtn = $("#loadMore");
    var showLessBtn = $("#loadLess");
  
    items.slice(0, itemsToShow).show();
  
    showMoreBtn.on("click", function() {
      items.slice(itemsToShow, numItems).show();
      showMoreBtn.hide();
      showLessBtn.show();
    });
  
    showLessBtn.on("click", function() {
      items.slice(itemsToShow, numItems).hide();
      showMoreBtn.show();
      showLessBtn.hide();
    });
  });
  