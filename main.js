// function sum(a, b){
//     return a + b;
// }

// module.exports  = sum;

// let vowels = '^[aieouAIEOU].*';

// function translate(string){
//    string = string.toLowerCase();
//         if (string[0] = "aaa") {
//             return "Hello in Spanish";
//         // } else if (string === "de"){
//         //     return "Hello in German";
//         // } else {
//         //     return "Hello in English";
//         // }
//     // }else{
//     //     return "yo"
//     }
// }
    
    // console.log(translate("a"));
    // console.log(translate("ES"));
    // console.log(translate("DE"));


    // // function translate(string)
    // // {
    // //     let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v", "x", "w", "y", "z"];
    // //     string = string.toLowerCase();
        
    // //     let front = "";
    // //     let rear = "";
    // //     for(let i = 0; i < string.length; i++){
    // //         let el = string[i];
        
        //  if (string[0] == "a" || string[0] == "e" || string[0] == "i" || string[0] == "o" || string[0] == "u" )
        //     console.log(string + "way");
         
        
    //     console.log(front)
    // }
       
    // translate('ABcaci');
    

//////FULL Soulutionn!!!!
// function translate(string){
//         // let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v", "x", "w", "y", "z"];
//         string = string.toLowerCase();
   
        
//         // for(let i = 0; i < string.length; i++){
//             // let el = string[i];
//         if (string[0] == "a" || string[0] == "e" || string[0] == "i" || string[0] == "o" || string[0] == "u" ){
//             return(string + "way");
//         }   else {
//             //check for multiple consonants
//                 for (var i = 0; i<string.length; i++){
//                     if (["a", "e", "i", "o", "u"].indexOf(string[i]) > -1){
//                         let firstcons = string.slice(0, i);
//                         let middle = string.slice(i, string.length);
//                         string = middle+firstcons+"ay";
//                         break;}
//                      }
//              return string;}

        

//     // }

//     }
       
//     console.log(translate('LLLLCCCCMMuLLLcUyicEcear'));    
//     module.exports = translate;




///full solution end

// function translate(str) {
//     str=str.toLowerCase();

//     // for words that start with a vowel:
//     if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
//         return str=str+"way";
//     }

//     // for words that start with one or more consonants
//    else {
//    //check for multiple consonants
//        for (var i = 0; i<str.length; i++){
//            if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
//                var firstcons = str.slice(0, i);
//                var middle = str.slice(i, str.length);
//                str = middle+firstcons+"ay";
//                break;}
//             }
//     return str;}
// }

// translate("school");


    // const moveVowels = (str = '') => {
    //    const vowels = 'aeiou';
    //    let front = '';
    //    let rear = '';
    //    for(let i = 0; i < str.length; i++){
    //       const el = str[i];
    //       if(vowels.includes(el)){
    //          rear += el;
    //       }else{
    //          front += el;
    //       };
    //    };
    //    return front + rear;
    // };
    // console.log(moveVowels("eeayiYo"));



// function startsWithVowel(word){
//     return /[aeiou]/i.test(word[0]);
// // }
// console.log(startsWithVowel("word"))
// var testStr = 'cEagle'
// var vowelRegex = '^[aieouAIEOU].*'
// var matched = testStr.match(vowelRegex)
// if(matched)
// {
// alert('matched');
// }
// else
// {
// alert('not matched');
// }


// numberArray.indexOf(3);

//splice

//slice






// function translate(string){
//     let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v", "x", "w", "y", "z"];
//     string = string.toLowerCase();
    
//     // let front = "";
//     // let rear = "";
    
//     for(let i = 0; i < string.length; i++){
//         let el = string[i];
//     if (string[0] == "a" || string[0] == "e" || string[0] == "i" || string[0] == "o" || string[0] == "u" ){
//         return(string + "way");
//     }   else{
//             return "yp"
//     }
        
//     //  else if (consonants.includes(el)){
//     //     rear += el;
//     // }else{
//     //     front += el;
//     // };
    

// //     }
// //     // return front + rear + "ay"
// //     }



function translate(string){
        // let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v", "x", "w", "y", "z"];
        string = string.toLowerCase();
   
        
        // for(let i = 0; i < string.length; i++){
            // let el = string[i];
        if (string[0] == "a" || string[0] == "e" || string[0] == "i" || string[0] == "o" || string[0] == "u" ){
            return(string + "way");
        }   else {
            //check for multiple consonants
                for (var i = 0; i<string.length; i++){
                    if (["a", "e", "i", "o", "u"].indexOf(string[i]) > -1){
                        let firstcons = string.slice(0, i);
                        let middle = string.slice(i, string.length);
                        string = middle+firstcons+"ay";
                        break;}
                     }
             return string;}

        

    // }

    }
       
    console.log(translate('LLLLCCCCMMuLLLcUyicEcear'));    
    module.exports = translate;