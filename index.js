function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var rankedLists = document.getElementById("app").querySelectorAll("ul.ranked-list");
  for (var i = 0; i < rankedLists.length; i++); {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML, ) + n;
  }
}