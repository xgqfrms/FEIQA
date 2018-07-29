# H5 DnD

> G:\wwwRoot\js-modular\HTML5_DnD

## Auto Prefix

> Works both for indented and single-line CSS styles. To activate it, just <kbd>Ctrl+Shift+P</kbd> into the workbench command window and type `Auto Prefix`

```json

    {
        "css-auto-prefix.enabled": true,
        // Whether or not auto prefix css files
        "css-auto-prefix.prefixes": true,
    }

{
      // Whether or not auto prefix css files
    "css-auto-prefix.enabled": true,
    // The list of attributes to add support for, and what prefixes each one should receive.
    "css-auto-prefix.prefixes": {
        "transform": [
            "webkit",
            "moz",
            "ms",
            "o"
        ],
        "transition": [
            "webkit",
            "moz",
            "ms",
            "o"
        ],
        "border-radius": [
            "webkit",
            "moz",
            "ms",
            "o"
        ],
        "animation": [
            "webkit"
        ],
        "box-reflect": [
            "webkit"
        ],
        "filter": [
            "webkit"
        ],
        "font-feature-settings": [
            "webkit",
            "moz"
        ],
        "backface-visibility": [
            "webkit"
        ],
        "box-decoration-break": [
            "webkit"
        ],
        "hyphens": [
            "webkit",
            "moz",
            "ms"
        ],
        "marquee-direction": [
            "webkit"
        ],
        "marquee-play-count": [
            "webkit"
        ],
        "marquee-speed": [
            "webkit"
        ],
        "marquee-style": [
            "webkit"
        ],
        "text-combine-upright": [
            "webkit",
            "moz",
            "ms"
        ],
        "text-decoration-color": [
            "moz"
        ],
        "text-decoration-line": [
            "moz"
        ],
        "text-decoration-style": [
            "moz"
        ],
        "text-orientation": [
            "webkit"
        ],
        "writing-mode": [
            "webkit",
            "ms"
        ]
    }
}

```

```css
html {
    background-image: linear-gradient(to bottom, #F4E2C9 20%, #F4D7C9 100%);
}

html {
    background-image: -webkit-linear-gradient(bottom, #F4E2C9 20%, #F4D7C9 100%);
    background-image: -moz-linear-gradient(bottom, #F4E2C9 20%, #F4D7C9 100%);
    background-image: -ms-linear-gradient(bottom, #F4E2C9 20%, #F4D7C9 100%);
    background-image: linear-gradient(to bottom, #F4E2C9 20%, #F4D7C9 100%);
}
```


