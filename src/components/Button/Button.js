export const Button = ({ galery, onLoadMore }) => {
  return (
    <button className="Button " type="button" onClick={onLoadMore}>
      load more
    </button>
  );
};
