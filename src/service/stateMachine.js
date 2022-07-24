import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const withApiState = TargetComponent =>
  class extends Component {
    state = {
      current: 'idle',
    };
    apiState = {
      pending: () => this.setState({ current: 'pending' }), // => state
      success: () => this.setState({ current: 'success' }),
      error: () => {
        this.setState({ current: 'error' });
      },
      idle: () => this.setState({ current: 'idle' }),
      isPending: () => this.state.current === 'pending', // => state process
      isSuccess: () => this.state.current === 'success',
      isError: () => this.state.current === 'error',
      isIdle: () => this.state.current === 'idle',
    };

    render() {
      return <TargetComponent {...this.props} apiState={this.apiState} />;
    }
  };

withApiState.propTypes = {
  TargetComponent: PropTypes.func.isRequired,
};
