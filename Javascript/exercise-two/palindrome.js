let palindrom ="radarhhh";
let isPalindrome=true;
// const palindromindex=palindrom.length;

function checkPalindrome(word){
    for(let i=0;i<palindrom.length;i+=1){
        // console.log(palindrom[i]);
        if(palindrom[0]===palindrom[palindrom.length-(i-i)]){
            isPalindrome=false;
        }
    }
    return isPalindrome;
}


// isPalindrome===true ? console.log('Palindrome'): console.log("Non Palindrome")
checkPalindrome("kayak")===true?console.log("Palindrome"):console.log("No Palindrome");