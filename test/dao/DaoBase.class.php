<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:19:33
 */

class DaoBase {
    protected $table_name; 
    private $mysqli;
    protected static $database = "qnr_database";
    protected static $username = "root";
    protected static $pwd = "root";
    protected static $host = "localhost";
    public function __construct()
    {
        if(empty($this->table_name)){
            die('table_name is null');
        }
        $this->getDbConnect();
    }

    public function __destruct(){
        $this->mysqli->close();
    }

    public function getDbConnect(){
        $this->mysqli = new mysqli(self::$host,self::$username,self::$pwd,self::$database);
        $this->mysqli->set_charset("utf8");
        if (mysqli_connect_errno()) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
    }
    //事务连接
    public static function _getConn(){
    	$conn = mysql_connect(self::$host,self::$username,self::$pwd);
    	if(!$conn){
    		echo "数据库连接失败";
    		exit();	
    	}
    	mysql_select_db(self::$database,$conn);
    	mysql_query("set names 'utf8'"); //使用utf8中文编码;
    	return $conn;
    }
    
    public static function _closeConn($conn){
    	mysql_close($conn);
    }

    protected function select($filed,$where = false,$endWith = false){
	
        if(empty($filed)){
            return false;
        }
        $filed = self::createFiled($filed);
        $where = self::createWhere($where);
        $sql = "select " . $filed . " from ". $this->table_name ." ". $where ." ".$endWith;
        $result = $this->mysqli->query($sql);
        $result = self::fomatSqlResult($result);
        return $result;
    }
    
    protected function selectBySql($sql){
    	if(empty($sql)){
    		return false;
    	}
    	$result = $this->mysqli->query($sql);
    	$result = self::fomatSqlResult($result);
    
    	return $result;
    }

    protected function getCount($where,$endWith=false){
   
        $where = self::createWhere($where);

        $sql = "select count(*) as total from ". $this->table_name ." ". $where." ".$endWith;
        $result = $this->mysqli->query($sql);
        $result = self::fomatSqlResult($result);

        return $result[0]['total'];
    }
    public function insert($data){
        $filed = "(";
        $values = "(";

        foreach ($data as $k => $v) {
            $filed .= "`$k`,";
            $values .= "'$v',";
        }
        $filed = trim($filed,',') . ")";
        $values = trim($values,',') . ")";
        
        $insert = "insert into " . $this->table_name  . $filed  . "values" . $values;
        
        //返回boolean
        $result = $this->mysqli->query($insert);
        return $result;
    }
    //事务的执行方法
    public function insertTransaction($data,$conn){
    	$filed = "(";
    	$values = "(";
    
    	foreach ($data as $k => $v) {
    		$filed .= "`$k`,";
    		$values .= "'$v',";
    	}
    	$filed = trim($filed,',') . ")";
    	$values = trim($values,',') . ")";
    
    	$insert = "insert into " . $this->table_name  . $filed  . "values" . $values;
    	//返回boolean
    	$result = mysql_query($insert,$conn);
    	return $result;
    }
    //
    public static function _getLastId($conn){
    	$result = -1;
    	$sql = "SELECT LAST_INSERT_ID()";
    	$query = mysql_query($sql,$conn);
    	$data = mysql_fetch_array($query);
    	if($data){
    		$result = $data[0];
    	}
    	return $result;
    }

    public function update($data,$where = false){
        $filed = "";
        foreach ($data as $k => $v) {
            $filed .= " $k = '$v',";
        }
        $filed = trim($filed,',') ;
        
        $where = self::createWhere($where);

        $update = "update " . $this->table_name . " set " . $filed . " " . $where;
        //返回boolean
        $result = $this->mysqli->query($update);
        return $result;
    }
    public function updateTransaction($conn,$data,$where = false){
    	$filed = "";
    	foreach ($data as $k => $v) {
    		$filed .= " $k = '$v',";
    	}
    	$filed = trim($filed,',') ;
    	
    	$where = self::createWhere($where);
    	
    	$update = "update " . $this->table_name . " set " . $filed . " " . $where;
    	//返回boolean
    	$result = mysql_query($update,$conn);
    	return $result;
    }

//     public function delete($where){
//         $data = array('is_deleted' => 1);
//         return $this->update($data,$where);
//     }
    public function deletefromBase($where){
    	$where = self::createWhere($where);
    
    	$update = "delete from " . $this->table_name." ". $where;
    	//返回boolean
    	$result = $this->mysqli->query($update);
    	return $result;
    }
    
    private static function fomatSqlResult($result){
        $ret = array();

        while($row = $result->fetch_assoc() ){ 
            $ret[]  = $row; 
        }
        return $ret;
    }
    private static function createFiled($filed){
        $sql = "";
        foreach ($filed as $key => $value) {
            $sql .= "`$value`,";
        }
        
        return trim($sql,',');;
    }
    private static function createWhere($where){
        if(empty($where)){
            return false;
        }
        $sql = " where ";
        foreach ($where as $key => $value) {
            $sql .= $key  . "'$value'" ." and ";
        }
        return trim($sql,' and');;
    }
}