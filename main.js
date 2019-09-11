document.getElementById('sltdcolor').addEventListener('change', colorChange);
function colorChange(){
    var x = document.getElementById('sltdcolor').value;
    document.body.style.backgroundColor = x;
}