DROP TABLE IF EXISTS `pokemon`;
DROP TABLE IF EXISTS `pokemon_traits`;
DROP TABLE IF EXISTS `region`;
DROP TABLE IF EXISTS `prominent_trainer`;

CREATE TABLE `pokemon` (
	`id_number` int(11) NOT NULL,
	`species_number` int(11) NOT NULL,
	`pokemon_name` varchar(100) NOT NULL,
	`breed_ability` varchar(255) NOT NULL,
	`trainer_name` varchar(100) NOT NULL,
	PRIMARY KEY (`id_number`)
	) ENGINE=InnoDB;
	
	
CREATE TABLE `pokemon_traits` (
	`trait_id` int(11) NOT NULL AUTO_INCREMENT,
	`type` varchar(20) NOT NULL,
	 `stats` int(255) NOT NULL,
	 `evolution` int(3) NOT NULL,
	 `ability` varchar(100) NOT NULL,
	 PRIMARY KEY (`trait_id`)
	) ENGINE=InnoDB;
	
CREATE TABLE `region` (
	`region_id` int(11) NOT NULL AUTO_INCREMENT,
	`date_founded` varchar(255) NOT NULL,
	`climate` varchar(20) NOT NULL,
	`cities_per_region` int(20) NOT NULL,
	PRIMARY KEY (`region_id`)
	) ENGINE=InnoDB;
	
CREATE TABLE `prominent_trainer` (
	`trainer_id` int(11) NOT NULL AUTO_INCREMENT,
	`trainer_name` varchar(100) NOT NULL,
	`trainer_type` varchar(100) NOT NULL,
	`number_owned` int(6) NOT NULL,
	`times_pokemon_used` int(50) NOT NULL,
	PRIMARY KEY (`trainer_id`)
	) ENGINE=InnoDB;
	
	INSERT INTO prominent_trainer (trainer_type) VALUES ("Gym Leaders"); 
	INSERT INTO prominent_trainer (trainer_type) VALUES ("Rivals"); 
	INSERT INTO prominent_trainer (trainer_type) VALUES ("Bosses"); 
	INSERT INTO prominent_trainer (trainer_type) VALUES ("Elite 4 Members");
	INSERT INTO prominent_trainer (trainer_type) VALUES ("Champions"); 
	
	INSERT INTO pokemon_traits (stats) VALUES ("stats_hp");
	INSERT INTO pokemon_traits (stats) VALUES ("stats_attack");
	INSERT INTO pokemon_traits (stats) VALUES ("stats_defense");
	INSERT INTO pokemon_traits (stats) VALUES ("stats_specialattack");
	INSERT INTO pokemon_traits (stats) VALUES ("stats_specialdefense");
	INSERT INTO pokemon_traits (stats) VALUES ("stats_speed");
	
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Bulbasaur", "001");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Ivysaur", "002");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Venusaur", "003");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Charmander", "004");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Charmeleion", "005");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Charizard", "006");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Squirtle", "007");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Wartortle", "008");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Blastoise", "009");
	INSERT INTO pokemon (pokemon_name, id_number) VALUES ("Caterpie", "010");
	