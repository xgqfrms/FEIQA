// var test = (
//     function (a){
//        this.a = a;
//        return function (b) {
//            return this.a + b;
//        }(
//            function (a, b) {
//                return a;
//            }(1, 2)
//        )
//     }
// );
// console.log(`test(4) = \n`, test(4));
// 5
var test = (
    function (a){
        console.log(`a2 =`, a);// 1
        // console.log(`b2 =`, b);
        // undefined
        this.a = a;
        console.log(`this.a1 =`, this.a);// 1
        return function (b) {
            console.log(`this.a2 =`, this.a);// 1
            console.log(`b3 =`, b);// 4 ???
            return this.a + b;
        };
    }(
        function (a, b) {
            console.log(`a1 =`, a);// 1
            console.log(`b1 =`, b);// 2
            return a;
        }(1, 2)
    )
);
console.log(`test(4) = `, test(4));
// 5
// console.log(`a =`, a);
// 1
// console.log(`b =`, b);
// undefined
// console.log(`this.a =`, this.a);
// undefined
