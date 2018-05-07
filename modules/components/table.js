"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright
 * @description Table Components
 * @augments
 * @example
 *
 */


class Table {
    constructor(options = {}) {
        const defaults = {
            size: 20,
            style: `normal`,
            callback: () => {
                //
            },
            // others
        };
        // let {
        //     size,
        //     style,
        // } = {...options};
        // this.options = {...options};
        this.options = Object.assign({}, options);
        let keys = Object.keys(this.options);
        keys.forEach(
            (key, i) => {
                this[key] = this.options[key];
            }
        );
        // DOM
        // HTML
        // datas
    }
    // callback
    init() {
        // return this.name;
    }
    render() {
        // re render
    }
    showTable (datas = {}) {
        //datas
        let html = ``,
            thead = `
                <thead class="gildata-thead">
                    <tr class="gildata-tr">
                        <th>long long long 表头 1</th>
                    </tr>
                </thead>`,
            tbody = `
                <tbody class="gildata-tbody">
                    <tr class="gildata-tr">
                        <td>单元格</td>
                    </tr>
                </tbody>`;
        for (let i = 0; i < datas.length; i++) {
            // datas[i].col;
            // datas[i].row;
        }
        html = `
            <section>
                <table class="gildata-table"></table>
            </section>
            <section>
                <table class="gildata-table"></table>
            </section>
            <section>
                <table class="gildata-table"></table>
            </section>
        `;
        return html;
    }
}

export default Table;
export {Table};
