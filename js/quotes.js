const quotes = [
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Deathly Hallows",
  },
  {
    quote: "We are only as strong as we are united, as weak as we are divided.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Goblet of Fire",
  },
  {
    quote: "We’re with you whatever happens.",
    character: "Ron Weasley",
    from: "Harry Potter and the Half-Blood Prince",
  },
  {
    quote: "When in doubt, go to the library.",
    character: "Ron Weasley",
    from: "Harry Potter and the Chamber of Secrets",
  },
  {
    quote: "Fear of a name increases fear of the thing itself.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Sorcerer’s Stone",
  },
  {
    quote: "Time is Galleons, little brother",
    character: "Fred Weasley",
    from: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Chamber of Secrets",
  },
  {
    quote:
      "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Goblet of Fire",
  },
  {
    quote:
      "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Sorcerer’s Stone",
  },
  {
    quote: "Age is foolish and forgetful when it underestimates youth.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Half-Blood Prince",
  },
  {
    quote:
      "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    character: "Albus Dumbledore",
    from: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote:
      "The ones that love us never really leave us. You can always find them in here.",
    character: "Sirius Black",
    from: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote:
      "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
    character: "Sirius Black",
    from: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    character: "Luna Lovegood",
    from: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote:
      "Being different isn't a bad thing. It means you're brave enough to be yourself.",
    character: "Luna Lovegood",
    from: "Harry Potter and the Deathly Hallows",
  },
  {
    quote:
      "I think I'll just go down and have some pudding and wait for it all to turn up — it always does in the end.",
    character: "Luna Lovegood",
    from: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote: "I mean, it's sort of exciting, isn't it, breaking the rules?",
    character: "Hermione Granger",
    from: "Harry Potter and the Order of the Phoenix",
  },
];

const quote = document.querySelector("#quote span:first-child");
const character = document.querySelector("#quote span:nth-child(2)");
const from = document.querySelector("#quote span:nth-child(3)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`;
character.innerText = `-${todaysQuote.character}`;
from.innerText = `『${todaysQuote.from}』`;
