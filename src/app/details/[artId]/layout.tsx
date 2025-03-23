import { getArtwork } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Promise<{ artId: string }>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const { artId } = params;
  const previousImages = (await parent)?.openGraph?.images || [];

  const artwork = getArtwork(artId);

  const title = `${artwork?.name}` || "";
  const description = `${artwork?.description}` || "";
  const image = artwork?.image || "";

  return {
    title,
    description,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

export default async function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
