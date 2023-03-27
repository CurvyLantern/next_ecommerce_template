interface Props {
  children?: React.ReactNode;
  className?: string;
}
const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`w-11/12 mx-auto ${className}`}>{children}</div>;
};

export default Container;
