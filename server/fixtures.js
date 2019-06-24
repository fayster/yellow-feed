const users = [
	{
		unique_name: "CDPROJEKTRED",
		name: "CD PROJEKT RED",
		avatar: "https://pbs.twimg.com/profile_images/466632606901997568/sq6SsgP9_400x400.jpeg",
		description: "The official account for CD PROJEKT RED - the developer of critically acclaimed RPGs, The Witcher franchise and Cyberpunk 2077."
	},
	{
		unique_name: "RussianMemesLtd",
		name: "Russian Memes United",
		avatar: "https://pbs.twimg.com/profile_images/1009060449978081280/J7emSr9E_400x400.jpg",
		description: "Translated Russian memes in their full entirety.",
	},
	{
		unique_name: "linuxtoday",
		name: "Linux Today",
		avatar: "https://pbs.twimg.com/profile_images/348098396/180px-Tux_400x400.png",
		description: "Linux news and how-to's collected from all over."
	},
	{
		unique_name: "test",
		name: "Test",
		avatar: "https://cdn.icon-icons.com/icons2/1465/PNG/512/178manastronaut2_100769.png",
		description: "Test description"
	}
];

const messages = [
	{
		text: "How to use tee command in Linux http://dlvr.it/R6nCcc",
		createdAt: new Date('2019-06-19T21:00:00.000+00:00'),
		authorId: "linuxtoday",
		comments: 0,
		likes: 0,
		reposts: 0
	},
	{
		text: "#DidYouKnow that if you pre-order @CyberpunkGame on @GOGcom, 100% of your money goes to CD PROJEKT Group?",
		media: "https://pbs.twimg.com/media/D9loP3tWkAE4CFw.jpg",
		createdAt: new Date('2019-06-20T21:00:00.000+00:00'),
		authorId: "CDPROJEKTRED",
		comments: 15,
		likes: 543,
		reposts: 124
	},
	{
		text: 'When someone starts talking about nuclear industry and you\'ve just watched the "Chernobyl" series \n You know, I’m something of a scientist myself',
		media: "https://pbs.twimg.com/media/D9Bc39PWkAIAyba.jpg",
		createdAt: new Date('2019-06-21T21:00:00.000+00:00'),
		authorId: "RussianMemesLtd",
		comments: 2,
		likes: 123,
		reposts: 43
	},
	{
		text: 'Dentist: don\'t eat for 2 hours minimum \n *I\'m 2 hours and 1 minute after*',
		media: "https://pbs.twimg.com/media/D9kzRzNW4AEd6MT.jpg",
		createdAt: new Date('2019-06-22T21:00:00.000+00:00'),
		authorId: "RussianMemesLtd",
		comments: 5,
		likes: 34,
		reposts: 12
	}
];

module.exports = {
	users,
	messages
};