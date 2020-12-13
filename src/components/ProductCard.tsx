import Link from 'next/link'
import { urlFor } from '../utils/sanity'
import tw from 'twin.macro'

function ProductCard ({
  _id,
  title,
  mainImage,
  blurb,
  body,
  tags,
  vendor,
  categories,
  slug,
  defaultProductVariant
}: any) {
  return (
    <Link href={`/products/${slug.current}`}>
      <a tw="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          tw="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage: `url('${urlFor(mainImage)
              .auto('format')
              .fit('crop')
              .width(750)
              .quality(80)}`
          }}
        >
          <button tw="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg
              tw="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div tw="px-5 py-3">
          <h3 tw="text-gray-700 uppercase">{title}</h3>
          <span tw="text-gray-500 mt-2">
            ${defaultProductVariant?.price}
          </span>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
