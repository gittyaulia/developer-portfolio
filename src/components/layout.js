import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    parent,
    container,
    topBar,
    windowDecor,
    // heading,
    // navLinks,
    // navLinkItem,
    // navLinkText,
    siteTitle,
    main,
    content,
    bottomBar
    // navBar
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
    <div className={parent}>
        <div className={container}>

            {/* Top window bar */}
            <div className={topBar}>
                <StaticImage
                    alt="Grass block icon from Minecraft" 
                    src="../images/grass_block.png"       
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

            {/* Page content */}
            {/* <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main> */}
            <div className={main}>
                Main
                <div className={content}>Content</div>

                {/* Bottom navigation bar */}
                <div className={bottomBar}>
                    <StaticImage
                        alt="Close window icon"
                        src="../images/minecraft_hotbar.png"
                        width={400}
                        quality={100}
                    />
                    <header>bottom bar</header>
                </div>
            </div>

        </div>
    </div>

  )
}

export default Layout