

const LogoImage = (props) => {
  const imageLink: string | undefined = props.image?.["@link"] || undefined;
  const hostUrl: string = process.env["NEXT_PUBLIC_MGNL_HOST"];
  return (
    <img
      className="pl-4 h-14 w-32 md:w-40 lg:w-40"
      src={`${hostUrl}${imageLink}`}
      alt="car-sales"
    />
  );
};

export default LogoImage;
