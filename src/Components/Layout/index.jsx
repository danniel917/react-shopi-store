import PropTypes from "prop-types";

function Layout({ children }) {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }
  return <div className="flex flex-row flex-wrap gap-8 mt-20 items-center justify-center justify-items-center w-full max-w-screen-lg my-0 mx-auto">{children}</div>;
}

export { Layout };
