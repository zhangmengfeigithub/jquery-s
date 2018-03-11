
/*
 扩展jQuery的工具方法 : $.extend(object)
 leftTrim(str) : 去掉字符串左侧的空格
 rightTrim(str) : 去掉字符串右侧的空格
 */
/*
 正则表达式语法：
 1. ^    匹配字符串的开始
 2. $    匹配字符串的结束
 2. \s   匹配任意的空白符
 2. +    重复一次或更多次
 */
$.extend({
    leftTrim : function (str) {
        return str.replace(/^\s+/, '');
    },
    rightTrim : function (str) {
        return str.replace(/\s+$/, '');
    }
});


/*
 扩展jQuery对象的方法 : $.fn.extend(object);

 checkAll() : 全选
 unCheckAll() : 全不选
 reverseCheck() : 反选
 */
$.fn.extend({
    checkAll : function () {
        this.prop('checked', true);  //当前的 this 指的是jQuery对象（这个对象里面包携带者选择器的选回来的结果集）
    },

    unCheckAll : function () {
        this.prop('checked', false);
    },

    reverseCheck : function () {
        this.each(function () {  //this是jQuery对象
            this.checked = !this.checked; //this是 结果集中的 dom元素对象
        });
    }
});
