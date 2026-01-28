import links from "@/links.json";
import { notFound } from "next/navigation";

export default function LinkHead({ params }: { params: { id: string } }) {
  const link = links[params.id];

  if (link == null) {
    return notFound();
  }

  return (
    <>
      <meta property="og:title" content={link.title} />
      <meta property="og:site_name" content="1 𝓺𝓳𝓬" />
      <meta property="og:description" content={link.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@0x1qjc" />
      <meta
        property="og:image"
        content={`https://1qjc.bet/blog/og/${link.image}`}
      />
    </>
  );
}
