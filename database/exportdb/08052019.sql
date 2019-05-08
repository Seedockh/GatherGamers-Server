-- --------------------------------------------------------
-- Hôte :                        kcpgm0ka8vudfq76.chr7pe7iynqr.eu-west-1.rds.amazonaws.com
-- Version du serveur:           5.7.23-log - Source distribution
-- SE du serveur:                Linux
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Listage des données de la table p6mt6qk1m64ej42q.event : ~3 rows (environ)
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` (`id`, `name`, `date`, `place`, `createdAt`, `updatedAt`, `price`, `players`, `type`, `UserId`, `GameId`) VALUES
	(10, 'Mario cup 1', '2019-05-24 22:00:00', '13 rue des platanes', '2019-05-08 14:52:38.822', '2019-05-08 14:52:38.822', 9999, 8, 'LAN', 10, 2335),
	(11, 'Mario cup 2', '2019-05-29 22:00:00', '12 rue du gigot', '2019-05-08 14:53:12.355', '2019-05-08 14:53:12.355', 3154, 6, 'key1', 10, 2335),
	(12, 'Roadster league', '2019-05-30 22:00:00', 'Ethiopie', '2019-05-08 14:53:44.727', '2019-05-08 14:53:44.727', 0, 2, 'LAN', 10, 3590);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;

-- Listage des données de la table p6mt6qk1m64ej42q.favourite : ~2 rows (environ)
/*!40000 ALTER TABLE `favourite` DISABLE KEYS */;
INSERT INTO `favourite` (`createdAt`, `updatedAt`, `UserId`, `GameId`) VALUES
	('2019-05-08 15:35:05.927', '2019-05-08 15:35:05.927', 9, 2335),
	('2019-05-08 14:55:41.379', '2019-05-08 14:55:41.379', 9, 3590);
/*!40000 ALTER TABLE `favourite` ENABLE KEYS */;

-- Listage des données de la table p6mt6qk1m64ej42q.game : ~50 rows (environ)
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` (`id`, `name`, `cover`, `summary`, `createdAt`, `updatedAt`) VALUES
	(2335, 'Mario Party DS', 'https://images.igdb.com/igdb/image/upload/t_720p/q4irpr7pq220vpbtwc1n.jpg', 'He\'s captured Mario and his friends in his pursuit of a crystal that the group collected when it fell from the sky, and he doesn\'t hesitate to shrink them to miniature size to get rid of them and get his hands on the other four crystals. The mini-heroes have to find the crystals before he does, making their way through giant environments filled with enormous creatures. The single-player campaign takes place in five different settings, each of them ending with a boss. As usual, players have to collect coins and stars, at the same time escaping dangers such as Piranha Plants and other classic creatures from the Mario universe.', '2019-05-07 12:14:08.117', '2019-05-07 12:14:08.117'),
	(3590, 'Roadsters', 'https://images.igdb.com/igdb/image/upload/t_720p/hwoiz4ke8opwcfcqrjnu.jpg', 'Buckle up and brace yourself for the big time baby. This isn\'t just high speed racing on 10 different adrenaline pumping tracks with changing weather conditions and super responsible vehicle handling. It\'s street smarts. With Roadsters, the best driver, doesn\'t always win. Betting and trading cars are a major part of gameplay. Earning cash gives you the chance to upgrade your vehicle and change divisions. So pull down your top and put your foot to the floor. We\'re off!', '2019-05-07 12:14:09.179', '2019-05-07 12:14:09.179'),
	(4557, 'Adventure Time: Explore the Dungeon Because I Don\'t Know!', 'https://images.igdb.com/igdb/image/upload/t_720p/vqjwkman07tzx5et23qw.jpg', 'Princess Bubblegum summons Finn and Jake to the Candy Kingdom to investigate a rash of thefts and kidnappings that have plagued her kingdom. She thinks the cause lies within her Secret Royal Dungeon, where only the nastiest monsters and criminals are locked up.', '2019-05-07 12:14:08.976', '2019-05-07 12:14:08.976'),
	(8283, 'Mind Zero', 'https://images.igdb.com/igdb/image/upload/t_720p/gbz9ijgujbppq6nzbnaw.jpg', 'Mind Zero is an action-packed dungeon-crawler RPG. Play as Kei, a high school student whose life turns upside down when he forms a contract with a “MIND,” a weapon/being with deadly powers. With the government and other forces trailing him and his friends, Kei will need to discover the secret behind “MIND.” Will these newfound powers help him or ultimately be his doom?', '2019-05-07 12:14:07.666', '2019-05-07 12:14:07.666'),
	(13724, 'The Hacker', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.769', '2019-05-07 12:14:08.769'),
	(14431, 'Scorched Earth', 'https://images.igdb.com/igdb/image/upload/t_720p/mxdcvxcv9ffurv9j61cn.jpg', 'Blast your enemies from the face of the Earth together with Earth itself. Buy bigger weapons to crush more enemies. Get more money for crushing more enemies. And finaly buy a much more bigger weapons to crush even more enemies.', '2019-05-07 12:14:07.788', '2019-05-07 12:14:07.788'),
	(17594, 'Tinertia', 'https://images.igdb.com/igdb/image/upload/t_720p/rig3ygvc4ankemkpnihp.jpg', 'Tinertia is rocket-powered platforming built on the premise of Quake-like fun, Sonic-like speed, and dynamic, precise controls. Addictive, surprising, and challenging, Tinertia makes gamers laugh while kicking their butt.', '2019-05-07 12:14:09.142', '2019-05-07 12:14:09.142'),
	(25763, 'Underload', 'https://images.igdb.com/igdb/image/upload/t_720p/jngf8tel8hamvgetvvxx.jpg', 'You didn\'t ask what the diversion was for, you didn\'t ask for a good teamate and munition too... But the fate of the wourld depend of you (well... you think)\n\nSurvive the longest time, fight for your life, and don\'t forget to get the pieces of your truck back after tossing them.', '2019-05-07 12:14:07.666', '2019-05-07 12:14:07.666'),
	(29783, 'Unlucky Seven', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'A group of friends is going to have a party in a space motel. If only they knew that they\'re characters of a story-driven game based on slasher and sci-fi movies... Their fate is in your hands - make decisions that alter the game, like totally!', '2019-05-07 12:14:07.787', '2019-05-07 12:14:07.787'),
	(29794, 'Mystery Case Files: The Black Veil Collector\'s Edition', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'Can you stop the townspeople from mysteriously aging?', '2019-05-07 12:14:08.117', '2019-05-07 12:14:08.117'),
	(29805, 'Diesel Power', 'https://images.igdb.com/igdb/image/upload/t_720p/byx9jsjhzz4m0hiyrnjg.jpg', 'Diesel Power is inspired by classic arcade racers and brings their gameplay to VR. \nBest described with the words: Raw. Challenging. Enraging. Satisfying. One more round! \n \nThe goal is simple: Get to the end of the track \nThe challenge: There is no track', '2019-05-07 12:14:08.769', '2019-05-07 12:14:08.769'),
	(35526, 'Oriental Empires', 'https://images.igdb.com/igdb/image/upload/t_720p/vgjkz4v2vomlrn9xsadn.jpg', 'Turn based 4X strategy game, recreating the civilizations of ancient China. Develop your land, build great cities, raise huge armies and fight epic battles, with hundreds of soldiers fighting right on the game map. Advance your technologies, culture and religion to create one of mankind’s biggest empires.', '2019-05-07 12:14:07.173', '2019-05-07 12:14:07.173'),
	(42380, 'Shounin yo, Taishi o Idake!!', 'https://images.igdb.com/igdb/image/upload/t_720p/axpjigmf8uqb9ouamhiz.jpg', 'Shounin yo, Taishi o Idake!! ("Merchants, Be Ambitious!!!") is a 1995 Japan-exclusive board video game for the Super Famicom.', '2019-05-07 12:14:08.566', '2019-05-07 12:14:08.566'),
	(52661, 'Pinball Heroes: Modnation Racers', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.360', '2019-05-07 12:14:08.360'),
	(54981, 'Banned Memories: Yamanashi', 'https://images.igdb.com/igdb/image/upload/t_720p/bnjc9z49ze1izibk8zrl.jpg', 'An indie survival horror game inspired by PS1 low-poly graphics and the likes of early horror titles. The gameplay and visuals feature a retro style with the option to use tank controls and a dualshock controller for an even more authentic experience.', '2019-05-07 12:14:07.418', '2019-05-07 12:14:07.418'),
	(57729, 'Laserbreak: Esacpe', 'https://images.igdb.com/igdb/image/upload/t_720p/hreiw3altbjjvnv1vwb8.jpg', 'A puzzle game from errorsevendev.', '2019-05-07 12:14:08.319', '2019-05-07 12:14:08.319'),
	(60970, 'Dark Hunter: Shita Youma no Mori', 'https://images.igdb.com/igdb/image/upload/t_720p/lxtnvo1djx9gk2zvipgt.jpg', 'The second part of the Dark Hunter English teaching tool.', '2019-05-07 12:14:08.770', '2019-05-07 12:14:08.770'),
	(64979, 'World War II: Prisoner of War', 'https://images.igdb.com/igdb/image/upload/t_720p/a7n0s0rvvnab5yt2a3y6.jpg', 'Third person stealth adventure game.', '2019-05-07 12:14:07.421', '2019-05-07 12:14:07.421'),
	(65654, 'Zettai Zetsumei Dangerous Jiisan: Naki no Ikkai', 'https://images.igdb.com/igdb/image/upload/t_720p/atrlsqnlw9fmgshwamjc.jpg', 'An adventure game released for the Game Boy Advance in Japan in 2004.', '2019-05-07 12:14:08.566', '2019-05-07 12:14:08.566'),
	(66891, 'Zoo Frenzy', 'https://images.igdb.com/igdb/image/upload/t_720p/gtmrnyyhksf7rpoy8sfk.jpg', 'Zoo Frenzy from Gameloft', '2019-05-07 12:14:08.197', '2019-05-07 12:14:08.197'),
	(66893, 'I\'m Not Alone', 'https://images.igdb.com/igdb/image/upload/t_720p/apnxmysj5s0kk413evsm.jpg', 'I\'m Not Alone is a horror game starring Patrick Weber, an exorcist who has been summoned to a mysterious Austrian mansion to free it from supernatural evil. Despite its incredibly low quality, it was released on Steam as a full-priced game.', '2019-05-07 12:14:08.769', '2019-05-07 12:14:08.769'),
	(69359, 'Sunken Secrets', 'https://images.igdb.com/igdb/image/upload/t_720p/bbboosegdval1pmsvm9n.jpg', 'A mobile fantasy game by Big Fish.', '2019-05-07 12:14:07.421', '2019-05-07 12:14:07.421'),
	(69530, 'Dai Senryaku VII: Modern Military Tactics', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.421', '2019-05-07 12:14:07.421'),
	(77650, 'Super Science Friends', 'https://images.igdb.com/igdb/image/upload/t_720p/ygmbdohgb1nl1yi4odul.jpg', NULL, '2019-05-07 12:14:08.567', '2019-05-07 12:14:08.567'),
	(78207, 'World Snooker Championship Real 2011', 'https://images.igdb.com/igdb/image/upload/t_720p/otpyacoglil2feidqh7e.jpg', 'The current WSC game being developed and published by Dark Energy Sports for PlayStation 3, Xbox 360 and PC, with a planned release during Q2 2011.', '2019-05-07 12:14:08.976', '2019-05-07 12:14:08.976'),
	(81332, 'Stick Fighter II', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.173', '2019-05-07 12:14:07.173'),
	(84208, 'Y2K: The Game', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.869', '2019-05-07 12:14:07.869'),
	(85238, 'Kutar Ski Lift', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.976', '2019-05-07 12:14:08.976'),
	(89179, 'Super Gerball', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.976', '2019-05-07 12:14:08.976'),
	(90512, 'Asian Riddles 4', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.173', '2019-05-07 12:14:07.173'),
	(90545, 'Rento Fortune - Multiplayer Board Game', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'Rento is multiplayer business dice game. It is board game for 2 to 6 players.Trade lands, build houses, win auctions, roll wheel of fortune, risk in Russian Roulette and have fun.Play with your friends on Steam now :)', '2019-05-07 12:14:08.360', '2019-05-07 12:14:08.360'),
	(91579, 'Racing Live', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.586', '2019-05-07 12:14:07.586'),
	(91756, 'Aban Hawkins & the 1000 SPIKES', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.116', '2019-05-07 12:14:08.116'),
	(93939, 'Ranch Rush 2', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.360', '2019-05-07 12:14:08.360'),
	(93987, 'Pi Story', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.950', '2019-05-07 12:14:07.950'),
	(94975, 'Wubble Bubbles', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.729', '2019-05-07 12:14:08.729'),
	(98774, 'Whitevale Defender', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'Help King Theodore save Whitevale from hordes of war machines in this handcrafted, retro strategy defense game.', '2019-05-07 12:14:07.173', '2019-05-07 12:14:07.173'),
	(99434, 'Simple Golfing', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'Simple Golfing - is a simple physical game in which you need to throw the ball up the mountain and get to them to the very top. Do not be discouraged if your ball goes down, try again... and then again.', '2019-05-07 12:14:08.976', '2019-05-07 12:14:08.976'),
	(101139, 'Last Saver: Zombie Hunter Master', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.990', '2019-05-07 12:14:07.990'),
	(104748, 'Space station - build your own ISS', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.666', '2019-05-07 12:14:07.666'),
	(104945, 'Woodpunk', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'Woodpunk is an exhiliarating rogue-like experience in a medieval Woodpunk universe, where the primary energy resource is WOOD.', '2019-05-07 12:14:07.173', '2019-05-07 12:14:07.173'),
	(105254, 'Codenames', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.869', '2019-05-07 12:14:07.869'),
	(105842, 'Robots Vs Zombies: Transform To Race And Fight', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:07.421', '2019-05-07 12:14:07.421'),
	(106046, 'Brain Challenge HD', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.566', '2019-05-07 12:14:08.566'),
	(108593, 'Toot\'s Race', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.157', '2019-05-07 12:14:08.157'),
	(110810, 'Running Naked Simulator 2019', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'Rock out with your (8-bit) block out in Running Naked Simulator 2019! Master the gentle art of running naked for everyone to see, and streak through public parks in iconic characters! It’s totally inappropriate!', '2019-05-07 12:14:07.869', '2019-05-07 12:14:07.869'),
	(110811, 'PitterPot', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.360', '2019-05-07 12:14:08.360'),
	(110812, 'The DOOR', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:08.527', '2019-05-07 12:14:08.527'),
	(111593, 'Oppai Puzzle', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', 'This is a classic digital jigsaw puzzle that anyone can easily play.', '2019-05-07 12:14:07.666', '2019-05-07 12:14:07.666'),
	(114732, 'Jelly Wars', 'http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem', NULL, '2019-05-07 12:14:09.098', '2019-05-07 12:14:09.098');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;

-- Listage des données de la table p6mt6qk1m64ej42q.participant : ~0 rows (environ)
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;

-- Listage des données de la table p6mt6qk1m64ej42q.user : ~5 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `firstname`, `lastname`, `nickname`, `email`, `password_digest`, `city`, `createdAt`, `updatedAt`) VALUES
	(1, 'Popoll', 'Popoll', 'Popolll', 'popol@gmail.com', '$2b$05$YtAILeN/oBTt1cvLNsRgk.s8KSUWwMATmcbPYJla4yaMwZsm9BTS2', NULL, '2019-05-07 12:13:16.392', '2019-05-07 22:56:23.714'),
	(2, 'Peter', 'Parker', 'Spiderman', 'spiderman@gmail.com', '$2b$05$QC6XtuLI6sNcmpkD/Z.AQucqVA8pLJvIMbrfOn1bSq49GNlCu5VPO', NULL, '2019-05-07 12:21:02.194', '2019-05-07 12:21:02.194'),
	(7, 'testing', 'testing', 'testing', 'testing@gmail.com', '$2b$05$cQzQuBvyyCz.o7KAsIsLguDmRbU9edClt2Jxv.Bw0DbW52Aaki3eO', NULL, '2019-05-07 23:04:53.408', '2019-05-07 23:04:53.408'),
	(9, 'Tony', 'Stark', 'Iron Man', 'iron@gmail.com', '$2b$05$QJjaOM2LEm5PdrMVOuxww.8l4zEcF/q.C5C4eoj2SewSbQyUQflKa', NULL, '2019-05-08 11:41:45.240', '2019-05-08 11:41:45.240'),
	(10, 'Antoine', 'Nivoy', 'Cracky', 'cracky.studio@gmail.com', '$2b$05$87L1hD6uHnDiZZrIplKUQebp9pkGf2FNEUmqUM2hnBfVrtpkw8wb.', NULL, '2019-05-08 13:56:05.090', '2019-05-08 13:56:05.090');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
