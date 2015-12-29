/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2015-09-29 10:34:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `crops_varieties`
-- ----------------------------
DROP TABLE IF EXISTS `crops_varieties`;
CREATE TABLE `crops_varieties` (
  `crops_id` int(11) NOT NULL,
  `varieties_id` int(11) NOT NULL,
  PRIMARY KEY (`crops_id`,`varieties_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of crops_varieties
-- ----------------------------
INSERT INTO `crops_varieties` VALUES ('1', '1');
INSERT INTO `crops_varieties` VALUES ('1', '2');
INSERT INTO `crops_varieties` VALUES ('1', '3');
INSERT INTO `crops_varieties` VALUES ('1', '4');
INSERT INTO `crops_varieties` VALUES ('1', '5');
INSERT INTO `crops_varieties` VALUES ('1', '6');
INSERT INTO `crops_varieties` VALUES ('1', '7');
INSERT INTO `crops_varieties` VALUES ('1', '8');
INSERT INTO `crops_varieties` VALUES ('1', '9');
INSERT INTO `crops_varieties` VALUES ('1', '10');
INSERT INTO `crops_varieties` VALUES ('1', '11');
INSERT INTO `crops_varieties` VALUES ('1', '12');
INSERT INTO `crops_varieties` VALUES ('1', '13');
INSERT INTO `crops_varieties` VALUES ('1', '14');
INSERT INTO `crops_varieties` VALUES ('1', '15');
INSERT INTO `crops_varieties` VALUES ('1', '16');
INSERT INTO `crops_varieties` VALUES ('1', '17');
INSERT INTO `crops_varieties` VALUES ('2', '18');
INSERT INTO `crops_varieties` VALUES ('2', '19');
INSERT INTO `crops_varieties` VALUES ('2', '20');
INSERT INTO `crops_varieties` VALUES ('2', '21');
INSERT INTO `crops_varieties` VALUES ('2', '22');
INSERT INTO `crops_varieties` VALUES ('2', '23');
INSERT INTO `crops_varieties` VALUES ('3', '24');
INSERT INTO `crops_varieties` VALUES ('3', '25');
INSERT INTO `crops_varieties` VALUES ('3', '26');
INSERT INTO `crops_varieties` VALUES ('3', '27');
INSERT INTO `crops_varieties` VALUES ('3', '28');
INSERT INTO `crops_varieties` VALUES ('3', '29');
INSERT INTO `crops_varieties` VALUES ('3', '30');
INSERT INTO `crops_varieties` VALUES ('3', '55');
INSERT INTO `crops_varieties` VALUES ('4', '32');
INSERT INTO `crops_varieties` VALUES ('4', '33');
INSERT INTO `crops_varieties` VALUES ('4', '34');
INSERT INTO `crops_varieties` VALUES ('4', '35');
INSERT INTO `crops_varieties` VALUES ('4', '36');
INSERT INTO `crops_varieties` VALUES ('4', '37');
INSERT INTO `crops_varieties` VALUES ('5', '38');
INSERT INTO `crops_varieties` VALUES ('6', '39');
INSERT INTO `crops_varieties` VALUES ('7', '40');
INSERT INTO `crops_varieties` VALUES ('8', '41');
INSERT INTO `crops_varieties` VALUES ('9', '42');
INSERT INTO `crops_varieties` VALUES ('10', '43');
INSERT INTO `crops_varieties` VALUES ('10', '44');
INSERT INTO `crops_varieties` VALUES ('10', '45');
INSERT INTO `crops_varieties` VALUES ('10', '46');
INSERT INTO `crops_varieties` VALUES ('10', '47');
INSERT INTO `crops_varieties` VALUES ('10', '48');
INSERT INTO `crops_varieties` VALUES ('10', '49');
INSERT INTO `crops_varieties` VALUES ('11', '50');
INSERT INTO `crops_varieties` VALUES ('12', '51');
INSERT INTO `crops_varieties` VALUES ('13', '52');
INSERT INTO `crops_varieties` VALUES ('14', '53');
INSERT INTO `crops_varieties` VALUES ('15', '54');
INSERT INTO `crops_varieties` VALUES ('16', '31');
