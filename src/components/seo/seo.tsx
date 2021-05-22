import React, { useMemo } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

export const SEO: React.FC<NextSeoProps> = ({ title, ...props }: NextSeoProps) => {
  const customTitle = useMemo(() => {
    let result = process.env.SITE_NAME
    if (title) result = `${result} - ${title}`
    return result
  }, [title])

  return <NextSeo title={customTitle} {...props} />
}
