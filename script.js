let bibliotecaMangas = [
  {
    link: "https://mangalivre.net/manga/jujutsu-kaisen/7178",
    nome: "Jujutsu Kainsen",
    img: "/imagens/jujutsu-kainsen.jpg",
  },
  {
    link: "https://mangalivre.net/manga/boku-no-hero-academia/1319",
    nome: "Boku no Hero Academy",
    img: "/imagens/boku-no-hero.jpg",
  },

  {
    link: "https://mangalivre.net/manga/shingeki-no-kyojin/210",
    nome: "Shingeki no Kyojin",
    img: "/imagens/shingeki-no-kyojin.jpg",
  },
  {
    link: "https://mangalivre.net/manga/kimetsu-no-yaiba/3364",
    nome: "Kimetsu no Yaiba",
    img: "/imagens/kimetsu-no-yaiba.jpg",
  },
  {
    link: "https://mangalivre.net/manga/one-piece/13",
    nome: "One Piece",
    img: "/imagens/one-piece.jpg",
  },

  {
    link: "https://mangalivre.net/manga/one-punch-man/1036",
    nome: "One Punch Man",
    img: "/imagens/one-punch-man.jpg",
  },
  {
    link: "https://mangalivre.net/manga/naruto/1",
    nome: "Naruto",
    img: "/imagens/naruto.jpg",
  },
  {
    link: "https://mangalivre.net/manga/bleach/2",
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
