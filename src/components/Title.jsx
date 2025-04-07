const Title = (props) => {
  return (
    <h1 className="text-4xl text-slate-200 text-center font-bold">
      {props.children}
    </h1>
  );
};
export default Title;
