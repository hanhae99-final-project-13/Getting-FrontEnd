import React from 'react';

import KnowledgeFooter from '../Footer/KnowledgeFooter';

const withKnowledgeFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      <Component {...props} />
      <KnowledgeFooter />
    </React.Fragment>
  );
};

export default withKnowledgeFooter;
