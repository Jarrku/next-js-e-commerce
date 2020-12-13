import { PortableText } from '../../utils/sanity'
import 'twin.macro'

interface Props {
  text: string;
}

function TextSection (props: Props) {
  const { text } = props
  return (
    <div>
      <div tw="container mx-auto px-6">
        <div tw="md:flex md:items-center">
          {text && <PortableText blocks={text} />}
        </div>
      </div>
    </div>
  )
}

export default TextSection
