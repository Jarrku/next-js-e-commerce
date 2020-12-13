import { PortableText } from '../utils/sanity'
import RenderSections from './RenderSections'

function LandingPage ({ page = {} }: any) {
  const { title, content = [] } = page

  return <RenderSections sections={content} />
}

export default LandingPage
