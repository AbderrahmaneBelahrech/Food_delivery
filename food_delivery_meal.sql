-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: food_delivery
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `meal`
--

DROP TABLE IF EXISTS `meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `average_rating` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh45kdt2fqap795jx3ebepgr8` (`category_id`),
  KEY `FKcd9jk7bc83ep499vvqepldy9g` (`restaurant_id`),
  CONSTRAINT `FKcd9jk7bc83ep499vvqepldy9g` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`),
  CONSTRAINT `FKh45kdt2fqap795jx3ebepgr8` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal`
--

LOCK TABLES `meal` WRITE;
/*!40000 ALTER TABLE `meal` DISABLE KEYS */;
INSERT INTO `meal` VALUES (1,4.5,'Un plat de légumes provençal avec des courgettes, des aubergines, et des poivrons.','https://example.com/images/ratatouille.jpg','Ratatouille',14.5,9,9),(2,4.8,'Classic Italian pasta with egg, cheese, pancetta, and pepper.','https://glovo.dhmedia.io/image/menus-glovo/products/ba3ae97ee8b0edc59e0c70372a23d02df14a34d1b38f4af430a602dd9c43cb38?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d','Spaghetti Carbonara',15.5,8,3),(13,4.8,'Une pizza classique avec sauce tomate, mozzarella, et basilic frais.','https://glovo.dhmedia.io/image/menus-glovo/products/52d70d792d0744fd22666d3acd79e55a64f825522e2aad98f71fdddd674a8975?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','Margherita',16,3,7),(14,4.8,'Mélange fondant de mozzarella, gorgonzola, parmesan, et chèvre sur une base tomate.','https://glovo.dhmedia.io/image/menus-glovo/products/52d70d792d0744fd22666d3acd79e55a64f825522e2aad98f71fdddd674a8975?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','Quatre Fromages',18,3,7),(15,4.8,'Remplis de légumes grillés, haricots noirs, et avocat.','https://glovo.dhmedia.io/image/menus-glovo/products/70b70d4170c17a2249cd3c837492bb13e1fe2c8ba1e07bc493da4c8a99bc880e?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d','Tacos Végétariens',12,4,3),(16,4.8,'Bœuf effiloché, fromage fondu, et salsa maison.','https://glovo.dhmedia.io/image/menus-glovo/products/70b70d4170c17a2249cd3c837492bb13e1fe2c8ba1e07bc493da4c8a99bc880e?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d','Tacos au Bœuf',12,4,3),(17,4.8,'Bœuf juteux, cheddar, laitue, et tomate dans un pain brioché.','https://glovo.dhmedia.io/image/menus-glovo/products/d005925c4cc3c8cdaa958e9bdaecbf3b87a971f9bad9fcf46803fa461ce5109e?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d','Cheeseburger Classique',12.5,5,2);
/*!40000 ALTER TABLE `meal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-17 20:26:01
