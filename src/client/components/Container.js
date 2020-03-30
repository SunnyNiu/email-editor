import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Content from './Content';
import ContentEditor from './ContentEditor';

const Container = props => {
  const { userId } = props.match.params;
  return (
    <Grid columns="1fr 2fr 2fr" gap="4px">
      <Cell minWidth="200px">
        <Sidebar />
      </Cell>
      <Cell>
        <Content userId={userId} />
      </Cell>
      <Cell>
        <ContentEditor />
      </Cell>
    </Grid>
  );
};

Container.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  userId: PropTypes.string.isRequired,
};

export default Container;
