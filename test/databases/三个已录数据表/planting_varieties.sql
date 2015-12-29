/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2015-09-29 10:35:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `planting_varieties`
-- ----------------------------
DROP TABLE IF EXISTS `planting_varieties`;
CREATE TABLE `planting_varieties` (
  `varieties_id` int(11) NOT NULL AUTO_INCREMENT,
  `varisties_desc` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`varieties_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of planting_varieties
-- ----------------------------
INSERT INTO `planting_varieties` VALUES ('1', '赤霞珠');
INSERT INTO `planting_varieties` VALUES ('2', '夏黑');
INSERT INTO `planting_varieties` VALUES ('3', '沙当妮');
INSERT INTO `planting_varieties` VALUES ('4', '巨峰');
INSERT INTO `planting_varieties` VALUES ('5', '金手指');
INSERT INTO `planting_varieties` VALUES ('6', '蛇龙珠');
INSERT INTO `planting_varieties` VALUES ('7', '藤稔');
INSERT INTO `planting_varieties` VALUES ('8', '红巴拉多');
INSERT INTO `planting_varieties` VALUES ('9', '黑巴拉多');
INSERT INTO `planting_varieties` VALUES ('10', '维多利亚');
INSERT INTO `planting_varieties` VALUES ('11', '阳光玫瑰');
INSERT INTO `planting_varieties` VALUES ('12', '巨玫瑰');
INSERT INTO `planting_varieties` VALUES ('13', '醉金香');
INSERT INTO `planting_varieties` VALUES ('14', '美人指');
INSERT INTO `planting_varieties` VALUES ('15', '早霞玫瑰');
INSERT INTO `planting_varieties` VALUES ('16', '达米娜');
INSERT INTO `planting_varieties` VALUES ('17', '红宝石无核');
INSERT INTO `planting_varieties` VALUES ('18', '龙高L2');
INSERT INTO `planting_varieties` VALUES ('19', '农华101');
INSERT INTO `planting_varieties` VALUES ('20', '宁玉666');
INSERT INTO `planting_varieties` VALUES ('21', '圣瑞999');
INSERT INTO `planting_varieties` VALUES ('22', '中迪985');
INSERT INTO `planting_varieties` VALUES ('23', '丰单3号');
INSERT INTO `planting_varieties` VALUES ('24', '绥粳3号');
INSERT INTO `planting_varieties` VALUES ('25', '绥粳9号');
INSERT INTO `planting_varieties` VALUES ('26', '空育131');
INSERT INTO `planting_varieties` VALUES ('27', '啃稻12');
INSERT INTO `planting_varieties` VALUES ('28', '超北二号');
INSERT INTO `planting_varieties` VALUES ('29', '绿珠3号');
INSERT INTO `planting_varieties` VALUES ('30', '五优稻4号');
INSERT INTO `planting_varieties` VALUES ('31', '圣女果');
INSERT INTO `planting_varieties` VALUES ('32', '香牙蕉');
INSERT INTO `planting_varieties` VALUES ('33', '大种高把');
INSERT INTO `planting_varieties` VALUES ('34', '仙人蕉');
INSERT INTO `planting_varieties` VALUES ('35', '天宝蕉');
INSERT INTO `planting_varieties` VALUES ('36', '广西矮香蕉');
INSERT INTO `planting_varieties` VALUES ('37', '西贡蕉');
INSERT INTO `planting_varieties` VALUES ('38', '莴笋');
INSERT INTO `planting_varieties` VALUES ('39', '菠菜');
INSERT INTO `planting_varieties` VALUES ('40', '稻花香二号');
INSERT INTO `planting_varieties` VALUES ('41', '蜂蜜');
INSERT INTO `planting_varieties` VALUES ('42', '彩椒');
INSERT INTO `planting_varieties` VALUES ('43', '红杆1#');
INSERT INTO `planting_varieties` VALUES ('44', '红杆2#');
INSERT INTO `planting_varieties` VALUES ('45', '红杆3#');
INSERT INTO `planting_varieties` VALUES ('46', '红杆4#');
INSERT INTO `planting_varieties` VALUES ('47', '绿杆1#');
INSERT INTO `planting_varieties` VALUES ('48', '绿杆2#');
INSERT INTO `planting_varieties` VALUES ('49', '绿杆3#');
INSERT INTO `planting_varieties` VALUES ('50', '猕猴桃');
INSERT INTO `planting_varieties` VALUES ('51', '翠冠');
INSERT INTO `planting_varieties` VALUES ('52', '中宁枸杞');
INSERT INTO `planting_varieties` VALUES ('53', '灵武长红枣');
INSERT INTO `planting_varieties` VALUES ('54', '子姜');
INSERT INTO `planting_varieties` VALUES ('55', '龙粳28号');
