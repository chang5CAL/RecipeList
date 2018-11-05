INSERT INTO `cs340_changle_users` (username,password)
VALUES (:username,:password);

UPDATE `cs340_changle_users` SET  password=:password where id=:userID;

INSERT INTO `cs340_changle_user_equipment` (equipment)
VALUES (:equipment);

DELETE FROM `cs340_changle_user_equipment` WHERE id=:equipment;

INSERT INTO `cs340_changle_user_ingredients` (:ingredients)
VALUES (:ingredients);

DELETE FROM `cs340_changle_user_ingredients` WHERE id=:ingredients;

UPDATE `cs340_changle_user_ingredients` SET amount=:amount WHERE id=:ingredient;

INSERT INTO `cs340_changle_users_recipe` (recipe)
VALUES (:recipe);

DELETE FROM `cs340_changle_user_recipe` WHERE id=:recipeID;

INSERT INTO `cs340_changle_recipe` (name,type,source)
VALUES (:name,:type,:source);

SELECT * FROM 'cs340_changle_recipe';

SELECT * FROM 'cs340_changle_user_recipe' WHERE id=:userID;

SELECT * FROM 'cs340_changle_user_ingredients' WHERE id=:userID;

SELECT * FROM 'cs340_changle_user_equipment' WHERE id=:userID;
