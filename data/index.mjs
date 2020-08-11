import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import take from 'lodash/take.js';
import reverse from 'lodash/reverse.js';

const data = {

  title: 'Cat Pea Records',
  description: 'Audio Books, Music, Poetry, Philosophy, and Info Graphics',

  motto: `We Make Homeschooling Work, So That You Don't Have To`,
  lede: `Give us three days per week and we'll give you Genius.`,

  domain: 'catpea.com',
  url: 'https://catpea.com',
  canonical: 'https://catpea.com/', // trailing slash required!


  things: ["Treatises", "Philosophy", "Poetry", "Inspirational Journals", "Travel Novels", "Human Rights Declarations", "Insightful Info-graphics", "Revolutionary Posters", "Detroit Techno", "Neo Classical", "Pop Rap Hop Pop", "Slash Bang"],

  books:[

    {
      title: 'Furkies Purrkies: Anthology of Inspirational Rhyme',
      category: "Poetry",
      author: 'Dr. Meow, Ph.D.',
      cover: 'img/cover-1.png',
      url: 'https://catpea.com/furkies-purrkies',
      recent: take(reverse(fs.readJsonSync('.src/poetry/dist/feed/feed.json').element),14),
    },

    {
      title: 'Book Of The Warrior',
      category: "Philosophy",
      author: 'Dr. Meow, Ph.D.',
      cover: 'img/cover-2.png',
      url: 'https://catpea.com/furkies-purrkies',
      data:[],
    },

    //
    // {
    //   title: 'Beyond Past And Present: The New Declaration Of Human Rights',
    //   category: "Philosophy",
    //   author: 'Dr. Meow, Ph.D.',
    //   cover: 'img/cover-2.png',
    //   url: 'https://catpea.com/furkies-purrkies',
    //   data:[],
    // },

  ]


}

// assets function (data) {
//   data.assets = [
//
//   ];
//
//   for(let book of data.books){
//
//     for(let element of book.recent){
//       data.assets.push({
//         directory: 'img'
//       })
//     }
//   }
// }

export default function () {
  //assets(data);

  return data;
}
