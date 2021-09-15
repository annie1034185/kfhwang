var str = "({[p*2+<3,2>]});";
var stack = [];

for(var i=0; i<str.length; i++)
{
    if(str[i] == "{" || str[i]=="[" || str[i]=="("){
        stack.push(str[i]);
    }else if(str[i] == "}" || str[i]=="]" || str[i]==")"){
        if(stack.length>0)
            var openBracket = stack.pop();
        else{
            console.log("Unmatched");
            break;
        }
        if((openBracket =="{" && str[i]!="}") || (openBracket =="[" && str[i]!="]") || (openBracket =="(" && str[i]!=")")){
            console.log("Unmatched");
            break;
        }
    }
}
if(stack.length>0){
    console.log("Unmatched");
}else{
    console.log("Matched");
}

function popout(){
    var openBracket="C";

}



