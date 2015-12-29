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
   varieties_id         int not null comment 'Ʒ��id',
   primary key (crops_id, varieties_id)
);

alter table crops_varieties comment '����Ʒ�ֶ�Ӧ��';

/*==============================================================*/
/* Table: enterprise_certi                                      */
/*==============================================================*/
create table enterprise_certi
(
   certi_id             int not null auto_increment comment 'id',
   certi_name           varchar(20) comment '�̼�����',
   certi_lincense_loc   varchar(20) comment '�̼�Ӫҵִ��ͼƬ��ַ',
   certi_ispass         int comment '�̼���֤�Ƿ�ͨ��',
   primary key (certi_id)
);

alter table enterprise_certi comment '�̼���֤��Ϣ';

/*==============================================================*/
/* Table: environment_data                                      */
/*==============================================================*/
create table environment_data
(
   environment_id       int not null auto_increment comment 'id',
   product_id           int comment '��Ʒid',
   data_type            int comment '�������ͣ������¶ȣ�����ʪ�ȣ������¶ȵȵȣ�',
   first_data           float comment '������1',
   second_data          float comment '������2',
   third_data           float comment '������3',
   primary key (environment_id)
);

alter table environment_data comment '�ؼ��������ݱ�';

/*==============================================================*/
/* Table: fertilizer_pesticides_use                             */
/*==============================================================*/
create table fertilizer_pesticides_use
(
   use_id               int not null auto_increment comment 'id',
   use_time             timestamp comment 'ʹ��ʱ��',
   use_name             varchar(20) comment '����',
   use_level            varchar(20) comment '����',
   use_brand            varchar(20) comment 'Ʒ��',
   use_suppliers        varchar(20) comment '��Ӧ��',
   use_type             int comment 'ʹ�����ͣ�0������ϣ�1����ũҩ',
   primary key (use_id)
);

alter table fertilizer_pesticides_use comment '����ũҩʹ�ñ�';

/*==============================================================*/
/* Table: planting_crops                                        */
/*==============================================================*/
create table planting_crops
(
   crops_id             int not null auto_increment comment 'id',
   crops_desc           varchar(20) comment '��������',
   primary key (crops_id)
);

alter table planting_crops comment '��ֲ�����';

/*==============================================================*/
/* Table: planting_varieties                                    */
/*==============================================================*/
create table planting_varieties
(
   varieties_id         int not null auto_increment comment 'id',
   varisties_desc       varchar(20) comment 'Ʒ������',
   primary key (varieties_id)
);

alter table planting_varieties comment 'Ʒ�ֱ�';

/*==============================================================*/
/* Table: policy                                                */
/*==============================================================*/
create table policy
(
   policy_id            int not null auto_increment comment 'id',
   policy_title         varchar(20) comment '���߱���',
   policy_time          timestamp comment '����ʱ��',
   policy_source        varchar(20) comment '������Դ',
   policy_content       varchar(1000) comment '��������',
   policy_editor        varchar(20) comment '���߱༭',
   policy_isdelete      tinyint comment '�����Ƿ���ɾ��',
   primary key (policy_id)
);

/*==============================================================*/
/* Table: product                                               */
/*==============================================================*/
create table product
(
   product_id           int not null auto_increment comment 'id',
   vendor_id            int comment '�̼�id',
   basicinfo_id         int not null comment '��Ʒ������Ϣid',
   growthing_img_list   varchar(200) comment '������ͼƬ��ַ�б�',
   fertilizer_list      varchar(200) comment '����ʹ�����id�����б�',
   pesticides_list      varchar(200) comment 'ũҩʹ�����id�����б�',
   video_loc            varchar(20) comment 'ʵʱ�����Ƶ��ַ',
   environment_data_exist smallint comment '���������Ƿ����',
   product_certi_list   varchar(200) comment '��Ʒ��֤id�����б�',
   product_intro        varchar(200) comment '��Ʒ���',
   webbuy_info_list     varchar(200) comment '���깺����Ϣ�б�',
   physicbuy_info_list  varchar(200) comment 'ʵ��깺����Ϣ�б�',
   salesman_info_list   varchar(200) comment '������Ա��Ϣ',
   product_type         int comment '��Ʒ����',
   product_label        varchar(20),
   primary key (product_id)
);

