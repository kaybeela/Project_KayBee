function showchar(num1) {
    wrap.txt.value = wrap.txt.value + num1;
}
function c() {
    wrap.txt.value = "";
}
function del() {
    wrap.txt.value = wrap.txt.value.substring(0, wrap.txt.value.length - 1);
}