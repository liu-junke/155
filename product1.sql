-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-30 03:51:42
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectsql`
--

-- --------------------------------------------------------

--
-- 表的结构 `product1`
--

CREATE TABLE `product1` (
  `p_id` int(11) NOT NULL COMMENT 'id值',
  `p_pic` varchar(300) NOT NULL COMMENT '图片',
  `p_sall` int(11) NOT NULL COMMENT '售价',
  `p_firstprice` int(11) NOT NULL COMMENT '原价',
  `p_title` text NOT NULL COMMENT '标题'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product1`
--

INSERT INTO `product1` (`p_id`, `p_pic`, `p_sall`, `p_firstprice`, `p_title`) VALUES
(1, '[{"src":"/img/1.jpg"},{"src":"/img/2.jpg"},{"src":"/img/3.jpg"},{"src":"/img/4.jpg"},{"src":"/img/5.jpg"}]', 299, 299, '女装 仿羊羔绒摇粒绒无领大衣 420714'),
(2, '[{"src":"/img/40.jpg"},{"src":"/img/41.jpg"},{"src":"/img/42.jpg"},{"src":"/img/43.jpg"},{"src":"/img/44.jpg"}]', 299, 299, '女装 仿羊羔绒摇粒绒无领大衣 420714'),
(3, '[{"src":"/img/50.jpg"},{"src":"/img/51.jpg"},{"src":"/img/52.jpg"},{"src":"/img/53.jpg"},{"src":"/img/54.jpg"}]', 249, 249, '女装 仿羊羔绒摇粒绒拉链V领开衫(长袖) 418245'),
(4, '[{"src":"/img/60.jpg"},{"src":"/img/61.jpg"},{"src":"/img/62.jpg"},{"src":"/img/63.jpg"},{"src":"/img/64.jpg"}]', 599, 599, '【设计师合作款】男装 仿羊羔绒摇粒绒两面穿茄克 419541'),
(5, '[{"src":"/img/70.jpg"},{"src":"/img/71.jpg"},{"src":"/img/72.jpg"},{"src":"/img/73.jpg"},{"src":"/img/74.jpg"}]', 299, 299, '男装 仿羊羔绒摇粒绒开衫 419753\r\n'),
(6, '[{"src":"/img/80.jpg"},{"src":"/img/81.jpg"},{"src":"/img/82.jpg"},{"src":"/img/83.jpg"},{"src":"/img/84.jpg"}]', 99, 199, '【设计师合作款】女装 半高领连衣裙(长袖) 421789'),
(7, '[{"src":"/img/90.jpg"},{"src":"/img/91.jpg"},{"src":"/img/92.jpg"},{"src":"/img/93.jpg"},{"src":"/img/94.jpg"}]', 149, 199, '女装 运动连帽连衣裙(长袖) 420551'),
(8, '[{"src":"/img/100.jpg"},{"src":"/img/101.jpg"},{"src":"/img/102.jpg"},{"src":"/img/103.jpg"},{"src":"/img/104.jpg"}]', 129, 149, '童装/男童/女童 运动裤 421846');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product1`
--
ALTER TABLE `product1`
  ADD PRIMARY KEY (`p_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product1`
--
ALTER TABLE `product1`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id值', AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
