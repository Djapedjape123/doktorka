// `<` se menja u < da vrednosti u JSON-u ne mogu da zatvore <script> tag
// (preporuka iz Next.js JSON-LD vodiča).
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
