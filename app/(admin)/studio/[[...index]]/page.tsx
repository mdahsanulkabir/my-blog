import type { Metadata } from 'next'
import { metadata as studioMetadata } from 'next-sanity/studio/metadata'
import { Studio } from './Studio'

// Set the right `viewport`, `robots` and `referer` meta tags

export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the viewport to resize behavior
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
}

export default function StudioPage() {
  return <Studio />
}

// import Head from 'next/head'
// import { NextStudio } from 'next-sanity/studio'
// import { metadata } from 'next-sanity/studio/metadata'
// import config from '../../sanity.config'

// export default function StudioPage() {
//   return (
//     <>
//       <Head>
//         {Object.entries(metadata).map(([key, value]) => (
//           <meta key={key} name={key} content={value} />
//         ))}
//       </Head>
//       <NextStudio config={config} />
//     </>
//   )
// }

