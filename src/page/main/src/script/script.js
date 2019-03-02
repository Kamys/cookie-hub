const addMargin = () => {
    let blocks = document.querySelectorAll(".wraper-blocks-block");
    let count = 0;
    blocks.forEach(element => {
        count += 80;
        element.style.marginTop = count + "px";
    });
}
addMargin();
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
function function_reference(){
    let blocks = document.querySelectorAll(".wraper-blocks-block");
    console.log(document.documentElement.clientWidth)
    if(document.documentElement.clientWidth <= 1200){
        blocks.forEach(element => {
            element.style.marginTop = 30 +"px";
        }); 
    }
    else{
        addMargin();
    }
    return blocks
}
addEvent(window, "resize", function_reference);

const equalBlocks = ()=>{
   let blocks = document.querySelectorAll(".wraper-blocks-description")
   blocks.forEach(element=>{
    element.style.height.sort((a,b)=>{
        a-b
    })
       return element.style.height === blocks[0]
   })
}
equalBlocks();