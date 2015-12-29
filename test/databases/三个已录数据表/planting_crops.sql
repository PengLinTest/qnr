/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2015-09-29 10:35:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `planting_crops`
-- ----------------------------
DROP TABLE IF EXISTS `planting_crops`;
CREATE TABLE `planting_crops` (
  `crops_id` int(11) NOT NULL AUTO_INCREMENT,
  `crops_desc` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`crops_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of planting_crops
-- ----------------------------
INSERT INTO `planting_crops` VALUES ('1', '葡萄');
INSERT INTO `planting_crops` VALUES ('2', '玉米');
INSERT INTO `planting_crops` VALUES ('3', '稻谷');
INSERT INTO `planting_crops` VALUES ('4', '香蕉');
INSERT INTO `planting_crops` VALUES ('5', '莴笋');
INSERT INTO `planting_crops` VALUES ('6', '菠菜');
INSERT INTO `planting_crops` VALUES ('7', '优质稻');
INSERT INTO `planting_crops` VALUES ('8', '蜂蜜');
INSERT INTO `planting_crops` VALUES ('9', '辣椒');
INSERT INTO `planting_crops` VALUES ('10', '铁皮石斛');
INSERT INTO `planting_crops` VALUES ('11', '猕猴桃');
INSERT INTO `planting_crops` VALUES ('12', '雪梨');
INSERT INTO `planting_crops` VALUES ('13', '枸杞');
INSERT INTO `planting_crops` VALUES ('14', '红枣');
INSERT INTO `planting_crops` VALUES ('15', '子姜');
INSERT INTO `planting_crops` VALUES ('16', '其他');
