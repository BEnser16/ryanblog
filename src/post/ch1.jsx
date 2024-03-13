import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';

const Ch1 = () => {
  const markdownContent = `
# JavaScript Ch1 語法與型別

## 基本介紹
JavaScript (簡稱 JS) 是具有一級函數 (First-class functions) 的輕量級、直譯式或即時編譯（JIT-compiled）的程式語言。它因為用作網頁的腳本語言而大為知名，但也用於許多非瀏覽器的環境，像是 node.js、Apache CouchDB。JavaScript 是一個基於原型的 (Prototype-based (en-US))、多範型的、動態語言，支援物件導向、指令式以及宣告式 (如函數式程式設計) 風格。

* Case-sensitive（區分大小寫）
* 使用 Unicode 編碼
* 每行指令被稱為 Statements (en-US)，並用分號（;）分隔
* 採用的標準是 ECMAScript

## 宣告（Declarations）
* var 宣告可隨意更改的變數，不被 Scope 限制
* let 宣告可隨意更改的區域變數，會被 Scope 限制
* const 宣告只可讀不可變的常數，指針不變

## 變數（Variables）
變數的名稱被稱為 identifiers 需要遵從以下的規則。
> **開頭**必須使用字母（letter）、下底線（_）、錢號（$）
> 後面的字元組成可以包含數字（0-9）
> 
合法的變數名稱:例如 Number_hits, temp99, $credit, and _name.

## 資料型別 (Data types)
* Boolean( 布林值 ) 分為 true and false.
* null( 空值 ) 是指一個不存在的或無效的物件(object)或地址
* undefined ( 未定義 ) 會被自動賦予未被賦值的變數
* Number( 數值 ) 例如 42 or 3.14159.
* String ( 字串 ) 例如 "Howdy"
* Symbol 建立一個唯一的鍵值

### 變數取值
如果尚未指定數值給該變數，那麼該變數的值會是 undefined。

\`\`\`javascript
var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
\`\`\`

如果嘗試去存取**未定義的變數**，會跳出 ReferenceError (en-US) 的例外。

\`\`\`javascript
console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;
\`\`\`

undefined 的變數，在被當做布林值的情境下都會被視為 false。

被賦予 undefined 的變數，在和數值進行運算之後，會被轉成非數值（NaN）：

\`\`\`javascript
var a;
a + 2;  // Evaluates to NaN
\`\`\`

對 null 進行運算，null 會自動轉換成數值 0。當做布林值運算，會被當成 false。

\`\`\`javascript
var n = null;
console.log(n * 32); // Will log 0 to the console
\`\`\`

#### 變數提升 hosting
「提升（hoisting）」是你可引用一個較晚宣告的變數並且不會有異常。

**變數在 JavaScript 中是「被提升（hoisted）」到函式（function）或陳述式（statement）的頂部。**

然而，被提升（hoisted）的變數將返回（undefined）。所以即使你引用這個變數之後才宣告和初始化它，仍然會返回（undefined）。

\`\`\`javascript
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
\`\`\`
上面的例子可以轉譯成如下相同的程式:

\`\`\`javascript
/**
 * Example 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Example 2
 */
var myvar = 'my value';

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();
\`\`\`

### 字面值（Literals）
怎麼理解 Literal
![](https://hackmd.io/_uploads/r1YdAPjN3.png)

* Array literals
    代表一個數組元素，並用方括號（[]）括起來

\`\`\`javascript
var coffees = ['French Roast', 'Colombian', 'Kona'];
\`\`\`

> An array literal is a type of object initializer.

* Boolean literals
    布林型別有兩種字面值： true 跟 false.
* Numerical literals
    ***整數字面值 (Numerical literals)***
    
    整數能表示為「十進制」、「十六進制」、「八進制」、「二進制」

    十進制:『不帶前導 0』的整數序列組成
    八進制:『前導 0 或 0o 或 0O』的整數序列組成。只能包含數字 0-7
    十六進制:『前導 0x 或 0X』的整數序列組成。只能包含數字 0-9 、字母 A-F 和 a-f
    二進制:『前導 0b 或 0B』的整數序列組成。只能包含數字 0 跟 1
    
    範例:
    
        0, 117 and -345 (decimal, base 10)
        015, 0001 and -0o77 (octal, base 8)
        0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
        0b11, 0b0011 and -0b11 (binary, base 2)

    
    ***浮點數字面值 (Floating-point literals)***
    
    語法結構如下
    
        [(+|-)][digits][.digits][(E|e)[(+|-)]digits]


    整數部分 (十進位，可帶符號 "+" 或 "-" 於整數前)
    小數點 "."
    小數部分 (另一個十進位整數)
    指數部分由「"e" 或 "E" 後面跟整數」所組成，可帶符號 "+" 或 "-" 於整數前。浮點數字面值至少由「一位數字」與「一個小數點 "e" (或 "E")」組成。
    
    範例
    
        3.1415926
        -.123456789
        -3.1E+12
        .1e-23


* Object literals

    大括號（{}）括起來的零或多對鍵值對的列表。
    範例 建造一個 Car 物件
    \`\`\`javascript
    var sales = 'Toyota';

    function carTypes(name) {
      if (name === 'Honda') {
        return name;
      } else {
        return "Sorry, we don't sell " + name + ".";
      }
    }

    var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

    console.log(car.myCar);   // Saturn
    console.log(car.getCar);  // Honda
    console.log(car.special); // Toyota
    \`\`\`

    可以使用數字或字串字面值作為屬性名，也可將物件嵌套在另一個物件中。

    \`\`\`javascript
    var car = { manyCars: {a: 'Saab', 'b': 'Jeep'}, 7: 'Mazda' };

    console.log(car.manyCars.b); // Jeep
    console.log(car[7]); // Mazda
    \`\`\`
    
* RegExp literals

    正規表達式字面值 (RegExp literals)
    正則表達式字面值是包含在斜杠間的樣式。以下是正則表達式文字的範例。
    \`\`\`javascript
    var re = /ab+c/;
    \`\`\`
    RegExp.test() 檢查字串裡是否有匹配的字元組合，並且回傳 true 或 false。
    那剛剛上面舉例的 /ab+c/ 是什麼意思？
    \\+ 是重複 1 次或多次的意思  * 是重複 0 次或多次
     
    \`\`\`javascript
    /ab+c/.test("ac") // false
    /ab+c/.test("abc") // true，一次
    /ab+c/.test("abbbbbc") // true，多次

    /ab*c/.test("ac") // true，0 次
    /ab*c/.test("abc") // true
    /ab*c/.test("abbbbbc") // true
    \`\`\`
        
    x|y 符合 x 或 y，用 | 分隔字符，可以像這樣 w|x|y|z，持續下去。
    \\d 符合數字 0-9
    \\s 符合空白
    \\w 符合數字跟字母與底線[A-Za-z0-9_]

* String literals

    字串字面值是用雙引號（“）或單引號（'）包住的零或多個字元。
    \`\`\`javascript
    'foo'
    "bar"
    '1234'
    'one line \n another line'
    "John's cat"
    
    // 使用特殊字元 \n 換行
    'one line \n another line'

    \`\`\`
    下表列出了可以在 JavaScript 字串中使用的特殊字元。
    

    | 字元 | 意涵 | 
    | -------- | -------- | 
    | \0     | 空的字元  | 
    | \b    | 退格 (Backspace) | 
    | \f     | 換頁  | 
    | \r     | 回車(Carriage return)  | 
    | \t     | 跳格 (Tab) | 
    | \v     | Vertical tab  | 
    | \\'    | 撇號或單引號  | 
    | \\"     | 雙引號  | 
    | \\\\     | 反斜 Backslash  | 
    | \v     | Vertical tab  | 

#### Reference
[MDN-JavaScript](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types)

[正規表達式 Regular Expression](https://ithelp.ithome.com.tw/articles/10281215)

[初學者跪著學JavaScript Day9 : 讓我困惑的Literals](https://ithelp.ithome.com.tw/articles/10271062)
`;

  return (
    <Container fluid className='d-flex justify-content-center' >
        <div className='col-6 mt-5' >

            <ReactMarkdown children={markdownContent} />   
        </div>
    </Container>
  );
};

export default Ch1;
