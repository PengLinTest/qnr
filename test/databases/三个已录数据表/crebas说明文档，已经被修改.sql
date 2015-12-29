/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2015/10/13 11:35:12                          */
/*==============================================================*/


drop table if exists crops_varieties;

drop table if exists enterprise_certi;

drop table if exists environment_data;

drop table if exists fertilizer_pesticides_use;

drop table if exists planting_crops;

drop table if exists planting_varieties;

drop table if exists policy;

drop table if exists product;

drop table if exists product_basicinfo;

drop table if exists product_buy_address;

drop table if exists product_certi;

drop table if exists product_certi_type;

drop table if exists product_salesman_info;

drop table if exists vendor;

drop table if exists vendor_iden;

drop table if exists vendor_info;

/*==============================================================*/
/* Table: crops_varieties                                       */
/*==============================================================*/
create table crops_varieties
(
   crops_id             int not null comment 'id',
   varieties_id         int not null comment '品种id',
   primary key (crops_id, varieties_id)
);

alter table crops_varieties comment '作物品种对应表';

/*==============================================================*/
/* Table: enterprise_certi                                      */
/*==============================================================*/
create table enterprise_certi
(
   certi_id             int not null auto_increment comment 'id',
   certi_name           varchar(20) comment '商家名称',
   certi_lincense_loc   varchar(20) comment '商家营业执照图片地址',
   certi_ispass         int comment '商家认证是否通过',
   primary key (certi_id)
);

alter table enterprise_certi comment '商家认证信息';

/*==============================================================*/
/* Table: environment_data                                      */
/*==============================================================*/
create table environment_data
(
   environment_id       int not null auto_increment comment 'id',
   product_id           int comment '产品id',
   data_type            int comment '数据类型（空气温度，空气湿度，土壤温度等等）',
   first_data           float comment '数据域1',
   second_data          float comment '数据域2',
   third_data           float comment '数据域3',
   primary key (environment_id)
);

alter table environment_data comment '关键环境数据表';

/*==============================================================*/
/* Table: fertilizer_pesticides_use                             */
/*==============================================================*/
create table fertilizer_pesticides_use
(
   use_id               int not null auto_increment comment 'id',
   use_time             timestamp comment '使用时间',
   use_name             varchar(20) comment '名称',
   use_level            varchar(20) comment '用量',
   use_brand            varchar(20) comment '品牌',
   use_suppliers        varchar(20) comment '供应商',
   use_type             int comment '使用类型，0代表肥料，1代表农药',
   primary key (use_id)
);

alter table fertilizer_pesticides_use comment '肥料农药使用表';

/*==============================================================*/
/* Table: planting_crops                                        */
/*==============================================================*/
create table planting_crops
(
   crops_id             int not null auto_increment comment 'id',
   crops_desc           varchar(20) comment '作物名称',
   primary key (crops_id)
);

alter table planting_crops comment '种植作物表';

/*==============================================================*/
/* Table: planting_varieties                                    */
/*==============================================================*/
create table planting_varieties
(
   varieties_id         int not null auto_increment comment 'id',
   varisties_desc       varchar(20) comment '品种描述',
   primary key (varieties_id)
);

alter table planting_varieties comment '品种表';

/*==============================================================*/
/* Table: policy                                                */
/*==============================================================*/
create table policy
(
   policy_id            int not null auto_increment comment 'id',
   policy_title         varchar(20) comment '政策标题',
   policy_time          timestamp comment '政策时间',
   policy_source        varchar(20) comment '政策来源',
   policy_content       varchar(1000) comment '政策内容',
   policy_editor        varchar(20) comment '政策编辑',
   policy_isdelete      tinyint comment '政策是否已删除',
   primary key (policy_id)
);

/*==============================================================*/
/* Table: product                                               */
/*==============================================================*/
create table product
(
   product_id           int not null auto_increment comment 'id',
   vendor_id            int comment '商家id',
   basicinfo_id         int not null comment '产品基本信息id',
   growthing_img_list   varchar(200) comment '生长期图片地址列表',
   fertilizer_list      varchar(200) comment '肥料使用情况id索引列表',
   pesticides_list      varchar(200) comment '农药使用情况id索引列表',
   video_loc            varchar(20) comment '实时监控视频地址',
   environment_data_exist smallint comment '环境数据是否存在',
   product_certi_list   varchar(200) comment '产品认证id索引列表',
   product_intro        varchar(200) comment '产品简介',
   webbuy_info_list     varchar(200) comment '网店购买信息列表',
   physicbuy_info_list  varchar(200) comment '实体店购买信息列表',
   salesman_info_list   varchar(200) comment '销售人员信息',
   product_type         int comment '产品分类',
   product_label        varchar(20),
   primary key (product_id)
);

