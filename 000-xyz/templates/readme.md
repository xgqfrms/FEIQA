# code snippets

https://github.com/xgqfrms/FEIQA/tree/master/000-xyz/templates

## VS Code & code snippets bat export

> feature wanted

![image](https://user-images.githubusercontent.com/7291672/64147497-069bec00-ce53-11e9-9e02-834b31d465e8.png)



## c3t

```json

{
    "CSS3 Template": {
        "prefix": "c3t",
        "body": [
            "@charset \"UTf-8\";",
            "",
            "/* $1.css */\n",
            ":root {",
            "   --cololr: $2;",
            "   --default-cololr: $2;",
            "   --new-cololr: $3;",
            "}",
        ],
        "description": "CSS3 Template & code snippets!"
    }
}

```

## js6r

```json


{
    "JavaScript ES6 React Template": {
        "prefix": "js6r",
        "body": [
            "\"use strict\";",
            "",
            "/**",
            " * ",
            " * @author xgqfrms",
            " * @license MIT",
            " * @copyright xgqfrms",
            " * ",
            " * @description $2",
            " * @augments $3",
            " * @example $4",
            " * ",
            " */",
            "",
            "const $2Generator = ($5datas = [], debug = false) => {",
            "    let result = ``;",
            "    // do something...",
            "    return $7result;",
            "};",
            "",
            "",
            "",
            "export default $2;",
            "",
            "export {",
            "    $2,",
            "};",
            "",
        ],
        "description": "JavaScript ES6 React Template & code snippets!"
    }
}
```
## h5t

```json

{
    "HTML5 Template": {
        "prefix": "h5t",
        "body": [
            "<!DOCTYPE html>",
            "<html lang=\"zh-Hans\">",
            "<head>",
            "    <meta charset=\"UTF-8\">",
            "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
            "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
            "    <meta name=\"author\" content=\"xgqfrms\">",
            "    <meta name=\"generator\" content=\"VS code\">",
            "    <title>$1</title>",
            "</head>",
            "<body>",
            "    <section>",
            "        <h1>$2</h1>",
            "        <a href=\"https://feiqa.xgqfrms.xyz/index.html\">$3</a>",
            "    </section>",
            "</body>",
            "</html>"
        ],
        "description": "HTML5 Template & code snippets!"
    }
}


```
