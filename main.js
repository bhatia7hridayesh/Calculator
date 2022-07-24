
element = document.getElementById("entry");
button = document.getElementsByTagName("button");
var op1 = null;
var op2 = null;
var operator= null;
function clearScrean(){
    element.innerHTML="";
}
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        var value = this.getAttribute("data-value");
        if(value=="AC"){
            element.innerHTML="";
        }
        if(value=="1"){
            element.innerHTML += 1;
        }
        else if(value=="2"){
            element.innerHTML += 2;
        }
        else if(value=="3"){
            element.innerHTML += 3;
        }
        else if(value=="4"){
            element.innerHTML += 4;
        }
        else if(value=="5"){
            element.innerHTML += 5;
        }
        else if(value=="6"){
            element.innerHTML += 6;
        }
        else if(value=="7"){
            element.innerHTML += 7;
        }
        else if(value=="8"){
            element.innerHTML += 8;
        }
        else if(value=="9"){
            element.innerHTML += 9;
        }
        else if(value=="0"){
            element.innerHTML += 0;
        }
        else if(value=="+/-"){
            txt = element.innerHTML 
            element.innerHTML = -1*txt;
        }
        else{
            
            if(value=="+"){
                op1=parseFloat(element.textContent);
                operator= "+";
                clearScrean();                
            }
            else if(value=="-"){
                op1=parseFloat(element.textContent);
                operator = "-";
                clearScrean(); 
            }
            else if(value=="/"){
                op1=parseFloat(element.textContent);
                operator = "/";
                clearScrean(); 
            }
            else if(value=="X"){
                op1=parseFloat(element.textContent);
                operator = "*";
                clearScrean(); 
            }
            else if(value=="%"){
                op1=parseFloat(element.textContent);
                operator = "%";
                clearScrean(); 
            }
            else if(value=="="){
                op2=parseFloat(element.textContent);
                clearScrean();
                    element.innerHTML= eval(op1 +""+ operator+""+ op2);
                
            }
        }
    })
}