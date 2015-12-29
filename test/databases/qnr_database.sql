/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : qnr_database

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2015-12-16 09:49:09
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
INSERT INTO `crops_varieties` VALUES ('11', '54');
INSERT INTO `crops_varieties` VALUES ('12', '51');
INSERT INTO `crops_varieties` VALUES ('13', '52');
INSERT INTO `crops_varieties` VALUES ('14', '53');
INSERT INTO `crops_varieties` VALUES ('15', '50');
INSERT INTO `crops_varieties` VALUES ('16', '31');

-- ----------------------------
-- Table structure for `enterprise_certi`
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_certi`;
CREATE TABLE `enterprise_certi` (
  `certi_id` int(11) NOT NULL AUTO_INCREMENT,
  `certi_name` varchar(20) DEFAULT NULL,
  `certi_lincense_loc` varchar(20) DEFAULT NULL,
  `certi_ispass` int(11) DEFAULT NULL,
  PRIMARY KEY (`certi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_certi
-- ----------------------------

-- ----------------------------
-- Table structure for `environment_data`
-- ----------------------------
DROP TABLE IF EXISTS `environment_data`;
CREATE TABLE `environment_data` (
  `environment_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `data_type` int(11) NOT NULL,
  `first_data` float DEFAULT NULL,
  `second_data` float DEFAULT NULL,
  `third_data` float DEFAULT NULL,
  `data_time` datetime DEFAULT NULL,
  PRIMARY KEY (`environment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of environment_data
-- ----------------------------
INSERT INTO `environment_data` VALUES ('1', '1', '5', '12', null, null, '2015-10-22 09:22:10');
INSERT INTO `environment_data` VALUES ('2', '1', '5', '13', null, null, '2015-11-04 09:22:12');

-- ----------------------------
-- Table structure for `fertilizer_pesticides_use`
-- ----------------------------
DROP TABLE IF EXISTS `fertilizer_pesticides_use`;
CREATE TABLE `fertilizer_pesticides_use` (
  `use_id` int(11) NOT NULL AUTO_INCREMENT,
  `use_time` datetime NOT NULL,
  `use_name` varchar(20) DEFAULT NULL,
  `use_level` varchar(20) DEFAULT NULL,
  `use_brand` varchar(20) DEFAULT NULL,
  `use_suppliers` varchar(20) DEFAULT NULL,
  `use_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`use_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fertilizer_pesticides_use
-- ----------------------------
INSERT INTO `fertilizer_pesticides_use` VALUES ('1', '2015-10-27 16:06:31', '1', '1', '1', '1', '0');
INSERT INTO `fertilizer_pesticides_use` VALUES ('2', '2015-10-29 12:04:38', '11', '11', '11', '11', '0');
INSERT INTO `fertilizer_pesticides_use` VALUES ('3', '2015-10-27 16:06:32', '2', '2', '2', '2', '1');
INSERT INTO `fertilizer_pesticides_use` VALUES ('4', '2015-10-29 12:36:01', '21', '21', '21', '21', '1');

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
INSERT INTO `planting_crops` VALUES ('11', '子姜');
INSERT INTO `planting_crops` VALUES ('12', '雪梨');
INSERT INTO `planting_crops` VALUES ('13', '枸杞');
INSERT INTO `planting_crops` VALUES ('14', '红枣');
INSERT INTO `planting_crops` VALUES ('15', '猕猴桃');
INSERT INTO `planting_crops` VALUES ('16', '其他');

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

-- ----------------------------
-- Table structure for `policy`
-- ----------------------------
DROP TABLE IF EXISTS `policy`;
CREATE TABLE `policy` (
  `policy_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `policy_title` varchar(20) DEFAULT NULL COMMENT '政策标题',
  `policy_type` tinyint(4) DEFAULT NULL,
  `policy_time` datetime NOT NULL COMMENT '政策时间',
  `policy_source` varchar(10) DEFAULT NULL COMMENT '政策来源',
  `policy_content` text COMMENT '政策内容',
  `policy_editor` varchar(20) DEFAULT NULL COMMENT '政策编辑',
  `policy_isdelete` tinyint(4) DEFAULT NULL COMMENT '政策是否已删除',
  PRIMARY KEY (`policy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of policy
-- ----------------------------

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_id` int(11) DEFAULT NULL,
  `growthing_img_list` varchar(200) DEFAULT '',
  `fertilizer_list` varchar(200) DEFAULT NULL,
  `pesticides_list` varchar(200) DEFAULT NULL,
  `video_loc` varchar(200) DEFAULT NULL,
  `environment_data_exist` smallint(6) DEFAULT NULL,
  `product_certi_list` varchar(200) DEFAULT NULL,
  `product_intro` varchar(200) DEFAULT NULL,
  `buy_info_list` varchar(200) DEFAULT NULL,
  `batchlist` varchar(200) DEFAULT NULL,
  `qrcodeloc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '55', '1,2', '1,2', '3,4', 'http://116.10.243.218:9010/live/live14/stream.m3u8', '1', '1,2', 'myself阳光玫瑰为欧美杂交种，果面有光泽，果粉少；果肉鲜脆多汁，有玫瑰香味。吃了阳光玫瑰，其他葡萄无味，可谓葡萄之王哦。', '1,2,3,4,5,6,7,8,9,10', '1,2', 'templates/images/QRCode/QRCodeHandler.jpg');
INSERT INTO `product` VALUES ('2', '55', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `product` VALUES ('3', '55', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `product` VALUES ('4', '55', null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `product_basicinfo`
-- ----------------------------
DROP TABLE IF EXISTS `product_basicinfo`;
CREATE TABLE `product_basicinfo` (
  `basicinfo_id` int(11) NOT NULL AUTO_INCREMENT,
  `basicinfo_img_loc` varchar(100) DEFAULT NULL,
  `basicinfo_crops_index` int(11) DEFAULT NULL,
  `basicinfo_varieties_index` int(11) DEFAULT NULL,
  `basicinfo_season` varchar(20) DEFAULT NULL,
  `basicinfo_representative` varchar(20) DEFAULT NULL,
  `basicinfo_remark` varchar(200) DEFAULT NULL,
  `basicinfo_name` varchar(20) DEFAULT '',
  `basicinfo_time` datetime DEFAULT NULL,
  `basicinfo_type` int(11) DEFAULT NULL,
  `basicinfo_lable` varchar(20) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`basicinfo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_basicinfo
-- ----------------------------
INSERT INTO `product_basicinfo` VALUES ('1', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', '1', '18', '第一季', '青犀', 'myself 测试玉米一年只出产一季稻谷，今年种植面积1000亩，数量有限，珍贵稀缺', '有机大米', '2015-10-15 09:36:40', '1', '大米,主食,干吃', '1');
INSERT INTO `product_basicinfo` VALUES ('2', 'templates/UpFiles/Attachments/6dae05bf-c637-41d0-9a38-15ea2a2c17d8_.jpg', '2', '18', '第一季', '青犀', '测试仔姜', '仔姜', '2015-10-15 09:38:05', '1', '姜,配料', '2');
INSERT INTO `product_basicinfo` VALUES ('4', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', '2', null, null, null, null, '有机大米', '2015-10-15 16:46:23', '1', '大米,主食,干吃', '4');
INSERT INTO `product_basicinfo` VALUES ('5', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', '2', null, null, null, null, '有机大米', '2015-10-15 16:46:26', '1', '大米,主食,干吃', '5');
INSERT INTO `product_basicinfo` VALUES ('6', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', '2', null, null, null, null, '有机大米', '2015-10-15 16:46:28', '2', '大米,主食,干吃', '6');
INSERT INTO `product_basicinfo` VALUES ('7', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', '2', null, null, null, null, '有机大米', '2015-10-15 16:46:31', '2', null, '7');
INSERT INTO `product_basicinfo` VALUES ('8', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', '2', null, null, null, null, '有机大米', '2015-10-15 16:46:33', '2', null, '8');
INSERT INTO `product_basicinfo` VALUES ('9', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', '2', null, null, null, null, '有机大米', '2015-10-15 16:46:35', '2', null, '9');
INSERT INTO `product_basicinfo` VALUES ('10', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', '2', null, null, null, null, '仔姜', '2015-10-15 16:46:37', '2', null, '12');
INSERT INTO `product_basicinfo` VALUES ('11', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', '2', null, null, null, null, '仔姜', '2015-10-15 16:46:39', '2', null, '11');
INSERT INTO `product_basicinfo` VALUES ('12', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', '2', null, null, null, null, '仔姜', '2015-10-15 16:46:42', '2', null, '10');
INSERT INTO `product_basicinfo` VALUES ('13', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', '2', null, null, null, null, '仔姜', '2015-10-15 16:46:44', '2', '大米,主食,干吃', '31');
INSERT INTO `product_basicinfo` VALUES ('14', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', '2', null, null, null, null, '仔姜', '2015-10-15 16:46:46', '2', '大米,主食,干吃', '21');
INSERT INTO `product_basicinfo` VALUES ('15', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', '2', null, null, null, null, '仔姜', '2015-10-15 16:46:48', '2', '大米,主食,干吃', '11');

-- ----------------------------
-- Table structure for `product_batch`
-- ----------------------------
DROP TABLE IF EXISTS `product_batch`;
CREATE TABLE `product_batch` (
  `batch_id` int(11) NOT NULL AUTO_INCREMENT,
  `batch_harvesttime` datetime DEFAULT NULL,
  `batch_num` varchar(50) DEFAULT NULL,
  `batch_qrcode_loc` varchar(200) DEFAULT NULL,
  `batch_auditstatus` tinyint(4) DEFAULT NULL,
  `batch_isvalid` tinyint(4) DEFAULT NULL,
  `batch_remark_color` varchar(200) DEFAULT NULL,
  `batch_remark_power` varchar(200) DEFAULT NULL,
  `batch_remark_weight` varchar(200) DEFAULT NULL,
  `batch_remark_SugarScale` varchar(200) DEFAULT NULL,
  `batch_remark_other` varchar(200) DEFAULT NULL,
  `batch_isdelete` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`batch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_batch
-- ----------------------------
INSERT INTO `product_batch` VALUES ('1', '2015-10-23 10:36:45', '00001', '', '1', '1', '外观', '成熟度', '口感', '糖分', '其他', '0');
INSERT INTO `product_batch` VALUES ('2', '2015-10-23 10:36:47', '00001', null, '1', '1', '外观2', '成熟度2', '口感2', '糖分2', '其他2', '0');

-- ----------------------------
-- Table structure for `product_buyinfo`
-- ----------------------------
DROP TABLE IF EXISTS `product_buyinfo`;
CREATE TABLE `product_buyinfo` (
  `buy_id` int(11) NOT NULL AUTO_INCREMENT,
  `buy_type` smallint(6) DEFAULT NULL,
  `buy_desc_first` varchar(200) DEFAULT NULL,
  `buy_desv_sec` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`buy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_buyinfo
-- ----------------------------
INSERT INTO `product_buyinfo` VALUES ('1', '1', 'http://www.taobao.com', null);
INSERT INTO `product_buyinfo` VALUES ('2', '1', 'http://www.sina.com', null);
INSERT INTO `product_buyinfo` VALUES ('3', '2', '成都市金牛区蜀蓉路118号蜀兴苑5栋2单元104', null);
INSERT INTO `product_buyinfo` VALUES ('4', '2', '成都市金牛区蜀蓉路118号蜀兴苑5栋2单元104', null);
INSERT INTO `product_buyinfo` VALUES ('5', '3', '帅哥', '1234');
INSERT INTO `product_buyinfo` VALUES ('6', '3', 'Eason', '5678');
INSERT INTO `product_buyinfo` VALUES ('7', '2', '成都市金牛区蜀蓉路118号蜀兴苑5栋2单元104', null);
INSERT INTO `product_buyinfo` VALUES ('8', '2', '成都市金牛区蜀蓉路118号蜀兴苑5栋2单元104', null);
INSERT INTO `product_buyinfo` VALUES ('9', '2', '成都市金牛区蜀蓉路118号蜀兴苑5栋2单元104', null);
INSERT INTO `product_buyinfo` VALUES ('10', '2', '成都市金牛区蜀蓉路118号蜀兴苑5栋2单元104', null);

-- ----------------------------
-- Table structure for `product_certi`
-- ----------------------------
DROP TABLE IF EXISTS `product_certi`;
CREATE TABLE `product_certi` (
  `certi_id` int(11) NOT NULL AUTO_INCREMENT,
  `certi_type_index` int(11) DEFAULT NULL,
  `certi_date` datetime NOT NULL,
  `certi_num` varchar(50) DEFAULT NULL,
  `certi_valid` datetime NOT NULL,
  `certi_awarddepart` varchar(50) DEFAULT NULL,
  `certi_imgloclist` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`certi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_certi
-- ----------------------------
INSERT INTO `product_certi` VALUES ('1', '1', '2015-10-27 15:07:00', '00001', '2015-10-23 11:27:44', '西安交通大学', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg,templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg');
INSERT INTO `product_certi` VALUES ('2', '2', '2015-10-27 15:07:06', '00002', '0000-00-00 00:00:00', '西安交通大学', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg,templates/UpFiles/Attachments/hero.jpg');

-- ----------------------------
-- Table structure for `product_certi_type`
-- ----------------------------
DROP TABLE IF EXISTS `product_certi_type`;
CREATE TABLE `product_certi_type` (
  `certi_id` int(11) NOT NULL AUTO_INCREMENT,
  `certi_desc` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`certi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_certi_type
-- ----------------------------
INSERT INTO `product_certi_type` VALUES ('1', '农药残留检测');
INSERT INTO `product_certi_type` VALUES ('2', '无公害农产品认证');
INSERT INTO `product_certi_type` VALUES ('3', '绿色食品认证');
INSERT INTO `product_certi_type` VALUES ('4', '有机食品认证');
INSERT INTO `product_certi_type` VALUES ('5', 'HACCP认证');
INSERT INTO `product_certi_type` VALUES ('6', '土壤检测报告');
INSERT INTO `product_certi_type` VALUES ('7', '水质监测报告');
INSERT INTO `product_certi_type` VALUES ('8', '国家地理认证');
INSERT INTO `product_certi_type` VALUES ('9', '食品安全检测报告');
INSERT INTO `product_certi_type` VALUES ('10', 'ISO质量管理体系认证');
INSERT INTO `product_certi_type` VALUES ('11', '优良种子认证');
INSERT INTO `product_certi_type` VALUES ('12', 'ISO食品安全管理体系认证');
INSERT INTO `product_certi_type` VALUES ('13', '大米检测报告');
INSERT INTO `product_certi_type` VALUES ('14', '营养检测报告');
INSERT INTO `product_certi_type` VALUES ('15', 'QS食品质量安全认证');
INSERT INTO `product_certi_type` VALUES ('16', '食品流通许可证');

-- ----------------------------
-- Table structure for `product_growimages`
-- ----------------------------
DROP TABLE IF EXISTS `product_growimages`;
CREATE TABLE `product_growimages` (
  `img_id` int(11) NOT NULL AUTO_INCREMENT,
  `img_date` datetime DEFAULT NULL,
  `img_address` varchar(200) DEFAULT NULL,
  `img_desc` varchar(200) DEFAULT NULL,
  `img_loc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_growimages
-- ----------------------------
INSERT INTO `product_growimages` VALUES ('1', '2015-10-28 15:17:07', '二堡子有机水稻基地', '9月美丽稻田', 'templates/UpFiles/Attachments/bcf5c777-9b7f-45cf-be7a-e1dc9bb902d0.jpg');
INSERT INTO `product_growimages` VALUES ('2', '2015-10-28 15:16:48', '二堡子有机水稻基地', '稻种催芽，我们采用比较先进的催芽机，温度准确控制在32度左右，经过48小时左右达到理想的效果', 'templates/UpFiles/Attachments/21a89315-3f12-4208-a326-4a9e347818da.jpg');

-- ----------------------------
-- Table structure for `vendor`
-- ----------------------------
DROP TABLE IF EXISTS `vendor`;
CREATE TABLE `vendor` (
  `vendor_id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_name` varchar(200) NOT NULL,
  `vendor_pass` varchar(200) NOT NULL,
  `vendor_certi_id` int(11) DEFAULT NULL,
  `vendor_info_id` int(11) DEFAULT NULL,
  `vendor_iden_id` int(11) DEFAULT NULL,
  `vendor_isadmin` tinyint(6) NOT NULL DEFAULT '0',
  `vendor_isdelete` int(11) NOT NULL DEFAULT '0',
  `vendor_type` int(11) NOT NULL DEFAULT '1',
  `vendor_time` datetime NOT NULL,
  `vendor_lastLoginTime` datetime DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor
-- ----------------------------
INSERT INTO `vendor` VALUES ('53', '18602919697', 'c4ca4238a0b923820dcc509a6f75849b', '1', '1', '2', '0', '0', '1', '2015-11-22 09:28:08', '2015-12-14 16:18:19');
INSERT INTO `vendor` VALUES ('55', '13261553229', 'c4ca4238a0b923820dcc509a6f75849b', '32', '95', '31', '0', '0', '1', '2015-11-23 09:55:28', '2015-11-23 09:55:28');
INSERT INTO `vendor` VALUES ('56', '13261553221', 'c20ad4d76fe97759aa27a0c99bff6710', '34', '96', '33', '0', '0', '1', '2015-12-14 15:35:42', '2015-12-14 15:37:18');
INSERT INTO `vendor` VALUES ('57', '18602919696', 'c4ca4238a0b923820dcc509a6f75849b', '36', '97', '35', '0', '0', '1', '2015-12-14 15:38:48', '2015-12-14 15:38:48');
INSERT INTO `vendor` VALUES ('58', '18602919699', 'c4ca4238a0b923820dcc509a6f75849b', '38', '98', '37', '0', '0', '1', '2015-12-14 16:16:24', '2015-12-14 16:16:24');
INSERT INTO `vendor` VALUES ('59', '123@163.com', 'c4ca4238a0b923820dcc509a6f75849b', '40', '99', '39', '0', '0', '1', '2015-12-14 16:16:53', '2015-12-14 16:16:53');

-- ----------------------------
-- Table structure for `vendor_auth`
-- ----------------------------
DROP TABLE IF EXISTS `vendor_auth`;
CREATE TABLE `vendor_auth` (
  `auth_id` int(11) NOT NULL AUTO_INCREMENT,
  `auth_license_loc` varchar(500) DEFAULT NULL,
  `auth_ispass` int(11) DEFAULT NULL,
  `auth_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`auth_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor_auth
-- ----------------------------
INSERT INTO `vendor_auth` VALUES ('1', 'templates/UpFiles/Vendor/auth/201512141458279427.jpeg', '3', '0');
INSERT INTO `vendor_auth` VALUES ('2', 'templates/UpFiles/Vendor/auth/201512141457467335.jpeg', '2', '1');
INSERT INTO `vendor_auth` VALUES ('3', '', '1', '1');
INSERT INTO `vendor_auth` VALUES ('4', '', '1', '0');
INSERT INTO `vendor_auth` VALUES ('31', '', '1', '1');
INSERT INTO `vendor_auth` VALUES ('32', '', '1', '0');
INSERT INTO `vendor_auth` VALUES ('33', '', '1', '1');
INSERT INTO `vendor_auth` VALUES ('34', '', '1', '0');
INSERT INTO `vendor_auth` VALUES ('35', '', '1', '1');
INSERT INTO `vendor_auth` VALUES ('36', '', '1', '0');
INSERT INTO `vendor_auth` VALUES ('37', '', '1', '1');
INSERT INTO `vendor_auth` VALUES ('38', '', '1', '0');
INSERT INTO `vendor_auth` VALUES ('39', '', '1', '1');
INSERT INTO `vendor_auth` VALUES ('40', '', '1', '0');

-- ----------------------------
-- Table structure for `vendor_info`
-- ----------------------------
DROP TABLE IF EXISTS `vendor_info`;
CREATE TABLE `vendor_info` (
  `info_id` int(11) NOT NULL AUTO_INCREMENT,
  `info_name` varchar(200) DEFAULT '',
  `info_tele` varchar(200) DEFAULT '',
  `info_fax` varchar(200) DEFAULT '',
  `info_email` varchar(200) DEFAULT '',
  `info_address` varchar(200) DEFAULT '',
  `info_qq` varchar(200) DEFAULT '',
  `info_wechat` varchar(200) DEFAULT '',
  `info_taobao` varchar(200) DEFAULT '',
  `info_qrcode_wechat` varchar(200) DEFAULT '',
  `info_qrcode_taobao` varchar(200) DEFAULT '',
  `vendor_img_loc` varchar(200) DEFAULT '',
  `vendor_adver_loc` varchar(200) DEFAULT '',
  `vendor_desc` varchar(1000) DEFAULT '',
  `info_leader` varchar(200) DEFAULT '',
  `vendor_lable` varchar(200) DEFAULT '',
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor_info
-- ----------------------------
INSERT INTO `vendor_info` VALUES ('1', 'smartspace', '18623235566', '', '', '', '', '', '', 'templates/Images/trace/qrcode_weibo.jpg', 'templates/Images/trace/qrcode_weibo.jpg', 'templates/UpFiles/Vendor/auth/201512141459257739.jpeg', 'templates/UpFiles/Vendor/auth/201512141459251064.jpeg', '我们是smartspace的一员。。。。', '王安卓', '');
INSERT INTO `vendor_info` VALUES ('95', '再见', '1111111', '12', '1', '12', '12', '12', '12', '12', '12', '121', '12', '12', '12', '12');
INSERT INTO `vendor_info` VALUES ('96', '崔健', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `vendor_info` VALUES ('97', '哈哈', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `vendor_info` VALUES ('98', 'test', '18602919699', '', '', '', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `vendor_info` VALUES ('99', 'test1', '', '', '123@163.com', '', '', '', '', '', '', '', '', '', '', '');

-- ----------------------------
-- Table structure for `vendor_member`
-- ----------------------------
DROP TABLE IF EXISTS `vendor_member`;
CREATE TABLE `vendor_member` (
  `member_id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_id` int(11) NOT NULL,
  `member_name` varchar(200) NOT NULL,
  `member_img_loc` varchar(200) NOT NULL,
  `member_position` varchar(200) NOT NULL,
  `member_profile` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor_member
-- ----------------------------
INSERT INTO `vendor_member` VALUES ('1', '1', '毛泽东', 'templates/UpFiles/Vendor/members/mrmao.jpg', '杰西服装有限责任公司董事长', '&nbsp;&nbsp;&nbsp;&nbsp;华为技术有限公司是一家生产销售通信设备的民营通信科技公司，总部位于中国广东省深圳市龙岗区坂田华为基地。华为的产品主要涉及通信网络中的交换网络、传输网络、无线及有线固定接入网络和数据通信网络及无线终端产品，为世界各地通信运营商及专业网络拥有者提供硬件设备、软件、服务和解决方案。华为于1987年在中国深圳正式注册成立。');
INSERT INTO `vendor_member` VALUES ('2', '1', '周恩来', 'templates/UpFiles/Vendor/members/mrzhou.jpg', '杰西服装有限责任公司CEO', '&nbsp;&nbsp;&nbsp;&nbsp;华为技术有限公司是一家生产销售通信设备的民营通信科技公司，总部位于中国广东省深圳市龙岗区坂田华为基地。华为的产品主要涉及通信网络中的交换网络、传输网络、无线及有线固定接入网络和数据通信网络及无线终端产品，为世界各地通信运营商及专业网络拥有者提供硬件设备、软件、服务和解决方案。华为于1987年在中国深圳正式注册成立。');
