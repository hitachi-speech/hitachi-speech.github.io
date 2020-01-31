document.addEventListener("DOMContentLoaded", function() {
    var authors = document.getElementsByClassName("author");
    for (var i = 0, len=authors.length|0; i < len; i = i + 1 | 0) {
        authors[i].innerHTML = authors[i].innerHTML.replace("Masato Tamura", "<a href=\"https://scholar.google.co.jp/citations?user=IbPzCocAAAAJ&hl=en\">Masato Tamura</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Quan Kong", "<a href=\"https://scholar.google.co.uk/citations?user=9lqFOsEAAAAJ&hl=en\">Quan Kong</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Shota Horiguchi", "<a href=\"https://scholar.google.com/citations?user=9U5YK3wAAAAJ&hl=en\">Shota Horiguchi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuki Inoue", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=ZemgttEAAAAJ\">Yuki Inoue</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yusuke Fujita", "<a href=\"https://scholar.google.com/citations?user=8e5X3BQAAAAJ&hl=en\">Yusuke Fujita</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuta Koreeda", "<a href=\"https://scholar.google.co.jp/citations?user=zUJ8Ao4AAAAJ&hl=en\">Yuta Koreeda</a>");
    }
})
