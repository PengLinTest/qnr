var Base;

if (!Base) {
    Base = {};
}

(function () {
    Base.sessionStorage = {
        //存储，窗口关闭则没有了
        storeSession: function (name, entity) {
            if (typeof sessionStorage == 'object') {
                sessionStorage.setItem(name, JSON.stringify(entity));
            }
            else {
                CookieStorage.set(name, JSON.stringify(entity));
            }
        },
        //获取 
        getSession: function (name) {
            if (typeof sessionStorage == 'object') {
                var session = sessionStorage.getItem(name);
                return JSON.parse(session);
            }
            else {
                return CookieStorage.get(name);
            }
        },

        //移除 
        removeSession: function (name) {
            if (typeof sessionStorage == 'object') {
                sessionStorage.removeItem(name);
            }
            //cookie 始终删除
            CookieStorage.remove(name);
        },

        //获取localStorage 对象，浏览器不同，实现不同
        getLocalStorage: function () {
            if (typeof localStorage == 'object') {
                return localStorage;
            } else if (typeof globalStorage == 'object') {
                return globalStorage[location.host];
            } else {
                return undefined;
            }
        },

        //存储持久化数据
        setPersistence: function (name, entity) {
            var lStorage = Base.sessionStorage.getLocalStorage();

            if (lStorage) {
                lStorage.setItem(name, JSON.stringify(entity));
            }
        },

        //获取持久化数据
        getPersistence: function (name, entity) {
            var lStorage = Base.sessionStorage.getLocalStorage();

            if (lStorage) {
                var sessionPersistence = lStorage.getItem(name);
                return JSON.parse(sessionPersistence);
            } else {
                return undefined;
            }
        },

        //清除客户端存储
        clear: function () {
            if (typeof sessionStorage == 'object') {
                sessionStorage.clear();
            }
            else {
                CookieStorage.clear();
            }
        }
    },
    // 会话存储，用于管理会话
    Base.session = {
        //登录的用户对象
        user: null,
        //用户对象存储的Key
        sessionName: "loginUser",

        //存储设置登录用户
        setLoginUser: function (entity) {
            var self = Base.session;
            self.user = entity;
            //本地存储
            Base.sessionStorage.storeSession(self.sessionName, entity);

            //存储已登录标志
            loginedSign = {
                Logined: true
            }

            Base.sessionStorage.storeSession("LoginedSign", loginedSign);
        },

        //获取登录的用户，如果界面未刷新，从variable取，否则从存储中取
        getLoginUser: function () {
            var self = this;

            var result = null;

            //alert(self.user);
            if (self.user) {
                result = self.user;
            }
            else {
                result = Base.sessionStorage.getSession(self.sessionName);
            }

            return result;
        },

        logout: function (callback) {
            var self = Base.session;

            Base.sessionStorage.removeSession(self.sessionName);
            Base.sessionStorage.clear();
            //重定向登录页面
            if (null != callback && "undefined" != typeof callback)
                callback();
            else
                window.top.location.href = Transfer.loginUrl;
        }
    }
} ())