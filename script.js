let myObjectArr = [
    {
        "name":"Max",
        "is_a_good_guy": true 
    },
    {
        "name":"Peter",
        "is_a_good_guy": false 
    },
    {
        "name":"Arnold",
        "is_a_good_guy": true 
    },
    {
        "name":"Justus",
        "is_a_good_guy": true 
    },
    {
        "name":"Bombur",
        "is_a_good_guy": false 
    }
];

let library = {
    "info": {
      "name": "Stadtbibliothek",
      "location": {
        "city": "Musterstadt",
        "coordinates": { "lat": 48.1351, "lon": 11.582 }
      }
    },
    "sections": {
      "fiction": [
        {
          "shelf": 1,
          "book": {
            "title": "Die Verwandlung",
            "author": {
              "name": "Franz Kafka",
              "born": "1883-07-03",
              "died": "1924-06-03"
            },
            "year": 1915,
            "status": "ausgeliehen"
          }
        },
        {
          "shelf": 2,
          "book": {
            "title": "1984",
            "author": {
              "name": "George Orwell",
              "born": "1903-06-25",
              "died": "1950-01-21"
            },
            "year": 1949,
            "status": "verfügbar"
          }
        }
      ],
      "nonFiction": [
        {
          "shelf": 3,
          "book": {
            "title": "Eine kurze Geschichte der Zeit",
            "author": {
              "name": "Stephen Hawking",
              "born": "1942-01-08",
              "died": "2018-03-14"
            },
            "year": 1988,
            "status": "verfügbar"
          }
        }
      ]
    }
  }

  console.log(library.sections.fiction[1].book.title);

  for (let index = 0; index < library.sections.fiction.length; index++) {
    const element = library.sections.fiction[index].book.title;
    console.log(element);
    
  }
  


