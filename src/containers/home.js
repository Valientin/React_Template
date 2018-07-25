import { connect } from 'react-redux';
import Home from '../components/Home';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';

function mapDispatchToProps(dispatch){
    return {

    }
}

const mapStateToProps = (state) => {
    return {

	}
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('Home', 'toggleHome', false),
    withHandlers({
        changedHome: ({ toggleHome }) => {
            return () => {
                return toggleHome(true);
            };
        }
    }),
    withProps(({  }) => {
        return {
            
        };
    }),
    lifecycle({
       
    })
)(Home);