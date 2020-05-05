import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { Grid } from 'styled-css-grid';
import {
  addSectionCreator,
  fetchEmailCreator,
} from '../reducers/contentsActions';
import { ItemTypes } from '../util';
import Sections from './Sections';

const Container = styled(Grid)``;

const DropTarget = styled.div`
  height: 300px;
  background-color: #4285f4;
`;

const Content = props => {
  const { fetchEmail, email, addSection, emailId } = props;
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.XML,
    drop: ({ section }, monitor) => {
      const divs = [...ref.current.children];
      let index = 0;

      if (divs.length) {
        const offsets = divs.map(x => x.offsetTop);

        const lastDiv = divs[divs.length - 1];
        offsets.push(lastDiv.offsetTop + lastDiv.offsetHeight);
        const { y } = monitor.getClientOffset();

        const dropBoundaries = [];
        dropBoundaries.push(offsets[0]);
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < offsets.length; i++) {
          dropBoundaries.push(
            (offsets[i] - offsets[i - 1]) / 2 + offsets[i - 1]
          );
        }
        dropBoundaries.push(offsets[offsets.length - 1]);

        if (y <= dropBoundaries[1]) {
          index = 0;
        } else if (y >= dropBoundaries[dropBoundaries.length - 2]) {
          index = divs.length;
        } else {
          // eslint-disable-next-line no-plusplus
          for (let i = 1; i < dropBoundaries.length - 1; i++) {
            if (y >= dropBoundaries[i] && y < dropBoundaries[i + 1]) {
              index = i;
            }
          }
        }
      }
      addSection(section, index);
    },
  });

  useEffect(() => {
    fetchEmail(emailId);
  }, []);

  return (
    <DropTarget ref={drop}>
      <Container columns={1} ref={ref}>
        {email.children === undefined
          ? null
          : email.children.map(sectionId => {
              const section = email.widgetMap[sectionId];
              return (
                <Sections
                  key={section.id}
                  section={section}
                  widgetMap={email.widgetMap}
                />
              );
            })}
      </Container>
    </DropTarget>
  );
};

const mapStateToProps = state => {
  const emailId = window.location.href.split('email=')[1];
  return {
    email: state.content.email,
    emailId,
  };
};

const mapDispatchToProps = dispatch => ({
  addSection: (section, index) => dispatch(addSectionCreator(section, index)),
  fetchEmail: emailId => dispatch(fetchEmailCreator(emailId)),
});

Content.propTypes = {
  addSection: PropTypes.func.isRequired,
  fetchEmail: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  email: PropTypes.object,
  emailId: PropTypes.string,
};

Content.defaultProps = {
  email: {},
  emailId: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
