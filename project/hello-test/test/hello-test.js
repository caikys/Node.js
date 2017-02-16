const assert = require('assert');

const sum = require('../hello');

//describe可以任意嵌套，以便把相关测试看成一组测试。
//每个it("name", function() {...})就代表一个测试。
//编写测试的原则是，一次只测一种情况，且测试代码要非常简单。我们编写多个测试来分别测试不同的输入，并使用assert判断输出是否是我们所期望的。
describe('#hello.js', () => {

    describe('#sum()', () => {
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });
        
        it('sum() should return 0', () => {
            //使用Node.js提供的assert模块进行断言：assert模块非常简单，它断言一个表达式为true。如果断言失败，就抛出Error。
            //独写一个test.js的缺点是没法自动运行测试，而且，如果第一个assert报错，后面的测试也执行不了了。
            assert.strictEqual(sum(), 0);
        });

        it('sum(1) should return 1', () => {
            assert.strictEqual(sum(1), 1);
        });

        it('sum(1, 2) should return 3', () => {
            assert.strictEqual(sum(1, 2), 3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            assert.strictEqual(sum(1, 2, 3), 6);
        });
    });
});