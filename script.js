let bibliotecaMangas = [
  {
    link: "https://mangaplus.shueisha.co.jp/titles/100150",
    nome: "Jujutsu Kainsen",
    img: "/imagens/jujutsu-kainsen.jpg",
  },
  {
    link: "https://mangaplus.shueisha.co.jp/titles/100017",
    nome: "Boku no Hero Academy",
    img: "/imagens/boku-no-hero.jpg",
  },

  {
    link: "https://www.amazon.com/Attack-Titan-Vol-Hajime-Isayama-ebook/dp/B00CCOO1HA/ref=sr_1_1?crid=3AXTB46008LTF&keywords=attack+on+titan&qid=1670210779&s=comics-manga&sprefix=at%2Ccomics-manga%2C311&sr=1-1",
    nome: "Shingeki no Kyojin",
    img: "/imagens/shingeki-no-kyojin.jpg",
  },
  {
    link: "https://mangaplus.shueisha.co.jp/titles/100009",
    nome: "Kimetsu no Yaiba",
    img: "/imagens/kimetsu-no-yaiba.jpg",
  },
  {
    link: "https://mangaplus.shueisha.co.jp/titles/100149",
    nome: "One Piece",
    img: "/imagens/one-piece.jpg",
  },

  {
    link: "https://comic-walker.com/contents/detail/KDCW_CW01000003020000_68/",
    nome: "Neon Genesis Evangelion",
    img: "/imagens/evangelion.jpg",
  },
  {
    link: "https://mangaplus.shueisha.co.jp/titles/100018",
    nome: "Naruto",
    img: "/imagens/naruto.jpg",
  },
  {
    link: "https://mangaplus.shueisha.co.jp/titles/100004",
    nome: "Bleach",
    img: "/imagens/bleach.jpg",
  },
];
let manga = "";
for (let i = 0; i < bibliotecaMangas.length; i++) {
  manga +=
    "<li class='card'><a href=" +
    bibliotecaMangas[i].link +
    ">" +
    "<img src=" +
    bibliotecaMangas[i].img +
    "><p>" +
    bibliotecaMangas[i].nome +
    "</p></a></li>";
  let listaManga = document.getElementById("mangas");
  listaManga.innerHTML = manga;
}
