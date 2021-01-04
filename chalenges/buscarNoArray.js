const biblioteca = [
  {
    category: "Ruiqueza",
    books: [
      {
        title: "Os segredos da mente milionaria",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico Pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter ",
      },
     
    ],
  },
  {
    category: "Inteligencia emocional",
    books: [
      {
        title: "Você é insubstituivel",
        author: "Augusto cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mau do século ",
        author: "Augusto cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
      {
         title: "Os 7 hábitos das pessoas altamente eficazes",
         author: "Stephen R. Covey",
       },
    ],
  },
];


const category = categories =>
  console.log(`O numero de categorias da biblioteca é: ${categories.length} categorias`);

const booksByCategory = books =>
  books.map(el =>
    console.log(`O numero de livros da categoria ${el.category}: ${el.books.length} livros`)
  );

const authoresByBooks = books =>
  books.map((el) => console.log(`O numero de autores da categoria ${el.category}: ${el.books.length} autores`));

category(biblioteca);

booksByCategory(biblioteca);

authoresByBooks(biblioteca)

