
var catdiv = document.getElementsByClassName("category-li-class")
var array = ["blue", "orange", "purple", "green", "yellow", "red"];
window.addEventListener("load",function(){
    for (let i = 0; i < catdiv.length; i++) {
        catdiv[i].style.backgroundColor = array[i];
    }
});

var checkArray = document.getElementsByClassName("check");
var descArr = document.getElementsByClassName("desc-class");
var dateArr = document.getElementsByClassName("date-class");
var arr= [];
for(let i=0;i<checkArray.length;i++){
    arr[i] = 0;
}
for(let i=0;i<checkArray.length;i++){
    checkArray[i].addEventListener("change",function(){
        if(arr[i]%2==0){
            descArr[i].style.textDecoration = "line-through";
            dateArr[i].style.textDecoration = "line-through";
            arr[i] = 1;
        }
        else{
            descArr[i].style.textDecoration = "none";
            dateArr[i].style.textDecoration = "none";
            arr[i] = 0;
        }
    });
};
