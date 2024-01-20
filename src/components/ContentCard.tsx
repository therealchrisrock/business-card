import NextImage from '@/components/NextImage';
import { ThumbnailWrapper } from '@/components/ThumbnailWrapper';

export type ContentCardData = {
  title: string;
  subtitle: string;
  description: string;
  image: {
    alt: string;
    src: string;
  };
  link: string;
};

export function ContentCard({
  title,
  subtitle,
  description,
  image,
}: Omit<ContentCardData, 'link'>) {
  return (
    <section className='flex flex-col min-h-full'>
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <h3 className='pr-2'>{title}</h3>
          <div className='shrink-0'>
            <ThumbnailWrapper>
              <NextImage
                useSkeleton={true}
                alt={image.alt}
                src={image.src}
                width={41}
                height={41}
              />
            </ThumbnailWrapper>
          </div>
        </div>
        <p className='py-4 text-lg text-black/60'>{description}</p>
      </div>
      <footer className='text-sm text-black/60 pt-4'>{subtitle}</footer>
    </section>
  );
}
