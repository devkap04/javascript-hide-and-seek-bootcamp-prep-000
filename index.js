function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}

function deepestChild() {
  var node = document.getElementById("grand-node").querySelectorAll("div");
  var deep;
  for (var i = 0; i < node.length; i++) {
    
  }
}