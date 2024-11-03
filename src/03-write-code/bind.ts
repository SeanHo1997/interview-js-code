/**
 * @description 手写bind函数
 */

Function.prototype.bind = function (thisArg: any, ...args: any[]) {
	const self = this
  return function (...bindArgs: any[]) {
    const newArgs = [...args, ...bindArgs]
    return self.apply(thisArg, newArgs)
  }
}

// 功能测试
function testFn(this: any, a: any, b: any) {
  console.info(this, a, b)
}

testFn(1,2)

const bindedTest = testFn.bind({a: 100}, 3)
bindedTest(4)

