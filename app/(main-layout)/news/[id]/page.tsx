import React from 'react'
import BlogDetaills from './BlogDetails'
import BlogDetailsHero from './BlogDetailsHero'
import CTS from './CTA'

export default function page() {
  return (
    <div>
      <BlogDetailsHero/>
        <BlogDetaills/>
        <CTS/>
    </div>
  )
}
