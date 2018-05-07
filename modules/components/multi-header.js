"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright
 * @description
 * @augments
 * @example
 * @param {Array} data
 *
 */

/*
<thead class="gildata-thead">
    <tr class="gildata-tr">
        <th colspan="2">long long long 表头 1</th>
        <th rowspan="2">表头 2</th>
        <th rowspan="2">表头 3</th>
    </tr>
    <tr class="gildata-tr">
        <th>多级表头 1</th>
        <th>多级表头 2</th>
    </tr>
</thead>
*/

const recursiveThs = (cols = []) => {
    let ths = ``
        tr = ``;
    // recursive
    cols.forEach(col => {
        let {
            key,
            title,
            children,
            colspan,
            rowspan,
        } = {...col};
        ths += `
            <th colspan="${colspan}" rowspan="${rowspan}">
                ${title}
            </th>
        `;
        if (children !== null) {
            // do recursive...
            tr += recursiveThs(children);
        }
    });
    tr += `
        <tr class="gildata-tr">
            ${ths}
        </tr>
    `;
    return tr;
};



const generatorMultiHeaders = (cols = []) => {
    let trs = ``,
        thead = ``;
    // recursive
    cols.forEach(col => {
        let {
            title,
            children,
            colspan,
            rowspan,
        } = {...col};
        if (children !== null) {
            // do recursive...
        } else {
            ths += `
                <th colspan="${colspan}" rowspan="${rowspan}">
                    ${title}
                </th>
            `;
        }
        trs += `
            <tr class="gildata-tr">
                ${ths}
            </tr>
        `;
    });
    thead = `
        <thead class="gildata-thead">
            ${trs}
        </thead>
    `;
    return thead;
};



const columns = [
    {
        title: "Name",
        key: "name",
        colspan: 1,
        rowspan: 2,
        children: null,
    },
    {
        title: "Age",
        key: "age",
        colspan: 1,
        rowspan: 2,
        children: null,
    },
    {
        title: "Gender",
        key: "gender",
        colspan: 1,
        rowspan: 2,
        children: null,
    },
    {
        title: "Company",
        key: "company",
        colspan: 2,
        rowspan: 1,
        children: [
            {
                title: "Company Address",
                key: "companyAddress",
                colspan: 1,
                rowspan: 1,
                children: null,
            },
            {
                title: "Company Name",
                key: "companyName",
                colspan: 1,
                rowspan: 1,
                children: null,
            },
        ],
    }
];

// generatorMultiHeaders(columns);

"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright
 * @description
 * @augments
 * @example
 * @param {Array} data
 *
 */

/*
<thead class="gildata-thead">
    <tr class="gildata-tr">
        <th colspan="2">long long long 表头 1</th>
        <th rowspan="2">表头 2</th>
        <th rowspan="2">表头 3</th>
    </tr>
    <tr class="gildata-tr">
        <th>多级表头 1</th>
        <th>多级表头 2</th>
    </tr>
</thead>
*/

const recursiveThs = (cols = []) => {
    let ths = ``
        tr = ``;
    // recursive
    cols.forEach(col => {
        let {
            key,
            title,
            children,
            colspan,
            rowspan,
        } = {...col};
        ths += `
            <th colspan="${colspan}" rowspan="${rowspan}">
                ${title}
            </th>
        `;
        if (children !== null) {
            // do recursive...
            tr += recursiveThs(children);
        }
    });
    tr += `
        <tr class="gildata-tr">
            ${ths}
        </tr>
    `;
    return tr;
};



const generatorMultiHeaders = (cols = []) => {
    let trs = ``,
        thead = ``;
    // recursive
    cols.forEach(col => {
        let {
            title,
            children,
            colspan,
            rowspan,
        } = {...col};
        if (children !== null) {
            // do recursive...
        } else {
            ths += `
                <th colspan="${colspan}" rowspan="${rowspan}">
                    ${title}
                </th>
            `;
        }
        trs += `
            <tr class="gildata-tr">
                ${ths}
            </tr>
        `;
    });
    thead = `
        <thead class="gildata-thead">
            ${trs}
        </thead>
    `;
    return thead;
};



const columns = [
    {
        title: "Name",
        key: "name",
        colspan: 1,
        rowspan: 2,
        children: null,
    },
    {
        title: "Age",
        key: "age",
        colspan: 1,
        rowspan: 2,
        children: null,
    },
    {
        title: "Gender",
        key: "gender",
        colspan: 1,
        rowspan: 2,
        children: null,
    },
    {
        title: "Company",
        key: "company",
        colspan: 2,
        rowspan: 1,
        children: [
            {
                title: "Company Address",
                key: "companyAddress",
                colspan: 1,
                rowspan: 1,
                children: null,
            },
            {
                title: "Company Name",
                key: "companyName",
                colspan: 1,
                rowspan: 1,
                children: null,
            },
        ],
    }
];

// generatorMultiHeaders(columns);

