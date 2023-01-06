import Head from "next/head";

interface LDJsonProps {
  structuredData: Record<string | number | symbol, any>;
}

export const LDJson = ({ structuredData }: LDJsonProps) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};
