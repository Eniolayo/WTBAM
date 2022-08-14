const data = [
  {
    id: 1,
    question:
      "Which of the following blood component forms a plug at the site of injuries?",
    answers: [
      {
        text: "Platelets",
        correct: true,
      },
      {
        text: "Red blood cells",
        correct: false,
      },
      {
        text: "White blood cells",
        correct: false,
      },
      {
        text: "Blood plasma",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What is the French word for &quot;fish&quot;?",
    answers: [
      {
        text: "poisson",
        correct: true,
      },
      {
        text: "escargot",
        correct: false,
      },
      {
        text: "mer",
        correct: false,
      },
      {
        text: "fiche",
        correct: false,
      },
    ],
  },

  {
    id: 3,
    question: "What is the Capital of the United States?",
    answers: [
      {
        text: "Los Angelas, CA",
        correct: false,
      },
      {
        text: "New York City, NY",
        correct: false,
      },
      {
        text: "Houston, TX",
        correct: false,
      },
      {
        text: "Washington, D.C.",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question:
      "Who created the Cartoon Network series &quot;Regular Show&quot;?",
    answers: [
      {
        text: "Ben Bocquelet",
        correct: false,
      },
      {
        text: "Pendleton Ward",
        correct: false,
      },
      {
        text: "Rebecca Sugar",
        correct: false,
      },
      {
        text: "J. G. Quintel",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "This mobile OS held the largest market share in 2012.",
    answers: [
      {
        text: "Android",
        correct: false,
      },
      {
        text: "BlackBerry",
        correct: false,
      },
      {
        text: "Symbian",
        correct: false,
      },
      {
        text: "iOS",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question:
      "What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?",
    answers: [
      {
        text: "Spice Road",
        correct: false,
      },
      {
        text: "Clay Road",
        correct: false,
      },
      {
        text: "Salt Road",
        correct: false,
      },
      {
        text: "Silk Road",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: "Which player holds the NHL record of 2,857 points?",
    answers: [
      {
        text: "Mario Lemieux ",
        correct: false,
      },
      {
        text: "Sidney Crosby",
        correct: false,
      },
      {
        text: "Gordie Howe",
        correct: false,
      },
      {
        text: "Wayne Gretzky",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "Which Nintendo 64 game did NOT have Luigi in it?",
    answers: [
      {
        text: "Mario Party 2",
        correct: false,
      },
      {
        text: "Paper Mario",
        correct: false,
      },
      {
        text: "Super Smash Bros.",
        correct: false,
      },
      {
        text: "Super Mario 64",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question:
      "What is the name of a popular franchise that includes placing blocks down and surviving in an open world? ",
    answers: [
      {
        text: "Unturned",
        correct: false,
      },
      {
        text: "Roblox",
        correct: false,
      },
      {
        text: "Grand Theft Auto V",
        correct: false,
      },
      {
        text: "Minecraft",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "What is the fastest road legal car in the world?",
    answers: [
      {
        text: "Hennessy Venom GT",
        correct: false,
      },
      {
        text: "Bugatti Veyron Super Sport",
        correct: false,
      },
      {
        text: "Pagani Huayra BC",
        correct: false,
      },
      {
        text: "Koenigsegg Agera RS",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question:
      "Which of these is NOT a catchphrase used by Rick Sanchez in the TV show &quot;Rick and Morty&quot;?",
    answers: [
      {
        text: "Hit the sack, Jack!",
        correct: false,
      },
      {
        text: "Rikki-Tikki-Tavi, biatch!",
        correct: false,
      },
      {
        text: "Wubba-lubba-dub-dub!",
        correct: false,
      },
      {
        text: "Slam dunk, nothing but net!",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question:
      "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
    answers: [
      {
        text: "Dorians",
        correct: false,
      },
      {
        text: "Achaeans",
        correct: false,
      },
      {
        text: "Ionians",
        correct: false,
      },
      {
        text: "Illyrians",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question: "What is the name of the corgi in Cowboy Bebop?",
    answers: [
      {
        text: "Edward",
        correct: false,
      },
      {
        text: "Rocket",
        correct: false,
      },
      {
        text: "Joel",
        correct: false,
      },
      {
        text: "Einstein",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question:
      "Which buzzword did Apple Inc. use to describe their removal of the headphone jack?",
    answers: [
      {
        text: "Innovation",
        correct: false,
      },
      {
        text: "Revolution",
        correct: false,
      },
      {
        text: "Bravery",
        correct: false,
      },
      {
        text: "Courage",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "What was the cause of Marilyn Monroes suicide?",
    answers: [
      {
        text: "Knife Attack",
        correct: false,
      },
      {
        text: "House Fire",
        correct: false,
      },
      {
        text: "Gunshot",
        correct: false,
      },
      {
        text: "Drug Overdose",
        correct: true,
      },
    ],
  },
  {
    id: 16,
    question:
      "Sting, the lead vocalist of The Police, primarily plays what instrument?",
    answers: [
      {
        text: "Drums",
        correct: false,
      },
      {
        text: "Guitar",
        correct: false,
      },
      {
        text: "Keyboards",
        correct: false,
      },
      {
        text: "Bass Guitar",
        correct: true,
      },
    ],
  },
  {
    id: 17,
    question:
      "The board game Monopoly takes its street names from which real American city?",
    answers: [
      {
        text: "Las Vegas, Nevada",
        correct: false,
      },
      {
        text: "Duluth, Minnesota",
        correct: false,
      },
      {
        text: "Charleston, South Carolina",
        correct: false,
      },
      {
        text: "Atlantic City, New Jersey",
        correct: true,
      },
    ],
  },
  {
    id: 18,
    question:
      "Which of the following characters is NOT a female marriage candidate in the game Stardew Valley?",
    answers: [
      {
        text: "Abigail",
        correct: false,
      },
      {
        text: "Haley",
        correct: false,
      },
      {
        text: "Leah",
        correct: false,
      },
      {
        text: "Caroline",
        correct: true,
      },
    ],
  },
  {
    id: 19,
    question:
      "Which of the following Elite Four members from the 6th Generation of Pok&eacute;mon was a member of Team Flare?",
    answers: [
      {
        text: "Siebold",
        correct: false,
      },
      {
        text: "Wikstrom",
        correct: false,
      },
      {
        text: "Drasna",
        correct: false,
      },
      {
        text: "Malva",
        correct: true,
      },
    ],
  },
  {
    id: 20,
    question:
      "The 2016 Disney animated film &#039;Moana&#039; is based on which culture?",
    answers: [
      {
        text: "Native American",
        correct: false,
      },
      {
        text: "Japanese",
        correct: false,
      },
      {
        text: "Nordic",
        correct: false,
      },
      {
        text: "Polynesian",
        correct: true,
      },
    ],
  },
  {
    id: 21,
    question:
      "&quot;Minecraft&quot; was released from beta in 2011 during a convention held in which city?",
    answers: [
      {
        text: "Paris",
        correct: false,
      },
      {
        text: "Bellevue",
        correct: false,
      },
      {
        text: "London",
        correct: false,
      },
      {
        text: "Las Vegas",
        correct: true,
      },
    ],
  },
  {
    id: 22,
    question:
      "The &quot;British Invasion&quot; was a cultural phenomenon in music where British boy bands became popular in the USA in what decade?",
    answers: [
      {
        text: "50&#039;s",
        correct: false,
      },
      {
        text: "40&#039;s",
        correct: false,
      },
      {
        text: "30&#039;s",
        correct: false,
      },
      {
        text: "60&#039;s",
        correct: true,
      },
    ],
  },
  {
    id: 23,
    question: "Which of these Elements is a metalloid?",
    answers: [
      {
        text: "Tin",
        correct: false,
      },
      {
        text: "Bromine",
        correct: false,
      },
      {
        text: "Rubidium",
        correct: false,
      },
      {
        text: "Antimony",
        correct: true,
      },
    ],
  },
  {
    id: 24,
    question: "Who was the villain of &#039;&#039;The Lion King&#039;&#039;?",
    answers: [
      {
        text: "Fred",
        correct: false,
      },
      {
        text: "Jafar",
        correct: false,
      },
      {
        text: "Vada",
        correct: false,
      },
      {
        text: "Scar",
        correct: true,
      },
    ],
  },
  {
    id: 25,
    question: "Who wrote &quot;Harry Potter&quot;?",
    answers: [
      {
        text: "J.R.R. Tolkien",
        correct: false,
      },
      {
        text: "J.K. Rowling",
        correct: true,
      },
      {
        text: "Terry Pratchett",
        correct: false,
      },
      {
        text: "Daniel Radcliffe",
        correct: false,
      },
    ],
  },
  {
    id: 26,
    question:
      "In the TV show &quot;Cheers&quot;, Sam Malone was a former relief pitcher for which baseball team?",
    answers: [
      {
        text: "New York Mets",
        correct: false,
      },
      {
        text: "Boston Red Sox",
        correct: true,
      },
      {
        text: "Baltimore Orioles",
        correct: false,
      },
      {
        text: "Milwaukee Brewers",
        correct: false,
      },
    ],
  },
  {
    id: 27,
    question:
      "In a standard game of Monopoly, what colour are the two cheapest properties?",
    answers: [
      {
        text: "Green",
        correct: false,
      },
      {
        text: "Yellow",
        correct: false,
      },
      {
        text: "Blue",
        correct: false,
      },
      {
        text: "Brown",
        correct: true,
      },
    ],
  },
  {
    id: 28,
    question:
      "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    answers: [
      {
        text: "Microsoft",
        correct: false,
      },
      {
        text: "Atari",
        correct: false,
      },
      {
        text: "Commodore",
        correct: false,
      },
      {
        text: "Apple",
        correct: true,
      },
    ],
  },
  {
    id: 29,
    question:
      "Which character was played by Dustin Diamond in the sitcom &#039;Saved by the Bell&#039;?",
    answers: [
      {
        text: "Zack",
        correct: false,
      },
      {
        text: "Mr. Belding",
        correct: false,
      },
      {
        text: "A.C. Slater",
        correct: false,
      },
      {
        text: "Screech",
        correct: true,
      },
    ],
  },
  {
    id: 30,
    question:
      "Which Canadian reggae musician had a 1993 hit with the song &#039;Informer&#039;?",
    answers: [
      {
        text: "Rain",
        correct: false,
      },
      {
        text: "Hail",
        correct: false,
      },
      {
        text: "Snow",
        correct: true,
      },
      {
        text: "Sleet",
        correct: false,
      },
    ],
  },
  {
    id: 31,
    question:
      "In the  Rossini opera, what was the name of &#039;The Barber of Seville&#039;?",
    answers: [
      {
        text: "Cheetah",
        correct: true,
      },
      {
        text: "Angelo",
        correct: false,
      },
      {
        text: "Thomson&rsquo;s Gazelle",
        correct: false,
      },
      {
        text: "Pronghorn Antelope",
        correct: false,
      },
    ],
  },
  {
    id: 32,
    question: "How many dice are used in the game of Yahtzee?",
    answers: [
      {
        text: "Five",
        correct: true,
      },
      {
        text: "Four",
        correct: false,
      },
      {
        text: "Six",
        correct: false,
      },
      {
        text: "Eight",
        correct: false,
      },
    ],
  },
  {
    id: 33,
    question: "Ringo Starr of The Beatles mainly played what instrument?",
    answers: [
      {
        text: "Drums",
        correct: true,
      },
      {
        text: "Bass",
        correct: false,
      },
      {
        text: "Guitar",
        correct: false,
      },
      {
        text: "Piano",
        correct: false,
      },
    ],
  },
  {
    id: 34,
    question: "What is the scientific name for modern day humans?",
    answers: [
      {
        text: "Homo Sapiens",
        correct: true,
      },
      {
        text: "Homo Ergaster",
        correct: false,
      },
      {
        text: "Homo Erectus",
        correct: false,
      },
      {
        text: "Homo Neanderthalensis",
        correct: false,
      },
    ],
  },
  {
    id: 35,
    question: "In what year did the Wall Street Crash take place?",
    answers: [
      {
        text: "1929",
        correct: true,
      },
      {
        text: "1932",
        correct: false,
      },
      {
        text: "1930",
        correct: false,
      },
      {
        text: "1925",
        correct: false,
      },
    ],
  },
  {
    id: 36,
    question: "What was the name of the cancelled sequel of Team Fortress?",
    answers: [
      {
        text: "Team Fortress 2: Brotherhood of Arms",
        correct: true,
      },
      {
        text: "Team Fortress 2: Desert Mercenaries",
        correct: false,
      },
      {
        text: "Team Fortress 2: Operation Gear Grinder",
        correct: false,
      },
      {
        text: "Team Fortress 2: Return to Classic",
        correct: false,
      },
    ],
  },
  {
    id: 37,
    question: "Which sign of the zodiac is represented by the Crab?",
    answers: [
      {
        text: "Cancer",
        correct: true,
      },
      {
        text: "Sagittarius",
        correct: false,
      },
      {
        text: "Virgo",
        correct: false,
      },
      {
        text: "Libra",
        correct: false,
      },
    ],
  },
  {
    id: 38,
    question:
      "How many pieces are there on the board at the start of a game of chess?",
    answers: [
      {
        text: "32",
        correct: true,
      },
      {
        text: "36",
        correct: false,
      },
      {
        text: "20",
        correct: false,
      },
      {
        text: "16",
        correct: false,
      },
    ],
  },
  {
    id: 39,
    question: "What&#039;s the square root of 49?",
    answers: [
      {
        text: "7",
        correct: true,
      },
      {
        text: "9",
        correct: false,
      },
      {
        text: "12",
        correct: false,
      },
      {
        text: "4",
        correct: false,
      },
    ],
  },
  {
    id: 40,
    question:
      "Which of the following African countries was most successful in resisting colonization?",
    answers: [
      {
        text: "Ethiopia",
        correct: true,
      },
      {
        text: "C&ocirc;te d&rsquo;Ivoire",
        correct: false,
      },
      {
        text: "Congo",
        correct: false,
      },
      {
        text: "Namibia",
        correct: false,
      },
    ],
  },
  {
    id: 41,
    question:
      "The original Roman alphabet lacked the following letters EXCEPT:",
    answers: [
      {
        text: "X",
        correct: true,
      },
      {
        text: "U",
        correct: false,
      },
      {
        text: "J",
        correct: false,
      },
      {
        text: "W",
        correct: false,
      },
    ],
  },
  {
    id: 42,
    question: "What was the first James Bond film?",
    answers: [
      {
        text: "Dr. No",
        correct: true,
      },
      {
        text: "Goldfinger",
        correct: false,
      },
      {
        text: "From Russia With Love",
        correct: false,
      },
      {
        text: "Thunderball",
        correct: false,
      },
    ],
  },
  {
    id: 43,
    question: "How many time zones does China have?",
    answers: [
      {
        text: "1",
        correct: true,
      },
      {
        text: "3",
        correct: false,
      },
      {
        text: "4",
        correct: false,
      },
      {
        text: "2",
        correct: false,
      },
    ],
  },
  {
    id: 44,
    question: "In what year was the game &quot;Fallout&quot; released?",
    answers: [
      {
        text: "1997",
        correct: true,
      },
      {
        text: "1999",
        correct: false,
      },
      {
        text: "1998",
        correct: false,
      },
      {
        text: "2000",
        correct: false,
      },
    ],
  },
  {
    id: 45,
    question:
      "In the &quot;Worms&quot; series of video games, which of these weapons is affected by wind?",
    answers: [
      {
        text: "Bazooka",
        correct: true,
      },
      {
        text: "Grenade",
        correct: false,
      },
      {
        text: "Air Strike",
        correct: false,
      },
      {
        text: "Mortar",
        correct: false,
      },
    ],
  },
  {
    id: 46,
    question:
      "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
    answers: [
      {
        text: "Qatar",
        correct: true,
      },
      {
        text: "Kuwait",
        correct: false,
      },
      {
        text: "United Arab Emirates",
        correct: false,
      },
      {
        text: "Jordan",
        correct: false,
      },
    ],
  },
  {
    id: 47,
    question: "How many seasons did &quot;Stargate SG-1&quot; have?",
    answers: [
      {
        text: "10",
        correct: true,
      },
      {
        text: "3",
        correct: false,
      },
      {
        text: "7",
        correct: false,
      },
      {
        text: "12",
        correct: false,
      },
    ],
  },
  {
    id: 48,
    question: "Who is the leader of Team Instinct in Pok&eacute;mon Go?",
    answers: [
      {
        text: "Spark",
        correct: true,
      },
      {
        text: "Blanche",
        correct: false,
      },
      {
        text: "Willow",
        correct: false,
      },
      {
        text: "Candela",
        correct: false,
      },
    ],
  },
  {
    id: 49,
    question:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?",
    answers: [
      {
        text: "Fluffy",
        correct: true,
      },
      {
        text: "Spike",
        correct: false,
      },
      {
        text: "Poofy",
        correct: false,
      },
      {
        text: "Spot",
        correct: false,
      },
    ],
  },
  {
    id: 50,
    question: "Which 80s band is fronted by singer/guitarist Robert Smith?",
    answers: [
      {
        text: "The Cure",
        correct: true,
      },
      {
        text: "The Smiths",
        correct: false,
      },
      {
        text: "Echo &amp; the Bunnymen",
        correct: false,
      },
      {
        text: "New Order",
        correct: false,
      },
    ],
  },
  {
    id: 51,
    question: "What is the standard atomic weight of a Plutonium nucleus?",
    answers: [
      {
        text: "244",
        correct: true,
      },
      {
        text: "94",
        correct: false,
      },
      {
        text: "481",
        correct: false,
      },
      {
        text: "128",
        correct: false,
      },
    ],
  },
  {
    id: 52,
    question:
      "Which show is known for the songs &quot;You are a Pirate&quot;, &quot;Cooking by the Book&quot; and &quot;We Are Number One&quot;?",
    answers: [
      {
        text: "LazyTown",
        correct: true,
      },
      {
        text: "Sofia the First",
        correct: false,
      },
      {
        text: "DuckTales",
        correct: false,
      },
      {
        text: "Tom and Jerry",
        correct: false,
      },
    ],
  },
  {
    id: 53,
    question:
      "In 1939, Britain and France declared war on Germany after it invaded which country?",
    answers: [
      {
        text: "Poland",
        correct: true,
      },
      {
        text: "Czechoslovakia",
        correct: false,
      },
      {
        text: "Austria",
        correct: false,
      },
      {
        text: "Hungary",
        correct: false,
      },
    ],
  },
  {
    id: 54,
    question: "When was Gangnam Style uploaded to YouTube?",
    answers: [
      {
        text: "2012",
        correct: true,
      },
      {
        text: "2013",
        correct: false,
      },
      {
        text: "2011",
        correct: false,
      },
      {
        text: "2009",
        correct: false,
      },
    ],
  },
  {
    id: 55,
    question: "What is the name of Nissan&#039;s most popular electric car?",
    answers: [
      {
        text: "Tree",
        correct: true,
      },
      {
        text: "Deer",
        correct: false,
      },
      {
        text: "Roots",
        correct: false,
      },
      {
        text: "Leaf",
        correct: false,
      },
    ],
  },
  {
    id: 56,
    question: "What is the name of Sherlock Holmes&#039;s brother?",
    answers: [
      {
        text: "Mederi Holmes",
        correct: true,
      },
      {
        text: "Martin Holmes",
        correct: false,
      },
      {
        text: "Herbie Hancock Holmes",
        correct: false,
      },
      {
        text: "Mycroft Holmes",
        correct: false,
      },
    ],
  },
  {
    id: 57,
    question:
      "Which classical composer wrote the &quot;Moonlight Sonata&quot;?",
    answers: [
      {
        text: "Wolfgang Amadeus Mozart",
        correct: false,
      },
      {
        text: "Chief Keef",
        correct: false,
      },
      {
        text: "Johannes Brahms",
        correct: false,
      },
      {
        text: "Ludvig Van Beethoven",
        correct: true,
      },
    ],
  },
  {
    id: 58,
    question:
      "Former United States President Bill Clinton famously played which instrument?",
    answers: [
      {
        text: "Baritone horn",
        correct: false,
      },
      {
        text: "Saxophone",
        correct: true,
      },

      {
        text: "Piano",
        correct: false,
      },
      {
        text: "Violin",
        correct: false,
      },
    ],
  },
  {
    id: 59,
    question: "What mythology did the god &quot;Apollo&quot; come from?",
    answers: [
      {
        text: "Roman and Spanish",
        correct: false,
      },
      {
        text: "Greek and Chinese",
        correct: false,
      },
      {
        text: "Greek and Roman",
        correct: true,
      },
      {
        text: "Greek, Roman and Norse",
        correct: false,
      },
    ],
  },
  {
    id: 60,
    question:
      "What is the last name of the primary female protagonist of Final Fantasy VIII?",
    answers: [
      {
        text: "Heartilly",
        correct: true,
      },
      {
        text: "Loire",
        correct: false,
      },
      {
        text: "Almasy",
        correct: false,
      },
      {
        text: "Trepe",
        correct: false,
      },
    ],
  },
  {
    id: 61,
    question:
      "The main six year old protagonist in Calvin and Hobbes is named after what theologian?",
    answers: [
      {
        text: "John Calvin",
        correct: true,
      },
      {
        text: "Calvin Klein",
        correct: false,
      },
      {
        text: "Calvin Coolidge",
        correct: false,
      },
      {
        text: "Phillip Calvin McGraw",
        correct: false,
      },
    ],
  },
  {
    id: 62,
    question: "In which fast food chain can you order a Jamocha Shake?",
    answers: [
      {
        text: "Arby&#039;s",
        correct: true,
      },
      {
        text: "McDonald&#039;s",
        correct: false,
      },
      {
        text: "Burger King",
        correct: false,
      },
      {
        text: "Wendy&#039;s",
        correct: false,
      },
    ],
  },
  {
    id: 63,
    question:
      "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    answers: [
      {
        text: "SCP-173",
        correct: true,
      },
      {
        text: "SCP-001",
        correct: false,
      },
      {
        text: "SCP-999",
        correct: false,
      },
      {
        text: "SCP-1459",
        correct: false,
      },
    ],
  },
  {
    id: 64,
    question: "What zodiac sign is represented by a pair of scales?",
    answers: [
      {
        text: "Libra",
        correct: true,
      },
      {
        text: "Aries",
        correct: false,
      },
      {
        text: "Capricorn",
        correct: false,
      },
      {
        text: "Sagittarius",
        correct: false,
      },
    ],
  },
  {
    id: 65,
    question: "In &quot;ALF&quot;, what was ALF&#039;s real name?",
    answers: [
      {
        text: "Gordon von Gam",
        correct: true,
      },
      {
        text: "Gordon Milipp",
        correct: false,
      },
      {
        text: "Gordon Foster",
        correct: false,
      },
      {
        text: "Gordon von Gam",
        correct: false,
      },
    ],
  },
  {
    id: 66,
    question: "The Los Angeles Dodgers were originally from what U.S. city?",
    answers: [
      {
        text: "Las Vegas",
        correct: false,
      },
      {
        text: "Brooklyn",
        correct: true,
      },
      {
        text: "Boston",
        correct: false,
      },
      {
        text: "Seattle",
        correct: false,
      },
    ],
  },
  {
    id: 67,
    question:
      "Which member of the Velvet Room is not a playable character in Persona 4 Arena Ultimax?",
    answers: [
      {
        text: "Elizabeth",
        correct: false,
      },
      {
        text: "Margaret",
        correct: false,
      },
      {
        text: "Theodore",
        correct: true,
      },
      {
        text: "Marie",
        correct: false,
      },
    ],
  },
  {
    id: 68,
    question: "Who won the 2017 Formula One World Drivers&#039; Championship?",
    answers: [
      {
        text: "Max Verstappen",
        correct: false,
      },
      {
        text: "Lewis Hamilton",
        correct: true,
      },
      {
        text: "Max Verstappen",
        correct: false,
      },
      {
        text: "Sebastian Vettel",
        correct: false,
      },
    ],
  },
  {
    id: 69,
    question:
      "Who is the last boss in Night In The Woods&#039; Demontower minigame?",
    answers: [
      {
        text: "The Blood Thief",
        correct: true,
      },
      {
        text: "Mega Hairball ",
        correct: false,
      },
      {
        text: "King Skellie ",
        correct: false,
      },
      {
        text: "Krampus ",
        correct: false,
      },
    ],
  },
  {
    id: 70,
    question: "In &quot;Homestuck&quot; what is Dave Strider&#039;s guardian?",
    answers: [
      {
        text: "Becquerel",
        correct: false,
      },
      {
        text: "Doc Scratch",
        correct: false,
      },
      {
        text: "Halley",
        correct: false,
      },
      {
        text: "Bro",
        correct: true,
      },
    ],
  },
];
export default data;
