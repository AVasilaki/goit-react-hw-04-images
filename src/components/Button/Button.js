export const Button = ({ galery, onLoadMore }) => {
  // if (galery === 0) {
  //   return;
  // } else
  return (
    <button className="Button " type="button" onClick={onLoadMore}>
      load more
    </button>
  );
};
