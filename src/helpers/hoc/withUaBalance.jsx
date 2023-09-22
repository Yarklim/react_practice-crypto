/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
export const WithUaBalance = (Component) => {
  return (props) => {
    const { balance } = props;
    const uaBalance = balance * 40;

    return <Component {...props} uaBalance={uaBalance} />;
  };
};
