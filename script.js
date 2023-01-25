
function add(){
    let iptxt = document.getElementById("iptxt").value;    
    let arr = [],lega=arr.length
    arr.push(iptxt)
    let text = "<ul>"
    for(let i = 0 ; i < lega ; i++){
        text +=  '<li>' + arr[i] + '</li>';
    }
    text += "</ul>"
    document.getElementById("optxt").innerHTML = text
    console.log(optxt)
    
}
