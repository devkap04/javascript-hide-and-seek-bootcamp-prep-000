function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++); {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}