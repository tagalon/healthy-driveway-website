import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
const Head = ({ pageTitle, title, url, description, imageUrl, imageAlt, type, datePublished }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl,
                    title,
                    author,
                    social {
                        twitterUsername
                    }
                }
            }
        }
    `)
    return (
        <>
            <Helmet title={`${data.site.siteMetadata.title}`} />
            <Helmet>
                <link rel="icon"/>
​
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:site" contact={data.site.siteMetadata.social.twitterUsername}></meta>
                <meta name="twitter:creator" content={data.site.siteMetadata.twitterUsername}></meta>
                <meta name="twitter:title" content={title}></meta>
                <meta name="twitter:description" content={description}></meta>
                <meta name="twitter:image" content={imageUrl}></meta>
​
                <meta property="og:locale" content="en_GB" />
                <meta property="og:site_name" content={data.site.siteMetadata.title} />
                <meta property="og:title" content={title}></meta>
                <meta property="og:url" content={url}></meta>
                <meta property="og:description" content={description}></meta>
                <meta property="og:image" content={imageUrl}></meta>
                <meta property="og:image:alt" content={imageAlt}></meta>
                <meta property="og:type" content={type} />
            </Helmet>
        </>
    )
}

export default Head