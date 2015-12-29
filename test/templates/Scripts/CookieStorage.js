var CookieStorage;

if (!CookieStorage) {
    CookieStorage = {};
}

(function () { 
//	不清楚为什么，解开注释报错
//    $.cookie.json = true;

    CookieStorage = {
        set : function(name,value){
            $.cookie(name, value, { expires: 1 , path: '/'});
        },

        get : function(name){
            var result = $.cookie(name);

            return result;
        },

        remove : function(name){ 
            $.cookie(name, null, { expires: -1 , path: '/'});
        },

        clear : function(){
            
        },

        persist : function(name,value,expiredDays){
            $.cookie(name, value, { expires: expiredDays , path: '/'});
        }
    }
}())