alter table product comment '产品表';

/*==============================================================*/
/* Table: product_basicinfo                                     */
/*==============================================================*/
create table product_basicinfo
(
   basicinfo_id         int not null auto_increment comment 'id',
   basicinfo_img_loc    varchar(20) comment '产品图片地址',
   basicinfo_crops_index int comment '作物索引id',
   basicinfo_varieties_index int comment '品种索引id',
   basicinfo_season     varchar(20) comment '种植季次',
   basicinfo_representative varchar(20) comment '负责人',
   basicinfo_remark     varchar(200) comment '备注',
   primary key (basicinfo_id)
);

alter table product_basicinfo comment '产品基本信息';

/*==============================================================*/
/* Table: product_buy_address                                   */
/*==============================================================*/
create table product_buy_address
(
   buy_id               int not null auto_increment comment 'id',
   buy_type             smallint comment '购买类型（0:网店链接；1：实体店地址）',
   buy_desc             varchar(200) comment '购买信息描述',
   primary key (buy_id)
);

alter table product_buy_address comment '网店实体店购买表';

/*==============================================================*/
/* Table: product_certi                                         */
/*==============================================================*/
create table product_certi
(
   certi_id             int not null auto_increment comment 'id',
   certi_type_index     int comment '证书类型索引',
   certi_date           timestamp comment '证书颁证日期',
   certi_num            varchar(20) comment '证书编号',
   certi_valid          timestamp comment '证书有效日期',
   certi_awarddepart    varchar(20) comment '颁证机构',
   certi_imgloclist     varchar(200) comment '证书图片地址列表',
   primary key (certi_id)
);

alter table product_certi comment '产品认证表';

/*==============================================================*/
/* Table: product_certi_type                                    */
/*==============================================================*/
create table product_certi_type
(
   certi_id             int not null auto_increment comment 'id',
   certi_desc           varchar(20) comment '证书类型描述',
   primary key (certi_id)
);

alter table product_certi_type comment '产品证书类型';

/*==============================================================*/
/* Table: product_salesman_info                                 */
/*==============================================================*/
create table product_salesman_info
(
   salesman_id          int not null auto_increment comment 'id',
   salesman_name        varchar(20) comment '销售人员名字',
   salesman_tele        varchar(20) comment '销售人员电话',
   primary key (salesman_id)
);

alter table product_salesman_info comment '产品销售信息表';

/*==============================================================*/
/* Table: vendor                                                */
/*==============================================================*/
create table vendor
(
   vendor_id            int not null auto_increment comment '商家id',
   vendor_name          varchar(20) comment '商家用户名',
   vendor_pass          varchar(20) comment '商家密码',
   vendor_certi_id      int comment '商家认证信息id',
   vendor_info_id       int comment '商家联系信息id',
   vendor_iden_id       int comment '用户身份认证信息id',
   vendor_isadmin       smallint comment '是否是管理员',
   vendor_type          int comment '商家分类',
   primary key (vendor_id)
);

alter table vendor comment '商家账户信息表';

/*==============================================================*/
/* Table: vendor_iden                                           */
/*==============================================================*/
create table vendor_iden
(
   iden_id              int not null auto_increment,
   iden_license_loc     varchar(20),
   iden_ispass          int,
   primary key (iden_id)
);

alter table vendor_iden comment '商家身份认证';

/*==============================================================*/
/* Table: vendor_info                                           */
/*==============================================================*/
create table vendor_info
(
   info_id              int not null auto_increment comment 'id',
   info_name            varchar(20) comment '商家昵称',
   info_tele            varchar(20) comment '商家电话',
   info_mobile          varchar(20) comment '商家手机',
   info_fax             varchar(20) comment '商家传真',
   info_email           varchar(20) comment '商家电子邮件',
   info_address         varchar(20) comment '商家地址',
   info_qq              varchar(20) comment '商家qq',
   info_taoblink        varchar(20) comment '商家淘宝链接',
   info_weixin          varchar(20) comment '商家微信号',
   primary key (info_id)
);

alter table vendor_info comment '商家联系悉信息';

