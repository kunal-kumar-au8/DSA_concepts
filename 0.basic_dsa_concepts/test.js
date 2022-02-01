// Stack
let stack = {
    arr : [],
    size : 0,
    pop : function(){
        if(this.size == 0){
            return -1
        }else{
            this.size--
            return this.arr[this.size]
        }

    },
    push : function(a){
        this.size++
        this.arr[this.size -1] = a
    }
}
// Queue

let Queue = {
    arr : [],
    size : 0,
    pop : function(){
        if(this.size == 0){
            return -1
        }else{
            for(let i = 0; i < this.arr.length; i++){
                if(this.arr[i+1] == undefined){
                    break
                }else{
                    let first = this.arr[i]
                    this.arr[i] = this.arr[i+1]
                    this.arr[i+1] = first
                }
            }
            this.size--
            let p = this.arr[t]