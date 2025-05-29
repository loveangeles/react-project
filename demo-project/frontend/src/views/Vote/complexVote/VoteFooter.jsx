import React , { memo } from "react";
import PropTypes from "prop-types";
import "./Vote.less";
import { Button } from "antd";

const VoteFooter = function VoteFooter(props) {
  let { change } = props;
  return (
    <div className="footer">
      <Button className="btn" type='primary' onClick={change.bind(null, "sup")}>
        支持
      </Button>
      <Button className="btn" type='primary' danger onClick={change.bind(null, "opp")}>
        反对
      </Button>
    </div>
  );
};

VoteFooter.defaultProps = {};
VoteFooter.propTypes = {
  change: PropTypes.func.isRequired,
};

export default memo(VoteFooter);
