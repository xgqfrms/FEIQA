"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description F10FrameworkApp
 * @augments
 * @example
 *
 */

// const F10FrameworkApp = (datas = [], debug = false) => {
//     let result = ``;
//     // do something...
//     return result;
// };


// export default F10FrameworkApp;

// export {
//     F10FrameworkApp,
// };

const sortModules = () => {
    try {
        // typeof(Sortable) === "function"
        if (Sortable) {
            // no need jQuery
            let $ = {
                qs: function qs(uid = ``) {
                    return document.querySelector(uid);
                },
                qsa: function qsa(uid = ``) {
                    return document.querySelectorAll(uid);
                },
            };
            // "handle" option
            Sortable.create($.qs("#handle-1"), {
                handle: ".drag-handle",
                animation: 150
            });
            [].forEach.call($.qs("#handle-1").getElementsByClassName('tile__list'), function(el) {
                // sub-sub-container-list
                Sortable.create(el, {
                    group: "containers",
                    animation: 150
                });
            });
        } else {
            throw new Error(`Sortable.js is not imported!`);
        }
    } catch (error) {
        console.error(`Sortable Error: \n`, error);
    }
};

document.addEventListener(`DOMContentLoaded`, () => {
    sortModules();
});
