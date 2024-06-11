export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <a
        href="/api/auth/signin"
        className="py-2 bg-neutral-800 px-4 rounded-full w-[20%] text-center"
      >
        Auth
      </a>
    </div>
  );
}
