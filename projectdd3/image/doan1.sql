-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 03, 2018 at 02:09 AM
-- Server version: 5.6.37
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doan1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cauhoi1`
--

CREATE TABLE IF NOT EXISTS `cauhoi1` (
  `id` int(11) NOT NULL,
  `de` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cauhoi2`
--

CREATE TABLE IF NOT EXISTS `cauhoi2` (
  `id` int(11) NOT NULL,
  `de` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cauhoi3`
--

CREATE TABLE IF NOT EXISTS `cauhoi3` (
  `id` int(11) NOT NULL,
  `de` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cauhoi4`
--

CREATE TABLE IF NOT EXISTS `cauhoi4` (
  `id` int(11) NOT NULL,
  `de` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dapan2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(11, 'admin1', 'admin1@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(12, 'hieu', 'hieu@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(13, 'admin2', 'admin2@gmail.com', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cauhoi1`
--
ALTER TABLE `cauhoi1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cauhoi2`
--
ALTER TABLE `cauhoi2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cauhoi3`
--
ALTER TABLE `cauhoi3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cauhoi4`
--
ALTER TABLE `cauhoi4`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cauhoi1`
--
ALTER TABLE `cauhoi1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cauhoi2`
--
ALTER TABLE `cauhoi2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cauhoi3`
--
ALTER TABLE `cauhoi3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cauhoi4`
--
ALTER TABLE `cauhoi4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
