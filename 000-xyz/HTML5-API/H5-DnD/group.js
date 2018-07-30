"use strict";

/**
*
* @author xgqfrms
* @license MIT
* @copyright xgqfrms
*
* @description App
* @augments
* @example
*
*/

// no need jQuery
let $ = {
    qs: function qs(uid = ``) {
        return document.querySelector(uid);
    },
    qsa: function qsa(uid = ``) {
        return document.querySelectorAll(uid);
    },
};

const sortModules = () => {
    try {
        // typeof(Sortable) === "function"
        if (Sortable) {
            // containers
            Sortable.create($.qs("#boxes_conatiner"), {
                draggable: ".modules-conatiner-box",
                handle: ".modules-conatiner-title",
                animation: 150
            });
            // modules
            let uids = [...$.qsa(`[data-id="modules-conatiner"]`)];
            [].forEach.call(uids, (uid) => {
                Sortable.create(uid, {
                    group: "containers", // groupe & drag handle
                    draggable: '.module',
                    handle: ".drag-handle",
                    animation: 150
                });
            });
            // group
            // $.qs(".boxes-conatiner").getElementsByClassName("modules-conatiner-title");
            // $.qs(".boxes-conatiner").getElementsByClassName("modules-conatiner");
            // [].forEach.call($.qs("#boxes_conatiner").getElementsByClassName("modules-conatiner"), function(el) {
            //     Sortable.create(el, {
            //         group: "containers",
            //         animation: 150
            //     });
            // });
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
