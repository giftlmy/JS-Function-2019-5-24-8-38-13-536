//新建main.js文件，编写一个函数，实现以下功能：将一个字符串逆序输出。
function reverseString(message){
  var result='';
  for(var i=message.length-1;i>=0;i--){
	  result +=message.charAt(i);
  }
  return result;
}
//reverseString('hello'); // should return 'olleh'