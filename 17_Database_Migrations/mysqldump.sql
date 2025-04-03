-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: players
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `spiller`
--

DROP TABLE IF EXISTS `spiller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spiller` (
  `id` int NOT NULL AUTO_INCREMENT,
  `spiller_navn` varchar(50) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spiller`
--

LOCK TABLES `spiller` WRITE;
/*!40000 ALTER TABLE `spiller` DISABLE KEYS */;
INSERT INTO `spiller` VALUES (1,'Cristiano Ronaldo','Portugal','Forward'),(2,'Lionel Messi','Argentina','Forward'),(3,'Antoine Griezmann','France','Forward'),(4,'Mohamed Salah','Egypt','Forward'),(5,'Neymar','Brazil','Forward'),(6,'Kevin de Bruyne','Belgium','Midfielder'),(7,'Luis Suarez','Uruguay','Forward'),(8,'Robert Lewandowski','Poland','Forward'),(9,'David de Gea','Spain','Goalkeeper'),(10,'Harry Kane','England','Forward'),(11,'Eden Hazard','Belgium','Forward'),(12,'Kylian Mbappe','France','Forward'),(13,'Sergio Ramos','Spain','Defender'),(14,'Toni Kroos','Germany','Midfielder'),(15,'Luka Modric','Croatia','Midfielder'),(16,'Paul Pogba','France','Midfielder'),(17,'N\'Golo Kante','France','Midfielder'),(18,'Manuel Neuer','Germany','Goalkeeper'),(19,'Sergio Aguero','Argentina','Forward'),(20,'Romelu Lukaku','Belgium','Forward'),(21,'Philippe Coutinho','Brazil','Midfielder'),(22,'James Rodriguez','Colombia','Midfielder'),(23,'Isco','Spain','Midfielder'),(24,'Marcelo','Brazil','Defender'),(25,'Thibaut Courtois','Belgium','Goalkeeper');
/*!40000 ALTER TABLE `spiller` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-03 10:25:39
