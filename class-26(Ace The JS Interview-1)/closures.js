function parent(){
    var a = 10

    function child1(){
        var b=20

        function child2(){
            console.log(a+b)
        }

        return child2
    }

    return child1
}

let child1Received = parent()
// console.log(child1Received)

let child2Received = child1Received()


child2Received()
