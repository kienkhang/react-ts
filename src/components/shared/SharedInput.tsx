import { Input, type InputProps } from "../ui/input";

type Props = InputProps;

const SharedInput = ({ className, ...props }: Props) => {
  const style = {
    // padding: ".5rem",
    // border: "2px solid transparent",
    // borderRadius: "7px",
    // background:
    //   "linear-gradient(to right, white, white), linear-gradient(15deg, red , blue)",
    // backgroundClip: "padding-box, border-box",
    // backgroundOrigin: "padding-box, border-box",
  };
  return (
    <div>
      <Input
        className={` ${className} focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-offset-0 shadow-none w-full`}
        style={style}
        {...props}
      />
    </div>
  );
};

export default SharedInput;
