import Profile from '@/components/Profile/Profile';
export default function page({ params } : {params: {id: string}}) {
  return (
    <div>
      <Profile params={params.id} />
    </div>
  );
}
