import { Heading } from '@/components/primitives/heading'
import { Image } from '@/components/primitives/image'
import { Link } from '@/components/primitives/link'
import { P } from '@/components/primitives/paragraph'
import { ThreeColumns } from '@/components/three-columns'
import { TwoColumns } from '@/components/two-columns'

export default function Home() {
  return (
    <main className="flex flex-col space-y-36">
      <section className="flex flex-col space-y-8">
        <P className="max-w-2xl">
          Located in the heart of Los Angeles, our studio is surrounded by the
          city's diverse and dynamic culture, providing endless opportunities
          for inspiration and creativity. We invite you to explore our portfolio
          and see for yourself the caliber of work we produce. Contact us today
          to learn more about our videography services and how we can help bring
          your vision to life.
        </P>
        <Link href="mailto:sudo@example.com">sudo@example.com</Link>
      </section>

      <Image
        width={1360}
        height={750}
        src="/images/ts2h4XcIrdo.webp"
        alt="An old Porsche driving on a sandy road"
      />

      <P>
        We understand the importance of storytelling and strive to create
        compelling narratives that resonate with our clients and their
        audiences. Whether you're looking to capture a wedding, promote your
        brand, or produce a creative project, our team is here to collaborate
        with you every step of the way.
      </P>

      <TwoColumns
        left={
          <Image
            width={656}
            height={750}
            src="/images/GpJxmjgN0DI.webp"
            alt="An offroad buggy drives along a sand dune"
          />
        }
        right={
          <Image
            width={656}
            height={750}
            src="/images/xPEGf7Jy0jY.webp"
            alt="A man stands in front of an offroad buggy in the desert"
          />
        }
      />

      <TwoColumns
        className="items-center"
        left={
          <Image
            width={656}
            height={650}
            src="/images/GpJxmjgN0DI.webp"
            alt="An offroad buggy drives along a sand dune"
          />
        }
        right={
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-12">
              <Heading>The story behind our videography studio</Heading>
              <P>
                Our goal is to create visually stunning and emotionally
                compelling cinematic experiences for our clients through the art
                of photography and videography. We are passionate about
                storytelling and bringing our clients' visions to life through
                creative talents and expertise.
              </P>
            </div>
            <P>
              By utilizing the latest technology and equipment, SUDO. is
              committed to delivering high-quality work that exceeds
              expectations and leaves a lasting impression on our clients and
              their audiences. Ultimately, our mission is to create meaningful
              and unforgettable cinematic moments that capture the essence of
              our clients' stories and help them to connect with their viewers
              on a deeper level.
            </P>
          </div>
        }
      />

      <ThreeColumns
        left={
          <Image
            width={421}
            height={750}
            src="/images/GpJxmjgN0DI.webp"
            alt="An offroad buggy drives along a sand dune"
          />
        }
        middle={
          <Image
            width={421}
            height={750}
            src="/images/xPEGf7Jy0jY.webp"
            alt="A man stands in front of an offroad buggy in the desert"
          />
        }
        right={
          <Image
            width={421}
            height={750}
            src="/images/xPEGf7Jy0jY.webp"
            alt="A man stands in front of an offroad buggy in the desert"
          />
        }
      />

      <section className="flex flex-col space-y-10">
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </P>
      </section>
    </main>
  )
}
