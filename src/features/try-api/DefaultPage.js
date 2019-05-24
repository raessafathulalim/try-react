import React, { Component } from 'react';
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    tryApi: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Flex mx={-2}>
        <Box width={1/3} px={2}>
          <Text p={1} color='white' bg='red'>
            Half
          </Text>
        </Box>
        <Box width={2/2} px={2}>
          <Text p={1} color='white' bg='blue'>
            Half
          </Text>
        </Box>
      </Flex>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    tryApi: state.tryApi,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
