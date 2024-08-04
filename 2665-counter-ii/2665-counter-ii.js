/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initialValue = init
    return {
        increment : ()=>{
        return initialValue += 1
        },
        decrement:()=>{
        return initialValue -= 1
        },
        reset : ()=>{
        initialValue = init
        return initialValue
        }
}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */