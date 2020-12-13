import Error from 'next/error'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { getClient, usePreviewSubscription } from '../utils/sanity'
import ProductsPage from '../components/ProductsPage'
import 'twin.macro'

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`

function IndexPage (props: any) {
  const { productsData, preview } = props
  const router = useRouter()
  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview != null
  })

  return (
    <div tw="my-8">
      <div tw="mt-4">
        <ProductsPage products={products} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
  const productsData = await getClient(preview).fetch(query)

  return {
    props: {
      preview,
      productsData
    }
  }
}

export default IndexPage
