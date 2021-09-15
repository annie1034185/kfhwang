var str = "}{a = (1 + v(b[3 + c[4]]));";
var stack = [];

for(var i=0; i<str.length; i++)
{
    if(str[i] == "{" || str[i]=="[" || str[i]=="("){
        stack.push(str[i]);
    }else if(str[i] == "}" || str[i]=="]" || str[i]==")"){
        openBracket = stack.pop();
        if((openBracket =="{" && str[i]=="}") || 
           (openBracket =="[" && str[i]=="]") || 
           (openBracket =="(" && str[i]==")")){

        }else{
            console.log("Unmatched");
            break;

        }
    }
}