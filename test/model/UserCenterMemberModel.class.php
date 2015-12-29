<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoBase.class.php';
require_once 'dao/DaoVendorMember.class.php';

class UserCenterMemberModel{
	
	public function getVendorMember($vendorID){
		return (new DaoVendorMember)->getVendorMemberListByVendorId($vendorID);
	}
	public function deleteVendorMember($memberID){
		return (new DaoVendorMember)->deletefromBase(array("member_id = " => $memberID));
	}
	public function getVendorMemberInfoByMemberID($memberID){
		return (new DaoVendorMember)->getVendorMemberByMemberId($memberID);
	}
	public function updateVendorMemberInfo($member){
		$data = array("member_name" => $member['member_name'],"member_position" => $member['member_position'],
				"member_profile" => $member['member_profile']
		);
		//判断图像是否需要修改
		if($member['member_img_loc'] != null){
			$data['member_img_loc'] = $member['member_img_loc']; 
		}
		$where = array("member_id =" => $member['member_id']);
		return (new DaoVendorMember())->update($data,$where);
	}
	public function addVendorMemberInfo($member){
		$data = array("vendor_id" => $member['vendor_id']
				,"member_img_loc" => $member['member_img_loc']
				,"member_name" => $member['member_name']
				,"member_position" => $member['member_position']
				,"member_profile" => $member['member_profile']
		);
		return (new DaoVendorMember())->insert($data);
	}
}