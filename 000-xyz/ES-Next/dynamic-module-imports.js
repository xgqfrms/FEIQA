// http://2ality.com/2017/01/import-operator.html


import * as someModule from './dir/someModule.js';

const moduleSpecifier = './dir/someModule.js';
import(moduleSpecifier).then(someModule => someModule.foo());

button.addEventListener('click', event => {
    import('./dialogBox.js')
    .then(dialogBox => {
        dialogBox.open();
    })
    .catch(error => {
        /* Error handling */
    })
});

if (isLegacyPlatform()) {
    import(
        // ···
    )
    .then(
        // ···
    );
}


import(`messages_${getLocale()}.js`)
.then(···);


import('./myModule.js')
.then(({export1, export2}) => {
    // ···
});


import('./myModule.js')
.then(myModule => {
    console.log(myModule.default);
});


import('./myModule.js')
.then(({default: theDefault}) => {
    console.log(theDefault);
});


Promise.all([
    import('./module1.js'),
    import('./module2.js'),
    import('./module3.js'),
])
.then(([module1, module2, module3]) => {
    // ···
});


async function main() {
    const myModule = await import('./myModule.js');
    const {export1, export2} = await import('./myModule.js');
    const [module1, module2, module3] = await Promise.all([
        import('./module1.js'),
        import('./module2.js'),
        import('./module3.js'),
    ]);
}
main();


(async () => {
    const myModule = await import('./myModule.js');
})();









