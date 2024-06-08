export default function TitleBox({ params }: { params: String }) {
  return (
    <div className="px-4 py-4 text-left  border-b border-neutral-800/80 w-full">
      <h1 className="text-lg font-semibold">{params}</h1>
    </div>
  );
}
