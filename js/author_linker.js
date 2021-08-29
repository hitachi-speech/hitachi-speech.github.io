document.addEventListener("DOMContentLoaded", function() {
    var authors = document.getElementsByClassName("author");
   for (var i = 0, len=authors.length|0; i < len; i = i + 1 | 0) {
        authors[i].innerHTML = authors[i].innerHTML.replace("Hiroki Ohashi", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=GKC6bbYAAAAJ\">Hiroki Ohashi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Hiroaki Ozaki", "<a href=\"https://www.semanticscholar.org/author/Hiroaki-Ozaki/36904068\">Hiroaki Ozaki</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Katsuyuki Nakamura", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=ZIxQ5zAAAAAJ\">Katsuyuki Nakamura</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Koichiro Ito", "<a href=\"https://scholar.google.com/citations?user=hXr2Ez8AAAAJ&hl=en\">Koichiro Ito</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Masato Tamura", "<a href=\"https://scholar.google.co.jp/citations?user=IbPzCocAAAAJ&hl=en\">Masato Tamura</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Phong Nguyen", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=v3GPtFwAAAAJ\">Phong Nguyen</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Phong Xuan Nguyen", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=v3GPtFwAAAAJ\">Phong Xuan Nguyen</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Quan Kong", "<a href=\"https://scholar.google.co.uk/citations?user=9lqFOsEAAAAJ&hl=en\">Quan Kong</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ryo Tanabe", "<a href=\"https://scholar.google.co.jp/citations?user=6anrT6wAAAAJ&hl=en\">Ryo Tanabe</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ryota Kamoshida", "<a href=\"https://scholar.google.com/citations?hl=en&user=HXJnKcEAAAAJ\">Ryota Kamoshida</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Shota Horiguchi", "<a href=\"https://scholar.google.com/citations?user=9U5YK3wAAAAJ&hl=en\">Shota Horiguchi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yohei Kawaguchi", "<a href=\"https://scholar.google.com/citations?user=W1HV9Q8AAAAJ&hl=en\">Yohei Kawaguchi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuki Inoue", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=ZemgttEAAAAJ\">Yuki Inoue</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuta Koreeda", "<a href=\"https://scholar.google.co.jp/citations?user=zUJ8Ao4AAAAJ&hl=en\">Yuta Koreeda</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ziwei Deng", "<a href=\"https://scholar.google.com/citations?hl=en&user=kSxSZRgAAAAJ\">Ziwei Deng</a>");
    }
})
