module.exports = {
    extends: [],
    ignoreFiles: ['node_modules/**', 'dist/**', 'coverage/**', 'output/**'],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['stylelint-commands'],
            },
        ],
        'comment-whitespace-inside': 'always',
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-custom-property', 'first-nested'],
                ignore: ['after-comment', 'inside-single-line-block'],
            },
        ],
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': [
            'always',
            {
                except: ['after-declaration', 'first-nested'],
                ignore: ['after-comment', 'inside-single-line-block'],
            },
        ],
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-whitespace-after': 'always',
        indentation: 4,
        'length-zero-no-unit': true,
        'max-empty-lines': 1,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'property-case': 'lower',
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-space-before': 'never',
        'selector-max-empty-lines': 0,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'unit-case': 'lower',
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'function',
                    'if',
                    'return',
                    'include',
                    'extend',
                    'mixin',
                    'else',
                    'while',
                    'for',
                    'each',
                    'warn',
                    'at-root',
                ],
            },
        ],
        'block-no-empty': true,
        'color-no-invalid-hex': null,
        'comment-no-empty': true,
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values'],
            },
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'font-family-no-duplicate-names': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'keyframe-declaration-no-important': true,
        'media-feature-name-no-unknown': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes'],
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: /^swan-/,
            },
        ],
        'string-no-newline': true,
        'unit-no-unknown': [true, {ignoreUnits: ['rpx', 'xw', 'xh', 'tx']}],
        'order/order': [
            [
                'dollar-variables',
                'custom-properties',
                'at-rules',
                'declarations',
                {
                    type: 'at-rule',
                    name: 'supports',
                },
                {
                    type: 'at-rule',
                    name: 'media',
                },
                'rules',
            ],
            {severity: 'warning'},
        ],
        'order/properties-order': [
            [
                'content',
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'z-index',
                'display',
                'vertical-align',
                'flex',
                'flex-grow',
                'flex-shrink',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-wrap',
                'grid',
                'grid-area',
                'grid-template',
                'grid-template-areas',
                'grid-template-rows',
                'grid-template-columns',
                'grid-row',
                'grid-row-start',
                'grid-row-end',
                'grid-column',
                'grid-column-start',
                'grid-column-end',
                'grid-auto-rows',
                'grid-auto-columns',
                'grid-auto-flow',
                'grid-gap',
                'grid-row-gap',
                'grid-column-gap',
                'gap',
                'row-gap',
                'column-gap',
                'align-content',
                'align-items',
                'align-self',
                'justify-content',
                'justify-items',
                'justify-self',
                'order',
                'float',
                'clear',
                'object-fit',
                'overflow',
                'overflow-x',
                'overflow-y',
                'overflow-scrolling',
                'clip',

                //
                'box-sizing',
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'margin',
                'margin-top',
                'margin-right',
                'margin-bottom',
                'margin-left',
                'padding',
                'padding-top',
                'padding-right',
                'padding-bottom',
                'padding-left',
                'border',
                'border-spacing',
                'border-collapse',
                'border-width',
                'border-style',
                'border-color',
                'border-top',
                'border-top-width',
                'border-top-style',
                'border-top-color',
                'border-right',
                'border-right-width',
                'border-right-style',
                'border-right-color',
                'border-bottom',
                'border-bottom-width',
                'border-bottom-style',
                'border-bottom-color',
                'border-left',
                'border-left-width',
                'border-left-style',
                'border-left-color',
                'border-radius',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-bottom-right-radius',
                'border-bottom-left-radius',
                'border-image',
                'border-image-source',
                'border-image-slice',
                'border-image-width',
                'border-image-outset',
                'border-image-repeat',
                'border-top-image',
                'border-right-image',
                'border-bottom-image',
                'border-left-image',
                'border-corner-image',
                'border-top-left-image',
                'border-top-right-image',
                'border-bottom-right-image',
                'border-bottom-left-image',

                //
                'background',
                'background-color',
                'background-image',
                'background-attachment',
                'background-position',
                'background-position-x',
                'background-position-y',
                'background-clip',
                'background-origin',
                'background-size',
                'background-repeat',
                'color',
                'box-decoration-break',
                'box-shadow',
                'outline',
                'outline-width',
                'outline-style',
                'outline-color',
                'outline-offset',
                'table-layout',
                'caption-side',
                'empty-cells',
                'list-style',
                'list-style-position',
                'list-style-type',
                'list-style-image',

                //
                'font',
                'font-weight',
                'font-style',
                'font-variant',
                'font-size-adjust',
                'font-stretch',
                'font-size',
                'font-family',
                'src',
                'line-height',
                'letter-spacing',
                'quotes',
                'counter-increment',
                'counter-reset',
                '-ms-writing-mode',
                'text-align',
                'text-align-last',
                'text-decoration',
                'text-emphasis',
                'text-emphasis-position',
                'text-emphasis-style',
                'text-emphasis-color',
                'text-indent',
                'text-justify',
                'text-outline',
                'text-transform',
                'text-wrap',
                'text-overflow',
                'text-overflow-ellipsis',
                'text-overflow-mode',
                'text-shadow',
                'white-space',
                'word-spacing',
                'word-wrap',
                'word-break',
                'overflow-wrap',
                'tab-size',
                'hyphens',
                'interpolation-mode',

                //
                'opacity',
                'visibility',
                'filter',
                'resize',
                'cursor',
                'pointer-events',
                'user-select',

                //
                'unicode-bidi',
                'direction',
                'columns',
                'column-span',
                'column-width',
                'column-count',
                'column-fill',
                'column-gap',
                'column-rule',
                'column-rule-width',
                'column-rule-style',
                'column-rule-color',
                'break-before',
                'break-inside',
                'break-after',
                'page-break-before',
                'page-break-inside',
                'page-break-after',
                'orphans',
                'widows',
                'zoom',
                'max-zoom',
                'min-zoom',
                'user-zoom',
                'orientation',
                'fill',
                'stroke',

                //
                'transition',
                'transition-delay',
                'transition-timing-function',
                'transition-duration',
                'transition-property',
                'transform',
                'transform-origin',
                'animation',
                'animation-name',
                'animation-duration',
                'animation-play-state',
                'animation-timing-function',
                'animation-delay',
                'animation-iteration-count',
                'animation-direction',
                'animation-fill-mode',
            ],
            {
                unspecified: 'bottom',
                severity: 'warning',
            },
        ],

        // 'scss/at-each-key-value-single-line': true,
        // 'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        // 'scss/at-else-closing-brace-space-after': 'always-intermediate',
        // 'scss/at-else-empty-line-before': 'never',
        // 'scss/at-else-if-parentheses-space-before': 'always',
        // 'scss/at-extend-no-missing-placeholder': true,
        // 'scss/at-function-named-arguments': 'always',
        // 'scss/at-function-parentheses-space-before': 'always',
        // // 'scss/at-function-pattern': '',
        // 'scss/at-import-no-partial-leading-underscore': true,
        // 'scss/at-import-partial-extension': 'always',
        // // 'scss/at-import-partial-extension-blacklist': ['scss', /less/],
        // // 'scss/t-import-partial-extension-whitelist': ['scss', /less/],
        // 'scss/at-mixin-argumentless-call-parentheses': 'always',
        // 'scss/at-mixin-named-arguments': 'always',
        // 'scss/at-mixin-parentheses-space-before': 'always',
        // // 'scss/at-mixin-pattern': '',
        // // 'scss/at-rule-conditional-no-parentheses': true,
        // // 'scss/at-rule-no-unknown': true,
        // 'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        // 'scss/dollar-variable-colon-space-after': 'always',
        // 'scss/dollar-variable-colon-space-before': 'never',
        // 'scss/dollar-variable-default': [true, {ignore: 'local'}],
        // 'scss/dollar-variable-empty-line-after': [
        //     'always',
        //     {
        //         except: [
        //             'last-nested',
        //             'before-comment',
        //             'before-dollar-variable',
        //         ],
        //     },
        // ],
        // 'scss/dollar-variable-empty-line-before': [
        //     'always',
        //     {
        //         except: [
        //             'first-nested',
        //             'after-comment',
        //             'after-dollar-variable',
        //         ],
        //     },
        // ],
        // 'scss/dollar-variable-first-in-block': [
        //     true,
        //     {
        //         ignore: ['comments', 'imports'],
        //         except: [
        //             'root',
        //             'at-rule',
        //             'function',
        //             'mixin',
        //             'if-else',
        //             'loops',
        //         ],
        //     },
        // ],
        // 'scss/dollar-variable-no-missing-interpolation': true,
        // // 'scss/dollar-variable-pattern':/^-/,
        // // 'scss/double-slash-comment-empty-line-before': 'always',
        // // 'scss/double-slash-comment-inline': 'never',
        // 'scss/double-slash-comment-whitespace-inside': 'always',
        // 'scss/comment-no-empty': true,
        // // 'scss/comment-no-loud': true,
        // 'scss/declaration-nested-properties': 'never',
        // 'scss/declaration-nested-properties-no-divided-groups': true,
        // 'scss/dimension-no-non-numeric-values': true,
        // // 'scss/function-color-relative': true,
        // 'scss/function-quote-no-quoted-strings-inside': true,
        // // 'scss/map-keys-quotes': true,
        // 'scss/media-feature-value-dollar-variable': 'always',
        // // 'scss/operator-no-newline-after': true,
        // // 'scss/operator-no-newline-before': true,
        // 'scss/operator-no-unspaced': true,
        // 'scss/selector-nest-combinators': 'always',
        // 'scss/selector-no-redundant-nesting-selector': true,
        // // 'scss/selector-no-union-class-name': true,
        // 'scss/no-duplicate-dollar-variables': true,
        // 'scss/no-duplicate-mixins': true,
        // 'scss/no-global-function-names': true,
    },
    customSyntax: 'postcss-less',
};
