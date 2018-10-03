function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < rankedLists.length; i++); {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}