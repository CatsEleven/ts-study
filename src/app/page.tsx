/*型の基本形は、number、string、bool
JSがもともと持っている型（プリミティブ型）が使える
*/
let age: number = 22
let text: string = "aaa"
let result: boolean = true


/*
リテラル型：変数がとりうる値を、特定の具体的な値に限定する

リテラルとは、文字通りの、字義通りの、という意味がある
constによって宣言された変数は、自動的にリテラル型になる
型名として、直接記述することでもできる
*/
const tesu = "1111"
let miss: false

/*
ユニオン型：その型に含まれる、いずれかの型を代入することができる

リテラルとは、結合、という意味がある
|で区切る
リテラル型と組み合わせることで、特定の値しか取らない選択肢を、増やすことができる
AまたはB、と一緒
*/
let numberOrBool: number | boolean
let quiz: "aaa" | "bbb"



/*
型エイリアス：特定の型構造に名前をつけ、再利用する

エイリアスとは、別名、という意味がある
typeをつかって定義する
*/
type event = "click" | "hover"
let button:event


/*
オプショナルプロパティ
？をつけることで、そのプロパティが存在するかどうかが任意になり、存在しなくてもエラーにならない。
string | undifinedのように扱われる
*/

/*
読み取り専用プロパティ
readOnlyと最初につけることで、読み取り専用にできる

readonly name: string
*/

/*
Array型
型名[]の書き方で記述する
*/
let numArray: number[]

/*
tuple型
本来は、JSにない型。配列の厳密なバージョンで、固定された長さを持ち、各要素に対して特定の型が指定される
通常の配列メソッドを使用できる
*/
const strict: [string, boolean] = ["aa", false]


/*
インターセクション型
AかつBの型
オブジェクトの型を分割して定義して、インターセクション型で連結することができる
交わる場所、交差点、共通部分、交点
*/




















const page = () => {
  return (
    <div>page</div>
  )
}

export default page