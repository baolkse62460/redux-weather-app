import { connect } from 'react-redux';
import Weather from '../../components/Weather';
import { fetchBeginAction, fetchSuccessAction, fetchFailedAction } from '../../reducers/weather';

const mapStateToProps = (state) => {
  const { weather } = state;
  const { items, isLoaded, error } = weather;

  return {
    items: items,
    isLoaded: isLoaded,
    error: error,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    begin: function () {
      const action = fetchBeginAction();
      dispatch(action);
    },
    success: function (items) {
      const action = fetchSuccessAction(items);
      dispatch(action);
    },
    failed: function (error) {
      const action = fetchFailedAction(error);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);