/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import { defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import {schema} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './sanityComponents/StudioNavbar'
import Logo from './sanityComponents/Logo'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

const useCdn = false


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export default defineConfig({
  basePath: '/studio',
  name: 'Ahsan_Blog_Content_Studio',
  title: "Ahsan Blog Content Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  theme : myTheme,
  studio : {
    components : {
      logo : Logo,
      navbar : StudioNavbar,

    }
  }
})
