import PropTypes from "prop-types";

function Layout({ children }) {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }
  return <div>{children}</div>;
}

export { Layout };
