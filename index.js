function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rankedLists.length; i++); {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}