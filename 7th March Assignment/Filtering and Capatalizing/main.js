const books = [
    { title: 'The Hunger Games', author: 'suzanne collins', year: 2008 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'j.k. rowling', year: 2007 },
    { title: 'The Girl with the Dragon Tattoo', author: 'stieg larsson', year: 2005 },
    { title: 'The Help', author: 'kathryn stockett', year: 2009 },
    { title: 'The Kite Runner', author: 'khaled hosseini', year: 2003 },
    { title: 'The Da Vinci Code', author: 'dan brown', year: 2003 }
  ];
  
  const filteredBooks = books.filter(book => book.year <= 2010).map(book => {
    book.author = book.author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return book;
  });
  
  console.log(filteredBooks);
  