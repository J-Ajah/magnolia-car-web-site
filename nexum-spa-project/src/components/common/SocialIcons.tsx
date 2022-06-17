import React from "react";
import Link from "next/link";

type Props = {
    facebookImg?: {};
    twitterImg?: {};
    instagramImg?: {};
};

const SocialIcons: React.FC<Props> = (props: Props) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];
  //   src={hostUrl + data?.facebookImg?.["@link"]}
  console.log(props);
  return (
    <>
      <Link className="cursor-pointer" href="#">
        <a>
          <img
            className=" w-[35px]"
            src={hostUrl + props?.facebookImg?.["@link"]}
            alt=""
          />
        </a>
      </Link>
      <Link className="cursor-pointer" href="#">
        <a>
          <img className=" w-[34px]" src={hostUrl + props?.instagramImg?.["@link"]} alt="" />
        </a>
      </Link>
      <Link className="cursor-pointer" href="#">
        <a>
          <img className=" w-[35px]" src={hostUrl + props?.twitterImg?.["@link"]} alt="" />
        </a>
      </Link>
    </>
  );
};

export default SocialIcons;
