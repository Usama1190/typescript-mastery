// TypeScript Home Work Assignments
const library = [
    { title: 'OOlika', author: 'M.G John', yearPublished: 1990 },
    { title: 'PPlaghs', author: 'K.L Alice', yearPublished: 1991 },
    { title: 'ppomer', author: 'M.I Udda', yearPublished: 1992 },
    { title: 'dyiuys', author: 'M.K Pony', yearPublished: 1993 },
    { title: 'sfoias', author: 'U Britol', yearPublished: 1994 },
    { title: 'jhjyuys', author: 'Danny', yearPublished: 1995 },
    { title: 'oioto', author: 'K.L Marley', yearPublished: 1996 },
    { title: 'paodps', author: 'Sidn', yearPublished: 1997 },
    { title: 'jfhit', author: 'Kinny', yearPublished: 1998 },
    { title: 'ryiot', author: 'I Munaaj', yearPublished: 1999 },
    { title: 'opoplhj', author: 'P Lilly', yearPublished: 2000 },
    { title: 'bmkfjhk', author: 'V.K Jonny', yearPublished: 2001 },
    { title: 'awjhjdf', author: 'Wisk', yearPublished: 2002 },
    { title: 'pooiew', author: 'Qussl', yearPublished: 2003 },
    { title: 'mnbdgh', author: 'Orale', yearPublished: 2004 },
    { title: 'qwrdr', author: 'Pliij', yearPublished: 2005 },
    { title: 'opjkue', author: 'S Bolla', yearPublished: 2006 },
    { title: 'vbfds', author: 'C Viki', yearPublished: 2007 },
];
function filterArrar(author) {
    return library.filter(book => book.author === author);
}
const returnValue = filterArrar('Danny');
console.log(returnValue);
export {};
