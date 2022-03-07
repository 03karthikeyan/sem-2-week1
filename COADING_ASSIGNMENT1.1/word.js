function word(str) { 
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      const wordCount ={};
      const length = word.length;
     // console.log(wordCount.length);
      return count;
    }, {});
  } 
  
  console.log();
// } 
let para = "My family is a joint and a large family. Even while living in the city, all family members live together. My family consists of grandparents, mother-fathers, uncles, and aunts and we have five siblings. So there are eleven members in my family in total. All members of the family live together in friendship. Our family is an ideal and happy family.";
let result = word(para);
console.log(para.match(/(\w+)/g).length);
console.log(result);