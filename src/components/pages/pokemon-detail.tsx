import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PokemonDetail extends Component {
  render() {
    return <div>Detail</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
