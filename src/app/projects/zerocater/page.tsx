import Image from 'next/image';
import { getImageUrl } from '@/utils/imageUtils';

export default function ZeroCaterPage() {
  return (
    <div>
      <Image
        src={getImageUrl("zerocater-web-2015.png")}
        alt="ZeroCater Website 2015"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-hero-2017.gif")}
        alt="ZeroCater Hero 2017"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-web-2017.png")}
        alt="ZeroCater Website 2017"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-web-2014.gif")}
        alt="ZeroCater Website 2014"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-web-2014-1.png")}
        alt="ZeroCater Website 2014 Screenshot 1"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-web-2014-2.png")}
        alt="ZeroCater Website 2014 Screenshot 2"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-hero-2020.gif")}
        alt="ZeroCater Hero 2020"
        width={800}
        height={600}
      />
      <Image
        src={getImageUrl("zerocater-web-2014-3.png")}
        alt="ZeroCater Website 2014 Screenshot 3"
        width={800}
        height={600}
      />
    </div>
  );
} 