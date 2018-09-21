let width = document.documentElement.clientWidth;
//alert(width)
if(width > 640){
	width=640;
}
document.documentElement.style.fontSize=width/750*100+"px";