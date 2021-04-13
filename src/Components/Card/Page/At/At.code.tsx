// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import At from '!!raw-loader!./At';
// eslint-disable-next-line import/no-webpack-loader-syntax
import AtSCSS from '!!raw-loader!./At.module.scss';

const AtCode = {
    atJSX: `// At.tsx\n\n${At}`,
    atSCSS: `// At.module.scss\n\n${AtSCSS}`
}

export default AtCode;