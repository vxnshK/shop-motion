import Image from 'next/image';
import ShopMotionLogo from '@/public/shop_motion_logo.png';

interface ILogoProps {
  width?: number,
  height?: number
}

function Logo({ width= 200, height= 200 }: ILogoProps) {
  return (
    <Image
      src={ShopMotionLogo}
      alt={'ShopMotionLogo'}
      width={width}
      height={height}
    />
  );
}

export default Logo;
