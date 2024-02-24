import { Suspense } from "react";
import PropTypes from 'prop-types';
import '../../assets/css/lazyload.css'

const LazyLayout = ({ component: Component,...rest }) => {
    return (
        <Suspense fallback={<BufferingAnimation />}>
            <Component {...rest}/>
        </Suspense>
    );
}

const BufferingAnimation = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="buffering-animation" />
            <p>Loading...</p>
        </div>
    );
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout;
