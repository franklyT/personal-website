// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import Code from '!!raw-loader!./Code';
// eslint-disable-next-line import/no-webpack-loader-syntax
import CodeSCSS from '!!raw-loader!./Code.module.scss';

const CodeCode = {
    codeJSX: `// Code.tsx\n\n${Code}`,
    codeSCSS: `// Code.module.scss\n\n${CodeSCSS}`
}

export default CodeCode;