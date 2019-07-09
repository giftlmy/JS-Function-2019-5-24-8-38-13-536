//编写一个函数，实现以下功能：按字母表顺序输出传入的参数字符串
 function test1(str){
	 var arr=str.split(""); 
	 for(var i=0;i<arr.length;i++){
		 for(var j=i+1;j<arr.length;j++){
			 if(arr[i]>arr[j]){
				 var temp=arr[i];
				 arr[i]=arr[j];
				 arr[j]=temp;
			 }
		 }
	 }
	 var c=arr.join(""); 
	 console.log(c);
}