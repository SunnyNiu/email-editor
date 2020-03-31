import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Content from './Content';
import ContentEditor from './ContentEditor';

// const Container = ({ userId }) => (
//   <Grid columns="1fr 2fr 2fr" gap="4px">
//     <Cell minWidth="200px">
//       <Sidebar />
//     </Cell>
//     <Cell>
//       <Content userId={userId} />
//     </Cell>
//     <Cell>
//       <ContentEditor />
//     </Cell>
//   </Grid>
// );

const Container = () => (
  <Grid columns="1fr 2fr 2fr" gap="4px">
    <Cell minWidth="200px">
      <Sidebar />
    </Cell>
    <Cell>
      <Content />
    </Cell>
    <Cell>
      <ContentEditor />
    </Cell>
  </Grid>
);

// Container.propTypes = {
//   userId: PropTypes.string.isRequired,
// };

export default Container;
