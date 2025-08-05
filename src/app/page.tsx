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


/*
関数と型
TSは、関数のパラメーターについては型推論をすることができない。
→暗黙的にanyになりますエラーが出る

戻り値にも、型を指定することができる。引数にとる（）のあとに：型を指定する
戻り値の型は、自動的に推論される
戻り値のエラーは「型Aを、型Bに割り当てることはできません」のエラー
*/

function addNUmber(a: number, b: number): number {
    return a + b
}

/*
アロー関数
*/
type addFunction = (a: number, b: number) => number
const addNumber: addFunction = (a, b) => a + b

/*
void型
関数の戻り値が存在しないことを示す型
*/
function greet(): void {
    console.log("hallo")
}


/*
never型
関数が戻り値を返さず、かつ呼び出し元に制御を戻すことが決してない状況を表す型
関数が例外を投げるか、無限ループに入って正常に終了しないことを示す
switch文のdefault処理など、本来は到達しないコードの部分にnever型をつけておけば、実行する前にエラーを検出することができる
*/
function error(message: string): never {
    throw Error(message)
}


/*
関数オーバーロード
このパターンでは、4通りの引数のとり方がある。
プロパティ includesは、型numer|stringに存在しません。
→numberかstringが返却されることを期待しているため、numberに対してincludesを使うことができないため

そこで、すべての型のパターンを列挙することで、TSのエラーを未然に防ぐ
*/

function addNum(a: number, b: number): number;
function addNum(a: string, b: string): string;
function addNum(a: number, b: string): string;
function addNum(a: string, b: number): string;

function addNum(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else {
        return a.toString() + b.toString()
    }
}

/*
interfaceによる型定義
interfaceを使うと、オブジェクトがもつメソッドも定義できる
*/
// typeによる型定義（型エイリアス）
type person1 = {
    name: string
    age: number
}

//interfaceの場合。=による代入は必要ない
interface person2 {
    name: string
    age: number
    speak(word: string): void
}

/*
インデックスシグニチャ
オブジェクトの使い方として、コードのはじめに初期化しておいて、あとから動的にプロパティを追加することがある
この場合、プロパティの名前は決まっていないが、その型は確定している
インデックスシグニチャの構文は、[キーの名前（任意）:その型]:値の型　で表現する
テンプレート文字列と組み合わせることで、キーの命名規則を決定することもできる
*/
interface fruitStock {
    [i: string]: number
}
const stock: fruitStock = {}
stock.apple = 1


/*
ジェネリクス
ジェネリクス自体は、再利用可能、というニュアンスの単語
ジェネリクス型は、型を抽象化して再利用可能にした型のことをいう。型を利用するときは、特定の型情報を渡すことで、はじめて具体的な型に固定される
型を生成するための汎用的な型、と言い換えることもできる
*/

const numbers = [1, 2, 3]
const strings = ["a", "b", "c"]
function lastItem(array: any[]) {
    return array[array.length - 1]
}

// これで取得することはできるが、返り値がany型になってしまう。ユニオン型で指定することもできるが、どちらの型か判定するIF文が必要だったり、関数オーバーロードが必要で実装コストがかかる
let lastNumber = lastItem(numbers)
let lastStirngs = lastItem(strings)

/*
function()の（）の前に、<T>と書く。これは型パラメータという。
このTは、関数全体で参照できる汎用的な型として機能する。具体的な型が決まっていないので、任意の型を入れられる
関数が呼び出されたときに、その型が解釈されてTに代入する
TSが型を推論するが、できなかったときはunknown型になる。ジェネリクス関数を呼び出すときに、型を指定することもできる
デフォルトで型を指定することもできる
*/

function lastItemGenerics<T>(array: T[]): T {
    return array[array.length - 1]
}

let lastnumberGenerics = lastItemGenerics<number>(numbers)













// todo promiseも勉強する




















const page = () => {
  return (
    <div>page</div>
  )
}

export default page
