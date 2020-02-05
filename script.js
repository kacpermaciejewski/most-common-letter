

const checkString = (string) =>{
    if (typeof string === 'string' || string instanceof String){
      let letter = ""; 
      let k = 0;
        for(let i=0; i<=string.length-1;i++){
            let n=0;
        for(let j=0;j<=string.length-1;j++){     
        
             if(j==string.length-1){
                if(string.charAt(i) === string.charAt(j)){
                    n++
                }
                if(n>k){
                    letter = string.charAt(i);
                    k = n;
                    
                }
             }
             else{
                 if(string.charAt(i) === string.charAt(j)){
                     n++
                 }
             }
            
        }
    }

    return console.log(letter)
    
    }
    else{
        return console.log("Enter string")
    }

}