import React from "react";
import MenuItem from "../menu-item";
import "./directory-menu.scss";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js';

const DirectoryMenu = ({ sections }) => {
  const items = sections.map(({ id, ...props }) => {
    return <MenuItem key={id} {...props} />;
  });
  return <div className="directory-menu">{items}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
