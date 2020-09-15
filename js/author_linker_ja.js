document.addEventListener("DOMContentLoaded", function() {
    var authors = document.getElementsByClassName("author");
    for (var i = 0, len=authors.length|0; i < len; i = i + 1 | 0) {
        authors[i].innerHTML = authors[i].innerHTML.replace("大橋洋輝", "<a href=\"https://scholar.google.co.jp/citations?hl=ja&user=GKC6bbYAAAAJ\">大橋洋輝</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("中村克行", "<a href=\"https://scholar.google.co.jp/citations?hl=ja&user=ZIxQ5zAAAAAJ\">中村克行</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("田村雅人", "<a href=\"https://scholar.google.co.jp/citations?user=IbPzCocAAAAJ&hl=ja\">田村雅人</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Phong Nguyen", "<a href=\"https://scholar.google.co.jp/citations?hl=ja&user=v3GPtFwAAAAJ\">Phong Nguyen</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Phong Xuan Nguyen", "<a href=\"https://scholar.google.co.jp/citations?hl=ja&user=v3GPtFwAAAAJ\">Phong Xuan Nguyen</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("孔全", "<a href=\"https://scholar.google.co.uk/citations?user=9lqFOsEAAAAJ&hl=ja\">孔全</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("鴨志田亮太", "<a href=\"https://scholar.google.com/citations?hl=ja&user=HXJnKcEAAAAJ\">鴨志田亮太</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("堀口翔太", "<a href=\"https://scholar.google.com/citations?user=9U5YK3wAAAAJ&hl=ja\">堀口翔太</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("川口洋平", "<a href=\"https://scholar.google.com/citations?user=W1HV9Q8AAAAJ&hl=ja\">川口洋平</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("井上祐貴", "<a href=\"https://scholar.google.co.jp/citations?hl=ja&user=ZemgttEAAAAJ\">井上祐貴</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("藤田雄介", "<a href=\"https://scholar.google.com/citations?user=8e5X3BQAAAAJ&hl=ja\">藤田雄介</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("是枝裕太", "<a href=\"https://scholar.google.co.jp/citations?user=zUJ8Ao4AAAAJ&hl=ja\">是枝裕太</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ziwei Deng", "<a href=\"https://scholar.google.com/citations?hl=ja&user=kSxSZRgAAAAJ\">Ziwei Deng</a>");
    }
})
