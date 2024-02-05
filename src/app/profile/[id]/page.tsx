'use client';
import Profile from '@/components/Profile/Profile';
import { usePathname } from 'next/navigation';

export default function page({ params } : {params: {id: string}}) {
  return (
    <div>
      <Profile params={params.id} />
    </div>
  );
}
