/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : qnr_database

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2015-10-21 09:57:54
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
  `product_id` int(11) DEFAULT NULL,
  `data_type` int(11) DEFAULT NULL,
  `first_data` float DEFAULT NULL,
  `second_data` float DEFAULT NULL,
  `third_data` float DEFAULT NULL,
  PRIMARY KEY (`environment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of environment_data
-- ----------------------------

-- ----------------------------
-- Table structure for `fertilizer_pesticides_use`
-- ----------------------------
DROP TABLE IF EXISTS `fertilizer_pesticides_use`;
CREATE TABLE `fertilizer_pesticides_use` (
  `use_id` int(11) NOT NULL AUTO_INCREMENT,
  `use_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `use_name` varchar(20) DEFAULT NULL,
  `use_level` varchar(20) DEFAULT NULL,
  `use_brand` varchar(20) DEFAULT NULL,
  `use_suppliers` varchar(20) DEFAULT NULL,
  `use_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`use_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fertilizer_pesticides_use
-- ----------------------------

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
  `policy_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '政策时间',
  `policy_source` varchar(10) DEFAULT NULL COMMENT '政策来源',
  `policy_content` text COMMENT '政策内容',
  `policy_editor` varchar(20) DEFAULT NULL COMMENT '政策编辑',
  `policy_isdelete` tinyint(4) DEFAULT NULL COMMENT '政策是否已删除',
  PRIMARY KEY (`policy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of policy
-- ----------------------------
INSERT INTO `policy` VALUES ('1', '习近平接受《华尔街日报》采访', '1', '2015-10-14 13:23:31', '新浪网', '新华网北京9月22日电 在对美国进行国事访问前夕，国家主席习近平9月22日接受了美国《华尔街日报》书面采访，就中美关系、两国在亚太及国际地区事务中的合作、两国人民交往、完善全球治理体系、中国经济形势、中国全面深化改革、外国企业在华投资、中国互联网政策、反腐败等回答了提问。\r\n\r\n在回答关于亚洲基础设施投资银行、完善全球治理结构等问题的提问时，习近平指出，全球治理体系是由全球共建共享的，不可能由哪一个国家独自掌握。中国没有这种想法，也不会这样做。中国是现行国际体系的参与者、建设者、贡献者，一直维护以联合国为核心、以联合国宪章宗旨和原则为基础的国际秩序和国际体系。\r\n\r\n世界上很多有识之士都认为，随着世界不断发展变化，随着人类面临的重大跨国性和全球性挑战日益增多，有必要对全球治理体制机制进行相应的调整改革。这种改革并不是推倒重来，也不是另起炉灶，而是创新完善。“穷则变，变则通。”无论是一个国家，还是世界，都需要与时俱进，这样才能保持活力。推动全球治理体系朝着更加公正合理有效的方向发展，符合世界各国的普遍需求。中美在全球治理领域有着广泛共同利益，应该共同推动完善全球治理体系。这不仅有利于双方发挥各自优势、加强合作，也有利于双方合作推动解决人类面临的重大挑战。\r\n\r\n中国几十年的发展很大程度上得益于国际合作。因此，我们应该为国际发展事业作出贡献，很多发展中国家朋友对中国提出了这方面的强烈愿望。建立亚投行，主要是为满足亚洲地区基础设施建设的需求以及亚洲各国在深化合作方面的愿望。据世行、亚开行测算，2010年到2020年，亚洲地区每年基础设施建设资金缺口达8000亿美元。亚投行可以为这种需求多提供一种资金投入选择，因而受到亚洲国家和国际社会欢迎。面对这么大的需求，亚投行只是一个渠道，不可能包打天下。亚投行是一个开放和包容的多边开发机构，将同现有多边开发银行相互补充。除了域内国家，德国、法国、英国等国家也都加入了亚投行。中方欢迎美国参与亚投行，从一开始我们就是这个态度。\r\n\r\n我不认为世界上哪个国家可以使全球治理结构向自己倾斜，也不认为这样做是符合时代潮流的。全球治理结构如何完善，应该由各国共同来决定。联合国马上就要举行成立70周年系列峰会。中国愿同广大成员国一道，推动建设以合作共赢为核心的新型国际关系，完善全球治理结构，共同构建人类命运共同体。\r\n\r\n在回答关于中国在处理地区和国际事务的政策立场等问题的提问时，习近平强调，中国奉行独立自主的和平外交政策，愿意为维护世界和平、促进共同发展作出努力。当今世界，中国不可能独善其身，只有世界好，中国才能好。在推动世界经济复苏、政治解决国际和地区热点、应对各种全球性问题和挑战等方面，中国都没有缺席。这是国际社会的希望，也是中国的责任。\r\n\r\n中美两国都是联合国安理会常任理事国，肩负着维护世界和地区和平与安全的重要责任，存在广泛共同利益。中方愿同美方携手应对重大全球和地区性问题，已经做了很多事，还将继续做下去。中美在应对朝核、伊朗核、巴以和谈、南苏丹、气候变化、重大传染性疾病等一系列国际和地区问题及全球性挑战方面开展了密切协调和合作。当然，中美在处理一些问题时思路和方法并不完全一致，有不同才能相互补益，找到问题的最佳解决方案。\r\n\r\n在处理国际和地区事务时，中国坚持平等、公平、正义，倡导以和为贵，主张通过和平谈判政治解决有关问题。处理国际和地区事务，应该根据事情本身的是非曲直决定立场和政策，说公道话，办公道事。我们不赞成强行干涉别国内政，认为很多事情应该商量着办。不管遇到多么大的困难、多么复杂的情况，国际社会都应该坚定信心，持之以恒坚持和平努力。\r\n\r\n伊朗核问题政治解决取得重大成果，中美为此进行了共同努力。这说明我们的主张和方法是有效的。中方将同各方一道，推动全面协议得到有效落实。\r\n\r\n中方坚持朝鲜半岛无核化的立场是坚定的、明确的，同时我们认为应该通过和平手段实现半岛无核化、维护半岛和平稳定。当前，半岛局势复杂敏感。中方愿同美方及相关各方继续就妥善处理半岛事务、实现东北亚地区长治久安等问题保持密切沟通和协调。\r\n\r\n在回答关于中国梦、中国梦和美国梦的异同等问题的提问时，习近平指出，中国梦最根本的是实现中国人民的美好生活。关于这个问题，需要从历史和现实两个向度来认识。1840年鸦片战争之后，中华民族经历了长达一个世纪的社会动荡、外族侵略、战争磨难，但中国人民始终自强不息、顽强斗争，从未放弃对美好梦想的向往和追求。看待当今中国，一定要深刻认识中国近代以后所遭受的民族苦难，一定要深刻认识这种长期的民族苦难给中国人民精神世界带来的深刻影响。所以我们说，实现中华民族伟大复兴的中国梦是近代以来中华民族最伟大的梦想。中国梦是中华民族的梦，也是每个中国人的梦。中国梦不是镜中花、水中月，不是空洞的口号，其最深沉的根基在中国人民心中。\r\n\r\n每个国家、每个民族都有自己的梦想。有梦想才有希望。上次访美时，我在艾奥瓦州马斯卡廷的老朋友们也向我提起他们的梦想。我深深感到，各国人民包括美国人民都对未来有着共同梦想：世界和平，社会安宁，生活富足。当然，由于历史文化、发展阶段的不同，中国梦、美国梦以及其他国家人民的梦想内涵不尽相同，实现的具体途径和方式也可能不完全一样。条条大路通罗马。各国人民对梦想的追求，不论有什么异同，都是激励他们顽强奋斗的强大动力，也为中美合作和各国合作提供了重要机遇。\r\n\r\n在回答关于南海、网络安全、维系中美关系的重要因素等问题的提问时，习近平强调，看待中美关系，要看大局，不能只盯着两国之间的分歧，正所谓“得其大者可以兼其小”。中美两国经济总量占世界三分之一、人口占世界四分之一、贸易总量占世界五分之一。这两个“大块头”不合作，世界会怎样？历史和现实都表明，中美两国合则两利、斗则俱伤。2013年夏天，我同奥巴马总统在加利福尼亚州安纳伯格庄园举行会晤，作出共同构建中美新型大国关系的战略抉择，其核心内容就是不冲突、不对抗、相互尊重、合作共赢。两年多来，围绕这一共识，两国各领域交流合作日益深化，水平不断提升，双方就几乎所有重大国际和地区问题及全球性挑战保持着密切有效的沟通和协调。事实证明，中美两国利益已日趋紧密地联系在一起，两国关系发展不仅造福两国人民，也有力促进了亚太地区和世界和平、稳定、发展。\r\n\r\n当然，一个家庭还会有这样那样的矛盾，中美两国难免会存在一些分歧。双方要相互理解、相互尊重、聚同化异，尊重和照顾彼此核心利益和重大关切。对可以解决的问题，双方要相向而行，共同努力加以解决。对一时解决不了的问题，要以建设性方式善加管控，防止激化或升级，防止对两国总体关系和符合两国人民利益的合作大局造成干扰。\r\n\r\n南沙群岛自古以来就是中国的领土，我们对此有着充足的历史和法理依据。中国对南沙部分驻守岛礁进行了相关建设和设施维护，不影响也不针对任何国家，不应过度解读。中方岛礁建设主要是为了改善岛上人员工作生活条件，并提供相应国际公共产品服务，也有助于进一步维护南海航行自由和安全。', '青犀', '0');
INSERT INTO `policy` VALUES ('2', '人民日报谈李嘉诚撤资事件与其挽留不如目送', '1', '2015-10-13 18:16:09', null, null, null, '0');
INSERT INTO `policy` VALUES ('3', '河南警察派出所门口枪指女子', '1', '2015-10-13 19:25:45', null, null, null, '0');
INSERT INTO `policy` VALUES ('4', '自媒体补贴只能救急不能救穷', '1', '2015-10-13 19:25:49', null, null, null, '0');
INSERT INTO `policy` VALUES ('5', '老师写给一对情侣的话 太暖心了', '1', '2015-10-13 19:26:20', null, null, null, '0');
INSERT INTO `policy` VALUES ('6', '明星熊猫盼盼迎来“百岁”生日', '3', '2015-10-13 18:16:12', null, null, null, '0');
INSERT INTO `policy` VALUES ('7', '一到夏天就会长出20厘米的神奇建筑', '3', '2015-10-13 18:16:13', null, null, null, '0');
INSERT INTO `policy` VALUES ('8', '水獭这动物，简直就是行走的表情包', '4', '2015-10-13 18:16:14', null, null, null, '0');
INSERT INTO `policy` VALUES ('9', '校服自带闪瞎技能 还能愉快地逃课吗', '4', '2015-10-13 18:16:18', null, null, null, '0');
INSERT INTO `policy` VALUES ('10', '习近平访英部分食谱曝光 不吃参鲍鱼翅鱼翅', '4', '2015-10-13 18:16:16', null, null, null, '0');

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_id` int(11) DEFAULT NULL,
  `growthing_img_list` varchar(200) DEFAULT NULL,
  `fertilizer_list` varchar(200) DEFAULT NULL,
  `pesticides_list` varchar(200) DEFAULT NULL,
  `video_loc` varchar(20) DEFAULT NULL,
  `environment_data_exist` smallint(6) DEFAULT NULL,
  `product_certi_list` varchar(200) DEFAULT NULL,
  `product_intro` varchar(200) DEFAULT NULL,
  `webbuy_info_list` varchar(200) DEFAULT NULL,
  `physicbuy_info_list` varchar(200) DEFAULT NULL,
  `salesman_info_list` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '1', '1', '1', '1', null, null, '1,2', 'myself阳光玫瑰为欧美杂交种，果面有光泽，果粉少；果肉鲜脆多汁，有玫瑰香味。吃了阳光玫瑰，其他葡萄无味，可谓葡萄之王哦。', null, null, null);

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
  `basicinfo_time` timestamp NULL DEFAULT NULL,
  `basicinfo_type` int(11) DEFAULT NULL,
  `basicinfo_lable` varchar(20) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`basicinfo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_basicinfo
-- ----------------------------
INSERT INTO `product_basicinfo` VALUES ('1', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', '2', '18', '第一季', '青犀', 'myself 测试玉米一年只出产一季稻谷，今年种植面积1000亩，数量有限，珍贵稀缺', '有机大米', '2015-10-15 09:36:40', '1', '大米,主食,干吃', '1');
INSERT INTO `product_basicinfo` VALUES ('2', 'templates/UpFiles/Attachments/6dae05bf-c637-41d0-9a38-15ea2a2c17d8_.jpg', '2', '18', '第一季', '青犀', '测试仔姜', '仔姜', '2015-10-15 09:38:05', '1', '姜 配料', '2');
INSERT INTO `product_basicinfo` VALUES ('3', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', '2', '12', 'ddd', 'ssss', 'ddd', '有机大米', '2015-10-15 13:09:15', '1', '大米,主食,干吃', '3');
INSERT INTO `product_basicinfo` VALUES ('4', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', null, null, null, null, null, '有机大米', '2015-10-15 16:46:23', null, null, '4');
INSERT INTO `product_basicinfo` VALUES ('5', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', null, null, null, null, null, '有机大米', '2015-10-15 16:46:26', null, null, '5');
INSERT INTO `product_basicinfo` VALUES ('6', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', null, null, null, null, null, '有机大米', '2015-10-15 16:46:28', null, null, '6');
INSERT INTO `product_basicinfo` VALUES ('7', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', null, null, null, null, null, '有机大米', '2015-10-15 16:46:31', null, null, '7');
INSERT INTO `product_basicinfo` VALUES ('8', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', null, null, null, null, null, '有机大米', '2015-10-15 16:46:33', null, null, '8');
INSERT INTO `product_basicinfo` VALUES ('9', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', null, null, null, null, null, '有机大米', '2015-10-15 16:46:35', null, null, '9');
INSERT INTO `product_basicinfo` VALUES ('10', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', null, null, null, null, null, '仔姜', '2015-10-15 16:46:37', null, null, '12');
INSERT INTO `product_basicinfo` VALUES ('11', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', null, null, null, null, null, '仔姜', '2015-10-15 16:46:39', null, null, '11');
INSERT INTO `product_basicinfo` VALUES ('12', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', null, null, null, null, null, '仔姜', '2015-10-15 16:46:42', null, null, '10');
INSERT INTO `product_basicinfo` VALUES ('13', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', null, null, null, null, null, '仔姜', '2015-10-15 16:46:44', null, '大米,主食,干吃', '31');
INSERT INTO `product_basicinfo` VALUES ('14', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', null, null, null, null, null, '仔姜', '2015-10-15 16:46:46', null, '大米,主食,干吃', '21');
INSERT INTO `product_basicinfo` VALUES ('15', 'templates/UpFiles/Attachments/2b5e44a6-c290-4632-8f5b-241eb9df4f4a_.jpg', null, null, null, null, null, '仔姜', '2015-10-15 16:46:48', null, '大米,主食,干吃', '11');

-- ----------------------------
-- Table structure for `product_buy_address`
-- ----------------------------
DROP TABLE IF EXISTS `product_buy_address`;
CREATE TABLE `product_buy_address` (
  `buy_id` int(11) NOT NULL AUTO_INCREMENT,
  `buy_type` smallint(6) DEFAULT NULL,
  `buy_desc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`buy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_buy_address
-- ----------------------------

-- ----------------------------
-- Table structure for `product_certi`
-- ----------------------------
DROP TABLE IF EXISTS `product_certi`;
CREATE TABLE `product_certi` (
  `certi_id` int(11) NOT NULL AUTO_INCREMENT,
  `certi_type_index` int(11) DEFAULT NULL,
  `certi_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `certi_num` varchar(50) DEFAULT NULL,
  `certi_valid` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `certi_awarddepart` varchar(50) DEFAULT NULL,
  `certi_imgloclist` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`certi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_certi
-- ----------------------------
INSERT INTO `product_certi` VALUES ('1', '1', '2015-10-20 11:28:39', '00001', '2015-10-23 11:27:44', '西安交通大学', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg,templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg');
INSERT INTO `product_certi` VALUES ('2', '2', '2015-10-20 19:58:50', '00002', '0000-00-00 00:00:00', '西安交通大学', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg,templates/UpFiles/Attachments/hero.jpg');

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
-- Table structure for `product_salesman_info`
-- ----------------------------
DROP TABLE IF EXISTS `product_salesman_info`;
CREATE TABLE `product_salesman_info` (
  `salesman_id` int(11) NOT NULL AUTO_INCREMENT,
  `salesman_name` varchar(20) DEFAULT NULL,
  `salesman_tele` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`salesman_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_salesman_info
-- ----------------------------

-- ----------------------------
-- Table structure for `vendor`
-- ----------------------------
DROP TABLE IF EXISTS `vendor`;
CREATE TABLE `vendor` (
  `vendor_id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_name` varchar(20) DEFAULT NULL,
  `vendor_pass` varchar(20) DEFAULT NULL,
  `vendor_certi_id` int(11) DEFAULT NULL,
  `vendor_info_id` int(11) DEFAULT NULL,
  `vendor_iden_id` int(11) DEFAULT NULL,
  `vendor_isadmin` tinyint(6) DEFAULT NULL,
  `vendor_isdelete` int(11) DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor
-- ----------------------------
INSERT INTO `vendor` VALUES ('1', 'smartspace', '123456', '2', '1', '1', '0', '0');

-- ----------------------------
-- Table structure for `vendor_auth`
-- ----------------------------
DROP TABLE IF EXISTS `vendor_auth`;
CREATE TABLE `vendor_auth` (
  `auth_id` int(11) NOT NULL AUTO_INCREMENT,
  `auth_license_loc` varchar(100) DEFAULT NULL,
  `auth_ispass` int(11) DEFAULT NULL,
  `auth_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`auth_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor_auth
-- ----------------------------
INSERT INTO `vendor_auth` VALUES ('1', 'templates/UpFiles/Attachments/d9c99b6c-0bc3-4f87-adc3-964ccfbef6c9_.jpg', '0', '0');
INSERT INTO `vendor_auth` VALUES ('2', 'templates/UpFiles/Attachments/8cde3ba3-aabd-40d3-a5c6-bc7ff989615e_.jpg', '1', '1');

-- ----------------------------
-- Table structure for `vendor_info`
-- ----------------------------
DROP TABLE IF EXISTS `vendor_info`;
CREATE TABLE `vendor_info` (
  `info_id` int(11) NOT NULL AUTO_INCREMENT,
  `info_name` varchar(20) DEFAULT NULL,
  `info_tele` varchar(20) DEFAULT NULL,
  `info_mobile` varchar(20) DEFAULT NULL,
  `info_fax` varchar(20) DEFAULT NULL,
  `info_email` varchar(20) DEFAULT NULL,
  `info_address` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vendor_info
-- ----------------------------
