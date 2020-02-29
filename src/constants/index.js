export const sortingTypes = {
  BY_AUTHOR: 'BY_AUTHOR',
  BY_DATE: 'BY_DATE',
  BY_DEFAULT: 'BY_DEFAULT'
};
export const allPosts = [
  {
    id: 'fdsfs',
    authorName: 'Maria Negrych',
    data: '02/17/2020',
    mood: 'почувається натхненно',
    imgAuthor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime alias, saepe veniam delectus dolor vitae magnam nam vero possimus reprehenderit ab facilis est laboriosam culpa minus aliquid dolorem quam?',
    imgPost: undefined
  }, {
    id: 'frjegkhre',
    authorName: 'Maria Negrych',
    data: '02/13/2020',
    mood: 'почувається вмотивовано',
    imgAuthor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg',
    text: 'Spring is comming',
    imgPost: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg'
  }, {
    id: 'gfhvhdfhjd',
    authorName: 'Uncle Bob',
    data: '02/20/2020',
    mood: 'почувається вмотивовано',
    imgAuthor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg',
    text: 'Spring is comming',
    imgPost: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg'
  }, {
    id: 'frgregevfdhb',
    authorName: 'Iron Man',
    data: '01.10.2020',
    mood: 'почувається вмотивовано',
    imgAuthor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg',
    text: 'Spring is comming',
    imgPost: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Colorful_spring_garden.jpg/1200px-Colorful_spring_garden.jpg'
  }
];

// todo Используйте этот объект, чтоб положить его в AppConfigContext.Provider
export const allLinks = {
  admin: [
    {
      label: 'home'
    }, {
      label: 'posts'
    }, {
      label: 'users'
    }, {
      label: 'settings'
    }
  ],
  user: [
    {
      label: 'home'
    }, {
      label: 'posts'
    }
  ]
};
// todo Используйте этот объект, чтоб положить его в UserContext.Provider
export const user = {
  name: 'Iron',
  lastName: 'Man',
  age: 25,
  role: 'admin'
};