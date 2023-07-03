import NextHead from "next/head";

type HeadProps = {
  text: string;
};

export const Head = ({ text }: HeadProps) => {
  return (
    <NextHead>
      <title>{text}</title>
    </NextHead>
  );
};
