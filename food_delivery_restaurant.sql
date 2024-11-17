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
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `rating` double DEFAULT NULL,
  `logo_restau` varchar(255) DEFAULT NULL,
  `image_restau` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (2,'123 Rue de Paris, 75001 Paris','Burger King','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/ea3ce8fb96ba2c94473be740b5c8bc90f00cc4900c5e24c5c81e7e88b063a1e2?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/071d2cd2ae754ebba359786a8303666a17e82161777f71bb2ffef35f8e2b1b1c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0='),(3,'123 Rue de Paris, 75001 Paris','Tacos de Lyon','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/5a79f7e83eb6ab899241102b0b937bd841c30504539b9d7a5eae447cccb74f6b?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/89d137111dbd62d6173c7863f340e6e528eeaa1da9bca700b0700d375eace318?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0='),(4,'123 Rue de Paris, 75001 Paris','KFC','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/e63f03a983358e879d2aaf798f5099056081170dff363a49e9b431f93865054a?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/402ac043555c9bfe973acaaf4ace3bc2daef5649897a8ea6b5269ebb738a7172?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0='),(5,'123 Rue de Paris, 75001 Paris','Quick','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/0061502068e8e51be0269fb8c793936906e7d2038191638009d2f7b3d7bc0fba?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/058fce79897cd78a376d15ffe4e664144b29863fc3d1f78321dade9636e58dd1?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0='),(6,'123 Rue de Paris, 75001 Paris','O\'Tacos','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/5dea191677a080012466ea34ae0a305964a6d450a3a3b9817214e4f2df75b8a9?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/6a6cefc75410f4bc3332935b07a81858cf88737e3ac6148412833054b6e8e7f6?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'),(7,'123 Rue de Paris, 75001 Paris','Pizza Hut','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/9abbb7106ed8fa17928b549177efa1734b3219e1b49d3149c880363fd5d05826?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/cb8e1df426de1830de667658f709e4586a6730284d3664f5327389f3453ed3c8?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0='),(8,'123 Rue de Paris, 75001 Paris','Sushi Store','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/92165ac10543c4d253d4506734ef07b7186452ae584382b614a479bb1198b721?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/a5a95d0340765e920b80e1b03a898b62256574e23aedeb9a1f253bc2cc05fe22?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'),(9,'123 Rue de Paris, 75001 Paris','La Grillardière','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/ed1b5fe58829bb1c597669fc22d7ac24fc54d67d025893cdfa5ff33b40af1655?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/23048cf775866c7ef373d3ce55c09ef96a6a9d07152a12b09f20fb182fff451d?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'),(10,'123 Rue de Paris, 75001 Paris','Rooster Fried Chicken','+33123456789',4.5,'https://glovo.dhmedia.io/image/customer-assets-glovo/store_logos/be38550e65e6318edd84db64171ba210f70346cf029e9d34a852e3fd08f80490?t=W3siYXV0byI6eyJxIjoibG93In19XQ==','https://glovo.dhmedia.io/image/stores-glovo/stores/74da1d7524308a17c6fc9519a0d73bc50d88afbf82543f1ab6a432a6a5f8cbe0?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
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
