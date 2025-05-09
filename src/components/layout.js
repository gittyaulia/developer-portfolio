import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    topBar,
    heading,
    windowDecor,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `)
  return (
    <div className={container}>
        <div className={topBar}>
            <StaticImage
                alt="Grass block icon from Minecraft" 
                src="../images/Grass_Block.png"       
                placeholder="blurred"
                width={20}
                height={20}
                quality={100}
            />

            <header className={siteTitle}>{data.site.siteMetadata.title}</header>

            <div className={windowDecor}>
                <StaticImage
                    alt="Minimize window icon"
                    src="../images/minimize.png"
                    width={12}
                />
                <StaticImage
                    alt="Maximize window icon"
                    src="../images/maximize.png"
                    width={12}
                />
                <StaticImage
                    alt="Close window icon"
                    src="../images/close.png"
                    width={12}
                />             
            </div>
        </div>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
            </ul>
        </nav>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>

        <div></div>
    </div>
  )
}

export default Layout