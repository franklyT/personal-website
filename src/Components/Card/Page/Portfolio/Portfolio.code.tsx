//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import Portfolio from '!!raw-loader!./Portfolio';
// eslint-disable-next-line import/no-webpack-loader-syntax
import PortfolioSCSS from '!!raw-loader!./Portfolio.module.scss';

const PortfolioCode = {
    portfolioJSX: `// Portfolio.tsx \n\n${Portfolio}`,
    portfolioSCSS: `// Portfolio.module.scss \n\n${PortfolioSCSS}`
}

export default PortfolioCode;