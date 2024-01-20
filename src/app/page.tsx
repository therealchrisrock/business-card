'use client';

import Head from 'next/head';
import * as React from 'react';

import { ContentCard } from '@/components/ContentCard';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <section className='bg-white'>
        <div className='relative flex min-h-screen flex-col '>
          <div className='layout-mw layout flex-1 lg:pt-12  pt-8 pb-4  text-xl'>
            <hgroup>
              <h1 className='font-bold'>Rachel Dimiskovska</h1>
              <h2>Data Analyst currently in Toronto, Ontario</h2>
            </hgroup>
            <br />
            <address className='not-italic'>
              <UnstyledLink href='mailto:ryeodocu@gmail.com'>
                ryeodocu@gmail.com
              </UnstyledLink>
              <br />
              <UnstyledLink href='https://rhaebin.medium.com/' target='_blank'>
                @Rhaebin
              </UnstyledLink>
            </address>
            <section className='mt-8 grid gap-4 md:grid-cols-2 grid-cols-1'>
              {contentCards.map((c, idx) => (
                <UnstyledLink
                  key={`content-card--${idx}`}
                  href={c.link}
                  className='rounded-sm border border-black/20 p-4 max-w-2xl'
                >
                  <ContentCard
                    title={c.title}
                    subtitle={c.subtitle}
                    description={c.description}
                    image={c.image}
                  />
                </UnstyledLink>
              ))}
            </section>
          </div>

          <footer className='text-right layout py-4'>
            <div className='inline-flex items-center gap-3'>
              <UnstyledLink
                href='https://rhaebin.medium.com/'
                target='_blank'
                className='flex items-center'
              >
                <NextImage
                  useSkeleton={true}
                  alt='Medium icon'
                  src='/images/medium-logo.png'
                  width={41}
                  height={41}
                />
              </UnstyledLink>
              <UnstyledLink
                href='https://github.com/orgs/no-maintenance/people/rachelyeo'
                target='_blank'
                className='flex items-center'
              >
                <NextImage
                  useSkeleton={true}
                  alt='github icon'
                  src='/images/github-logo.png'
                  width={41}
                  height={41}
                />
              </UnstyledLink>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

const contentCards = [
  {
    title: 'Interactive ggPlotly Example',
    description:
      'Originally commissioned by Telefónica and Mozilla Corporation as part of the joint effort during the development of Firefox OS.',
    subtitle: 'Designed by Erik Speikermann',
    image: {
      alt: 'thumbnail alt',
      src: '/images/thumbnail-1.png',
    },
    link: '/r/ggplot-example.html',
  },
  {
    title: 'Interactive ggPlotly Example',
    description:
      'Originally commissioned by Telefónica and Mozilla Corporation as part of the joint effort during the development of Firefox OS.',
    subtitle: 'Designed by Erik Speikermann',
    image: {
      alt: 'thumbnail alt',
      src: '/images/thumbnail-1.png',
    },
    link: '/r/ggplot-example.html',
  },
  {
    title: 'Example 2 ggPlotly',
    description:
      'Originally commissioned by Telefónica and Mozilla Corporation as part of the joint effort during the development of Firefox OS.',
    subtitle: 'Designed by Erik Speikermann',
    image: {
      alt: 'thumbnail alt',
      src: '/images/thumbnail-1.png',
    },
    link: '/r/ggplot-example.html',
  },
];
