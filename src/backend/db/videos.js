import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
	{
		_id: uuid(),
		title: "COMEDIANS ON BOARD GANG WAR | GRAND FINALE",
		channelName: "Samay Raina",
		thumbnailURL:
			"https://i.ytimg.com/vi/PJSnBPGtjMI/hq720_live.jpg?sqp=CPCsgZIG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOzwX6DbFKcZ_VqZ9eMQJEOUoLDg",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/dfMz4PacB1s?autoplay=1",
		channelSubscribers: 896000,
		verified: true,
		views: 10,
		duration: "3:34:17",
		likes: 10,
		category: ["chess", "stream"],
		description:
			"Arena is a free community gaming website. You can discover new gaming communities OR create your own. It’s a play-to-earn platform, so the more games you play, the more chances you have to earn and win prizes. You can make our own club on Arena for your schools, colleges and offices and make your events super cool/professional.",
		comments: [
			{
				_id: uuid(),
				name: "Shreyas Soni",
				initials: "SS",
				comment: "What a finale!!!",
			},
			{
				_id: uuid(),
				name: "Test Test",
				initials: "TT",
				comment: "What a finale!!! Samay OP",
			},
		],
	},
	{
		_id: uuid(),
		title: "VISHY ANAND vs MAGNUS CARLSEN",
		channelName: "Samay Raina",
		thumbnailURL:
			"https://i.ytimg.com/vi/L3P3eE8Cy5M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC6Gh-luz5HCXPDXFmHnmEuTvKng",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/L3P3eE8Cy5M?autoplay=1",
		channelSubscribers: 896000,
		verified: true,
		views: 1000000,
		duration: "3:34:17",
		likes: 61000,
		category: ["gaming", "chess", "stream"],
		description:
			"It can't get better than this. Book a simul with Vishy or Harikrishna here: (CODE SIXTYOFF)",
		comments: [],
	},
	{
		_id: uuid(),
		title:
			"Vidit Gujrathi beats Vishy Anand for the first time in his chess career",
		channelName: "ChessBase India",
		thumbnailURL:
			"https://i.ytimg.com/vi/H9Ar0eiZt90/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-wITbmAPX2UbPycfdz2Kqdkbong",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTW6l4zXdS367F-2snlFbDAlSfDVA3ATcg_GniG=s48-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/H9Ar0eiZt90?autoplay=1",
		channelSubscribers: 891000,
		verified: true,
		views: 110000,
		duration: "3:34:17",
		likes: 61000,
		category: ["chess"],
		description:
			"Vidit Gujrathi has played Vishy Anand several times, but has either lost his games or drawn them. It was for the first time in his career that the India no. 3 managed to get the better of Vishy Anand. This happened in the 14th round of the Tata Steel Chess India Blitz 2019 Grand Chess Tour. Check out the game and also Vishy's expressions when he realizes that he has blundered.",
		comments: [],
	},
	{
		_id: uuid(),
		title: "Grandmaster tries Stand up Comedy | Vidit Gujrathi |",
		channelName: "Vidit Gujrathi",
		thumbnailURL:
			"https://i.ytimg.com/vi/Gcb41Y5AMaE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs8i0pNwVFFqJxmhK3RbHB-0ZNrg",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLS9ZY0_i6W0chAV_y3cH7YY8a6gEMiV6Lq9z0IDEA=s176-c-k-c0x00ffffff-no-rj-mo",
		videoIframe: "https://www.youtube.com/embed/Gcb41Y5AMaE?autoplay=1",
		channelSubscribers: 227000,
		verified: true,
		views: 372349,
		duration: "3:34:17",
		likes: 38000,
		category: ["standup", "comedy"],
		description:
			"Vidit's 1st stand up comedy video at Spade Comedy Club in Pune. Thanks, Samay Raina, for the opportunity. ",
		comments: [],
	},
	{
		_id: uuid(),
		title: "The Sadhguru Podcast",
		channelName: "Honestly by Tanmay Bhat",
		thumbnailURL:
			"https://i.ytimg.com/vi/KcbsZfoS7WQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvWa98cmUZFadoyb-dcC-fFjkgyw",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTU5RwHp3wIL4vSPGjhvp1KL-2_QQB_8mhCwfTa=s48-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/KcbsZfoS7WQ?autoplay=1",
		channelSubscribers: 892000,
		verified: true,
		views: 33000,
		duration: "3:34:17",
		likes: 5300,
		category: ["podcast"],
		description: "Sadgura talks about various things.",
		comments: [],
	},
	{
		_id: uuid(),
		title: "Learn Stock Trading in 10 Hours! - #1",
		channelName: "Honestly by Tanmay Bhat",
		thumbnailURL:
			"https://i.ytimg.com/vi/ef_9kFyhi0k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALvO8xVJBqFY69eGoFPF9tdC2-lg",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTU5RwHp3wIL4vSPGjhvp1KL-2_QQB_8mhCwfTa=s48-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/ef_9kFyhi0k?autoplay=1",
		channelSubscribers: 892000,
		verified: true,
		views: 39000,
		duration: "3:34:17",
		likes: 6300,
		category: ["stock", "investing"],
		description:
			"Welcome to the first episode of Basics of Trading with Tanmay & Prateek. Learn the difference between technical and fundamental analysis, understand the reason behind stock price movements, and the market psychology behind it with the help of interesting real-life examples! This video is primarily intended for those who are clueless about trading and want to start learning.",
		comments: [],
	},
	{
		_id: uuid(),
		title: "RAHUL SUBRAMANIAN",
		channelName: "Rahul Subramanian",
		thumbnailURL:
			"https://i.ytimg.com/vi/wA0W6mFlKOM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdZa8QjIzBn8TCoraLpi08X1vJww",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTOKDVCFS70WhV3J5Y6_1QrLPs5PQrKuSHmmxvw=s48-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/2Oy4HpUJSgE?autoplay=1",
		channelSubscribers: 892000,
		verified: true,
		views: 39000,
		duration: "3:34:17",
		likes: 6300,
		category: ["standup"],
		description:
			"Releasing my first (of few) crowd-work video from the show that I did in Bangalore, on 14th September 2019 at That Comedy Club. Crowd work is a sub-genre of stand up comedy, which is completely unscripted and based purely on audience interactions. ",
		comments: [],
	},
	{
		_id: uuid(),
		title: "The Strumbellas - Spirits",
		channelName: "The Strumbellas",
		thumbnailURL:
			"https://i.ytimg.com/vi/F9kXstb9FF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV0-4GlE4O23hfowXplYnUrVA-hA",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTh8Q1-vil6hgaFbRVazNseP-sFXfBd1UVb49cCew=s48-c-k-c0x00ffffff-no-rj-mo",
		videoIframe: "https://www.youtube.com/embed/F9kXstb9FF4?autoplay=1",
		channelSubscribers: 319000,
		verified: true,
		views: 105683216,
		duration: "3:34:17",
		likes: 1800000,
		category: ["music"],
		description:
			"Watch the official music video for “Spirits” by The Strumbellas.",
		comments: [],
	},
	{
		_id: uuid(),
		title: "AJR - The Good Part (Official Video)",
		channelName: "AJR",
		thumbnailURL:
			"https://i.ytimg.com/vi/hqrWXNMTaKY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBjGLncPNAPPMc40QKwteYZXtqGuw",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTU6lJeKataDed3hkaviBqSj1eVSm0fa8XzVLgDOw=s48-c-k-c0x00ffffff-no-rj-mo",
		videoIframe: "https://www.youtube.com/embed/hqrWXNMTaKY?autoplay=1",
		channelSubscribers: 2600000,
		verified: true,
		views: 4000000,
		duration: "3:34:17",
		likes: 135000,
		category: ["music"],
		description:
			"AJR OK ORCHESTRA WORLD TOUR 2022: https://www.ajrbrothers.com/tour OK ORCHESTRA OUT NOW: https://AJR.lnk.to/okorchestraID. Follow us everywhere @AJRBrothers",
		comments: [],
	},
	{
		_id: uuid(),
		title: "Option trading for beginners by CA Rachana Ranade",
		channelName: "CA Rachana Phadke Ranade",
		thumbnailURL:
			"https://i.ytimg.com/vi/M86YwBWxygI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD8vylc7HpnRiayR1XZGgvKXw8Syw",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLSA3Tow9_-RTNU6WslhjukZuknVu3JzcGiCMumw5g=s48-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/M86YwBWxygI",
		channelSubscribers: 3750000,
		verified: true,
		views: 3238457,
		duration: "3:34:17",
		likes: 81000,
		category: ["stock", "investing"],
		description:
			"Basic of Options trading explained by CA Rachana Ranade. In this video, you will learn common terminologies used in the field of options trading.",
		comments: [],
	},
	{
		_id: uuid(),
		title: "AJR - Burn The House Down (Official Video)",
		channelName: "AJR",
		thumbnailURL:
			"https://i.ytimg.com/vi/UnyLfqpyi94/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCekpyc8-FwPJjCJh8qUh3DmJARPg",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLTU6lJeKataDed3hkaviBqSj1eVSm0fa8XzVLgDOw=s48-c-k-c0x00ffffff-no-rj-mo",
		videoIframe: "https://www.youtube.com/embed/UnyLfqpyi94?autoplay=1",
		channelSubscribers: 2600000,
		verified: true,
		views: 80390400,
		duration: "3:34:17",
		likes: 809000,
		category: ["music"],
		description:
			"Directed by The Mitchells & Spencer Hord Online Everywhere @AJRBrothers (c) 2018 AJR Productions LLC.",
		comments: [],
	},
	{
		_id: uuid(),
		title:
			"Basics of Stock Market For Beginners Lecture 1 By CA Rachana Phadke Ranade",
		channelName: "CA Rachana Phadke Ranade",
		thumbnailURL:
			"https://i.ytimg.com/vi/Xn7KWR9EOGQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB2_KDYPeKggnYUyosrMZsMG5YbJQ",
		channelProfileURL:
			"https://yt3.ggpht.com/ytc/AKedOLSA3Tow9_-RTNU6WslhjukZuknVu3JzcGiCMumw5g=s48-c-k-c0x00ffffff-no-rj",
		videoIframe: "https://www.youtube.com/embed/Xn7KWR9EOGQ",
		channelSubscribers: 3750000,
		verified: true,
		views: 23510457,
		duration: "3:34:17",
		likes: 549000,
		category: ["stock", "investing"],
		description:
			"You can get my Stock Market courses on https://www.rachanaranade.com. It’s an opportunity to learn 65+ concepts relating to the Basics of the Stock Market in 11 sessions!",
		comments: [],
	},
];
