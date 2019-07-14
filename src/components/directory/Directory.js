import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirSections } from "../../redux/selector/directory.selectors";
import MenuItem from "../menu-item/MenuItem";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          linkUrl={section.linkUrl}
          size={section.size}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirSections
});
export default connect(mapStateToProps)(Directory);
