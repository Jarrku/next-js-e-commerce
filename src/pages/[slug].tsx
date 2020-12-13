import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import LandingPage from "../components/LandingPage";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { GetStaticPaths, GetStaticProps } from "next";

const query = groq`*[_type == "route" && slug.current == $slug][0]{
  slug,
  page->
}`;

export default function ProductPageContainer({ pageData, preview }: any) {
  const router = useRouter();
  if (!router.isFallback && !pageData?.slug?.current) {
    return <Error statusCode={404} />;
  }


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: page = {} } = usePreviewSubscription(query, {
    params: { slug: pageData?.slug?.current },
    initialData: pageData,
    enabled: preview || router.query.preview != null,
  });

  return <LandingPage page={page.page} />;
}

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
  const data = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, pageData: data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const routes = await getClient().fetch(`*[_type == "route" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: false,
  };
};
