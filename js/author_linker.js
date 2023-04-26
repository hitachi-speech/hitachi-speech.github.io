document.addEventListener("DOMContentLoaded", function () {
    var authors = document.getElementsByClassName("author");
    for (var i = 0, len = authors.length | 0; i < len; i = i + 1 | 0) {
        authors[i].innerHTML = authors[i].innerHTML.replace("Hiroki Ohashi", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=GKC6bbYAAAAJ\">Hiroki Ohashi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Hiroaki Ozaki", "<a href=\"https://www.semanticscholar.org/author/Hiroaki-Ozaki/36904068\">Hiroaki Ozaki</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Katsuyuki Nakamura", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=ZIxQ5zAAAAAJ\">Katsuyuki Nakamura</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Koichiro Ito", "<a href=\"https://scholar.google.com/citations?user=hXr2Ez8AAAAJ&hl=en\">Koichiro Ito</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Koichiro Yawata", "<a href=\"https://scholar.google.com/citations?user=B0mNkbgAAAAJ&hl=en\">Koichiro Yawata</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Kota Dohi", "<a href=\"https://scholar.google.com/citations?hl=en&user=dTyWSqYAAAAJ\">Kota Dohi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Masato Tamura", "<a href=\"https://scholar.google.co.jp/citations?user=IbPzCocAAAAJ&hl=en\">Masato Tamura</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ryo Tanabe", "<a href=\"https://scholar.google.co.jp/citations?user=6anrT6wAAAAJ&hl=en\">Ryo Tanabe</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ryota Kamoshida", "<a href=\"https://scholar.google.com/citations?hl=en&user=HXJnKcEAAAAJ\">Ryota Kamoshida</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Shota Horiguchi", "<a href=\"https://shota-horiguchi.github.io\">Shota Horiguchi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Takeshi Homma", "<a href=\"https://scholar.google.com/citations?hl=en&user=2d2a3B4AAAAJ\">Takeshi Homma</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Takeshi Homma", "<a href=\"https://morisht.github.io/MorishT\">Terufumi Morishita</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yohei Kawaguchi", "<a href=\"https://scholar.google.com/citations?user=W1HV9Q8AAAAJ&hl=en\">Yohei Kawaguchi</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yawen Xue", "<a href=\"https://scholar.google.com/citations?user=zxRaCFMAAAAJ&hl=en\">Yawen Xue</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuki Inoue", "<a href=\"https://scholar.google.co.jp/citations?hl=en&user=ZemgttEAAAAJ\">Yuki Inoue</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuki Takashima", "<a href=\"https://scholar.google.com/citations?hl=en&user=le9B9BQAAAAJ\">Yuki Takashima</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Yuta Koreeda", "<a href=\"https://scholar.google.co.jp/citations?user=zUJ8Ao4AAAAJ&hl=en\">Yuta Koreeda</a>");
        authors[i].innerHTML = authors[i].innerHTML.replace("Ziwei Deng", "<a href=\"https://scholar.google.com/citations?hl=en&user=kSxSZRgAAAAJ\">Ziwei Deng</a>");
    }
})
