/* Random number generator. Used with range specified below. */
function rando(min, max) {
	return (Math.floor(Math.random() * (max - min + 1)) + min);
}
/* The object list of quotations and authors */
var list = {
	0: {
		quotation: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
		author: "	Antoine de Saint"
	},
	1: {
		quotation: "A flatterer is a friend who is your inferior, or pretends to be so.",
		author: "Aristotle"
	},
	2: {
		quotation: "A penny saved is a penny earned.",
		author: "Benjamin Franklin"
	},
	3: {
		quotation: "All human actions have one or more of these seven causes: chance, nature, compulsion, habit, reason, passion, and desire.",
		author: "Aristotle"
	},
	4: {
		quotation: "All paid jobs absorb and degrade the mind.",
		author: "Aristotle"
	},
	5: {
		quotation: "Any society that would give up a little liberty to gain a little security will deserve neither and lose both.",
		author: "Benjamin Franklin"
	},
	6: {
		quotation: "Banking establishments are more dangerous than standing armies.",
		author: "Thomas Jefferson"
	},
	7: {
		quotation: "Be careful when you fight the monsters, lest you become one.",
		author: "Friedrich Nietzsche"
	},
	8: {
		quotation: "Corporation, n. An ingenious device for obtaining individual profit without individual responsibility.",
		author: "Ambrose Bierce"
	},
	9: {
		quotation: "Dreams come true. Without that possibility, nature would not incite us to have them.",
		author: "John Updike"
	},
	10: {
		quotation: "Everything has its beauty but not everyone sees it.",
		author: "Confucius"
	},
	11: {
		quotation: "Give a man a fish and you feed him for a day. Teach a man how to fish and you feed him for a lifetime.",
		author: "Lao Tzu"
	},
	12: {
		quotation: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
		author: "Albert Einstein"
	},
	13: {
		quotation: "Happiness is when what you think, what you say, and what you do are in harmony.",
		author: "Mahatma Gandhi"
	},
	14: {
		quotation: "I count him braver who overcomes his desires than him who conquers his enemies; for the hardest victory is over self.",
		author: "Aristotle"
	},
	15: {
		quotation: "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
		author: "Galileo Galilei"
	},
	16: {
		quotation: "I don't know who my grandfather was; I am much more concerned to know who his grandson will be.",
		author: "Abraham Lincoln"
	},
	17: {
		quotation: "I have no special talents. I am only passionately curious.",
		author: "Albert Einstein"
	},
	18: {
		quotation: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
		author: "Albert Einstein"
	},
	19: {
		quotation: "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
		author: "Albert Einstein"
	},
	20: {
		quotation: "If in other sciences we should arrive at certainty without doubt and truth without error, it behooves us to place the foundations of knowledge in mathematics.",
		author: "Roger Bacon"
	},
	21: {
		quotation: "If you chase two rabbits, you will lose them both.",
		author: "Native American Saying"
	},
	22: {
		quotation: "I'm a slow walker, but I never walk back.",
		author: "Abraham Lincoln"
	},
	23: {
		quotation: "It does not matter how slowly you go so long as you do not stop.",
		author: "Confucius"
	},
	24: {
		quotation: "It is not the strongest of the species that survive, but the one most responsive to change.",
		author: "Charles Darwin"
	},
	25: {
		quotation: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
		author: "Aristotle"
	},
	26: {
		quotation: "Life is like riding a bicycle. To keep your balance you must keep moving.",
		author: "Albert Einstein"
	},
	27: {
		quotation: "Love is the triumph of imagination over intelligence.",
		author: "H. L. Mencken"
	},
	28: {
		quotation: "Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back.",
		author: "Buddha"
	},
	29: {
		quotation: "Science is a way of thinking much more than it is a body of knowledge.",
		author: "Carl Sagan"
	},
	30: {
		quotation: "Never trust a computer you can’t throw out a window.",
		author: "Steve Wozniak"
	},
	31: {
		quotation: "Obstacles are those frightful things you see when you take your eyes off the goal.",
		author: "Henry Ford"
	},
	32: {
		quotation: "One doesn’t discover new lands without losing sight of the shore.",
		author: "Andre Gide"
	},
	33: {
		quotation: "A casual stroll through the lunatic asylum shows that faith does not prove anything.",
		author: "Friedrich Nietzsche"
	},
	34: {
		quotation: "Only the educated are free.",
		author: "Epictetus"
	},
	35: {
		quotation: "People can have the Model T in any color – so long as it’s black.",
		author: "Henry Ford"
	},
	36: {
		quotation: "Plausible impossibilities should be preferred to unconvincing possibilities.",
		author: "Aristotle"
	},
	37: {
		quotation: "Politics is more difficult than physics.",
		author: "Albert Einstein"
	},
	38: {
		quotation: "Some books are to be tasted, others to be swallowed, and some to be chewed and digested.",
		author: "Sir Francis Bacon"
	},
	39: {
		quotation: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
		author: "Bill Watterson"
	},
	40: {
		quotation: "Strength does not come from physical capacity. It comes from an indomitable will.",
		author: "Mahatma Gandhi"
	},
	41: {
		quotation: "Study the past if you would define the future.",
		author: "Confucius"
	},
	42: {
		quotation: "The bureaucracy is expanding to meet the needs of the expanding bureaucracy.",
		author: "Unknown"
	},
	43: {
		quotation: "The Earth is the cradle of the mind, but one cannot eternally live in a cradle.",
		author: "Konstantin E. Tsiolkovsky"
	},
	44: {
		quotation: 'It does seem you have no useful skill or talent whatsoever... Have you thought of going into teaching?',
		author: "Terry Pratchett, Mort"
	},
	45: {
		quotation: "The life which is unexamined is not worth living.",
		author: "Socrates"
	},
	46: {
		quotation: "The man who moves a mountain begins by carrying away small stones.",
		author: "Confucius"
	},
	47: {
		quotation: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
		author: "Carl Jung"
	},
	48: {
		quotation: "The only thing worse than being talked about is not being talked about.",
		author: "Oscar Wilde"
	},
	49: {
		quotation: "The things that one most wants to do are the things that are probably most worth doing.",
		author: "Winifred Holtby"
	},
	50: {
		quotation: "The wisest men follow their own direction.",
		author: "Euripides"
	},
	51: {
		quotation: "A painter paints pictures on canvas. But musicians paint their pictures on silence.",
		author: "Leopold Stokowski"
	},
	52: {
		quotation: "Music washes away from the soul the dust of everyday life.",
		author: "Berthold Auerbach"
	},
	53: {
		quotation: "All deep things are song. It seems somehow the very central essence of us, song; as if all the rest were but wrappages and hulls!",
		author: "Thomas Carlyle"
	},
	54: {
		quotation: "If the King loves music, it is well with the land.",
		author: "Mencius"
	},
	55: {
		quotation: "Without music life would be a mistake.",
		author: "Friedrich Nietzsche"
	},
	56: {
		quotation: "Take a music bath once or twice a week for a few seasons. You will find it is to the soul what a water bath is to the body.",
		author: "Oliver Wendell Holmes"
	},
	57: {
		quotation: "If a composer could say what he had to say in words he would not bother trying to say it in music.",
		author: "Gustav Mahler"
	},
	58: {
		quotation: "Why waste money on psychotherapy when you can listen to the B Minor Mass?",
		author: "Michael Torke"
	},
	59: {
		quotation: "He who sings scares away his woes.",
		author: "Cervantes"
	},
	60: {
		quotation: "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.",
		author: "Maya Angelou, Gather Together in My Name"
	},
	61: {
		quotation: "Were it not for music, we might in these days say, the Beautiful is dead.",
		author: "Benjamin Disraeli"
	},
	62: {
		quotation: "Music is what feelings sound like.",
		author: "Author Unknown"
	},
	63: {
		quotation: "Be nice to nerds. You may end up working for them. We all could.",
		author: "Charles J. Sykes"
	},
	64: {
		quotation: "I think, that if the world were a bit more like ComicCon, it would be a better place.",
		author: "Matt Smith"
	},
	65: {
		quotation: "Music is the poetry of the air.",
		author: "Richter"
	},
	66: {
		quotation: "If I were to begin life again, I would devote it to music. It is the only cheap and unpunished rapture upon earth.",
		author: "Sydney Smith"
	},
	67: {
		quotation: "There is nothing in the world so much like prayer as music is.",
		author: "William P. Merrill"
	},
	68: {
		quotation: "If in the after life there is not music, we will have to import it.",
		author: "Doménico Cieri Estrada"
	},
	69: {
		quotation: "Men profess to be lovers of music, but for the most part they give no evidence in their opinions and lives that they have heard it.",
		author: "Henry David Thoreau"
	},
	70: {
		quotation: "Music is the mediator between the spiritual and the sensual life.",
		author: "Ludwig van Beethoven"
	},
	71: {
		quotation: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
		author: "Stephen Hawking"
	},
	72: {
		quotation: "Time is a drug. Too much of it kills you.",
		author: "Terry Pratchett, Small Gods"
	},
	73: {
		quotation: "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
		author: "Niels Bohr"
	},
	74: {
		quotation: "In the beginning there was nothing, which exploded.",
		author: "Terry Pratchett, Lords and Ladies"
	},
	75: {
		quotation: "That which can be asserted without evidence, can be dismissed without evidence.",
		author: "Christopher Hitchens"
	},
	76: {
		quotation: "If I have seen further it is by standing on the shoulders of Giants.",
		author: "Isaac Newton"
	},
	77: {
		quotation: "The good thing about science is that it's true whether or not you believe in it.",
		author: "Neil deGrasse Tyson"
	},
	78: {
		quotation: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently.",
		author: "Rob Siltanen"
	},
	79: {
		quotation: "Two things you should know about me; The first is that I am deeply suspicious of people in general. It is my nature to expect the worst of them. And the second is that I am unexpectedly good with computers.",
		author: "Veronica Roth, Divergent"
	},
	80: {
		quotation: "I know there's a proverb which that says 'To err is human,' but a human error is nothing to what a computer can do if it tries.",
		author: "Agatha Christie, Hallowe'en Party"
	},
	81: {
		quotation: "Any idiot can put up a website.",
		author: "Patricia Briggs, Blood Bound"
	},
	82: {
		quotation: "Computers are like Old Testament gods; lots of rules and no mercy.",
		author: "Joseph Campbell, The Power of Myth"
	},
	83: {
		quotation: "Don't explain computers to laymen. Simpler to explain sex to a virgin.",
		author: "Robert A. Heinlein, The Moon is a Harsh Mistress"
	},
	84: {
		quotation: "No one messes around with a nerd’s computer and escapes unscathed.",
		author: "E.A. Bucchianeri, Brushstrokes of a Gadfly"
	},
	85: {
		quotation: "There are 10 kinds of people in the world: those who understand binary numerals, and those who don't.",
		author: "Ian Stewart, Professor Stewart's Cabinet of Mathematical Curiosities"
	},
	86: {
		quotation: "A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and Tequila.",
		author: "Mitch Ratcliffe"
	},
	87: {
		quotation: "It's not true that I had nothing on. I had the radio on.",
		author: "Marilyn Monroe"
	},
	88: {
		quotation: "The difference between sex and love is that sex relieves tension and love causes it.",
		author: "Woody Allen"
	},
	89: {
		quotation: "The main reason Santa is so jolly is because he knows where all the bad girls live.",
		author: "George Carlin"
	},
	90: {
		quotation: "Never go to bed mad. Stay up and fight.",
		author: "Phyllis Diller"
	},
	91: {
		quotation: "The planet is fine. The people are fucked.",
		author: "George Carlin"
	},
	92: {
		quotation: "I did not attend his funeral, but I sent a nice letter saying I approved of it.",
		author: "Mark Twain"
	},
	93: {
		quotation: "A lie gets halfway around the world before the truth has a chance to get its pants on.",
		author: "Winston S. Churchill"
	},
	94: {
		quotation: "Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.",
		author: "Bill Gates"
	},
	95: {
		quotation: "Learning to code is useful no matter what your career ambitions are.",
		author: "Arianna Huffington"
	},
	96: {
		quotation: "For most people on Earth, the digital revolution hasn't even started yet. Within the next 10 years, all that will change. Let's get the whole world coding!",
		author: "Eric Schmidt"
	},
	97: {
		quotation: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
		author: "Steve Jobs"
	},
	98: {
		quotation: "Sometimes life's going to hit you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did.",
		author: "Steve Jobs"
	},
	99: {
		quotation: "Why join the navy if you can be a pirate?",
		author: "Steve Jobs"
	},
	100: {
		quotation: "Your penis betrayed you, son. Made you think stupid. It won't be the last time that happens.",
		author: "Justin Halpern, Sh*t My Dad Says"
	},
	101: {
		quotation: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
		author: "Linus Torvalds"
	},
	102: {
		quotation: "I think, fundamentally, open source does tend to be more stable software. It's the right way to do things.",
		author: "Linus Torvalds"
	},
	103: {
		quotation: "Scientists have calculated that the chance of anything so patently absurd actually existing are millions to one. But magicians have calculated that million-to-one chances crop up nine times out of ten.",
		author: "Terry Pratchett, Mort"
	}

};
/*jQuery for interacting with buttons*/
/*Everything starts with a click on New Quote */
$('#new').on('click', function() {
	/*The range of rando is set here and should equal the range of var list so that all the quotes/authors can appear */
	var num = rando(0, 103);

	/* fadeOut. Quote/author replacement occurs within this function for a pretty sync. */
	$("#quote, #author, .fa-quote-left, .fa-quote-right").fadeOut("fast", function() {

		/* Quote/Author replacement */
		$('#quote').html(list[num].quotation);
		$('#author').html(list[num].author.toUpperCase());

		/* fadeIn */
		$("#quote, #author, .fa-quote-left, .fa-quote-right").fadeIn("slow");
	});

	/*Code for tweet. Here because it must access each num generated by clicks on New Quote*/
	$("#tweet").click(function() {
		$("#tweet").attr("href", "https://twitter.com/intent/tweet?&text=" + /*encodeURIComponent() translates the quote into Unicode when building the link so that characters like ; or # don't accidentally interfere with the code.*/ encodeURIComponent('"' + list[num].quotation + '"' + " -" + list[num].author + " #quotes"));
	});

});
