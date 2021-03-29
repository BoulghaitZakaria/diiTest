function test(){
    console.log('this is a test');
    console.log('about get element by tag name');
    var element = document.getElementsByTagName("section"), index;
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
}
