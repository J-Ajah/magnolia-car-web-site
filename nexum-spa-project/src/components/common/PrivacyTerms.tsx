import Link from "next/link";
import React from "react";

type Props = {
  termsCaption: string;
  termsLink: string;
};
const PrivacyTerms: React.FC<Props> = (props: Props) => {
  return (
    <Link href="#" className="cursor-pointer">
      <a className="">{props.termsCaption}</a>
    </Link>
  );
};

export default PrivacyTerms;
