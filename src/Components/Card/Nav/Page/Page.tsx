import RenderedCard from '../../../../static/shared/RenderedCard';

import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Code from './Code/Code';
import At from './At/At';

import styles from './Page.module.scss';

function Page(props: { activeCard: RenderedCard, cardStyle: any, renderCode: any }) {
    function getActiveCard() {
        switch (props.activeCard) {
            case "PORTFOLIO": return <Portfolio cardStyle={props.cardStyle} renderCode={props.renderCode} />
            case "BLOG": return <Blog cardStyle={props.cardStyle} renderCode={props.renderCode} />
            case "CODE": return <Code cardStyle={props.cardStyle} renderCode={props.renderCode} />
            case "AT": return <At cardStyle={props.cardStyle} renderCode={props.renderCode} />
        }
    }

    return (
        <div className={styles.masterDiv}>
            {getActiveCard()}
        </div>
    )
}

export default Page;