alter table product comment '��Ʒ��';

/*==============================================================*/
/* Table: product_basicinfo                                     */
/*==============================================================*/
create table product_basicinfo
(
   basicinfo_id         int not null auto_increment comment 'id',
   basicinfo_img_loc    varchar(20) comment '��ƷͼƬ��ַ',
   basicinfo_crops_index int comment '��������id',
   basicinfo_varieties_index int comment 'Ʒ������id',
   basicinfo_season     varchar(20) comment '��ֲ����',
   basicinfo_representative varchar(20) comment '������',
   basicinfo_remark     varchar(200) comment '��ע',
   primary key (basicinfo_id)
);

alter table product_basicinfo comment '��Ʒ������Ϣ';

/*==============================================================*/
/* Table: product_buy_address                                   */
/*==============================================================*/
create table product_buy_address
(
   buy_id               int not null auto_increment comment 'id',
   buy_type             smallint comment '�������ͣ�0:�������ӣ�1��ʵ����ַ��',
   buy_desc             varchar(200) comment '������Ϣ����',
   primary key (buy_id)
);

alter table product_buy_address comment '����ʵ��깺���';

/*==============================================================*/
/* Table: product_certi                                         */
/*==============================================================*/
create table product_certi
(
   certi_id             int not null auto_increment comment 'id',
   certi_type_index     int comment '֤����������',
   certi_date           timestamp comment '֤���֤����',
   certi_num            varchar(20) comment '֤����',
   certi_valid          timestamp comment '֤����Ч����',
   certi_awarddepart    varchar(20) comment '��֤����',
   certi_imgloclist     varchar(200) comment '֤��ͼƬ��ַ�б�',
   primary key (certi_id)
);

alter table product_certi comment '��Ʒ��֤��';

/*==============================================================*/
/* Table: product_certi_type                                    */
/*==============================================================*/
create table product_certi_type
(
   certi_id             int not null auto_increment comment 'id',
   certi_desc           varchar(20) comment '֤����������',
   primary key (certi_id)
);

alter table product_certi_type comment '��Ʒ֤������';

/*==============================================================*/
/* Table: product_salesman_info                                 */
/*==============================================================*/
create table product_salesman_info
(
   salesman_id          int not null auto_increment comment 'id',
   salesman_name        varchar(20) comment '������Ա����',
   salesman_tele        varchar(20) comment '������Ա�绰',
   primary key (salesman_id)
);

alter table product_salesman_info comment '��Ʒ������Ϣ��';

/*==============================================================*/
/* Table: vendor                                                */
/*==============================================================*/
create table vendor
(
   vendor_id            int not null auto_increment comment '�̼�id',
   vendor_name          varchar(20) comment '�̼��û���',
   vendor_pass          varchar(20) comment '�̼�����',
   vendor_certi_id      int comment '�̼���֤��Ϣid',
   vendor_info_id       int comment '�̼���ϵ��Ϣid',
   vendor_iden_id       int comment '�û������֤��Ϣid',
   vendor_isadmin       smallint comment '�Ƿ��ǹ���Ա',
   vendor_type          int comment '�̼ҷ���',
   primary key (vendor_id)
);

alter table vendor comment '�̼��˻���Ϣ��';

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

alter table vendor_iden comment '�̼������֤';

/*==============================================================*/
/* Table: vendor_info                                           */
/*==============================================================*/
create table vendor_info
(
   info_id              int not null auto_increment comment 'id',
   info_name            varchar(20) comment '�̼��ǳ�',
   info_tele            varchar(20) comment '�̼ҵ绰',
   info_mobile          varchar(20) comment '�̼��ֻ�',
   info_fax             varchar(20) comment '�̼Ҵ���',
   info_email           varchar(20) comment '�̼ҵ����ʼ�',
   info_address         varchar(20) comment '�̼ҵ�ַ',
   info_qq              varchar(20) comment '�̼�qq',
   info_taoblink        varchar(20) comment '�̼��Ա�����',
   info_weixin          varchar(20) comment '�̼�΢�ź�',
   primary key (info_id)
);

alter table vendor_info comment '�̼���ϵϤ��Ϣ';

