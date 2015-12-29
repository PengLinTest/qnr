<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 14:38:07
 */
require_once DIR ."/smarty/libs/Smarty.class.php";
require_once DIR . "/lib/User.class.php";

class ActionBase  {
	public $need_login;
    public $tpl;
    public $user_info;
	public function __construct(){
        $this->user_info = User::_getVendor();
        $tplVar['user_info'] = $this->user_info;
        $this->tpl = new Smarty();
        $this->tpl->left_delimiter = "{{";
        $this->tpl->right_delimiter = "}}";
        $this->tpl->assign($tplVar);

        if($this->need_login == 1){
            $this->checkLogin();
        }
       
	}
    /**
     * 
     * @param  [type]
     * @return [type]
     */
    public function checkLogin(){
    	if(empty($this->user_info)){
            header('Location:?action=Index');
        }
    }
    
}