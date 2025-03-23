export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-4">
      <div className="h-16 px-4 flex flex-wrap items-center justify-between">
        <div className="text-sm">AsyncMuseum</div>
        <div className="text-sm">
          &copy; {currentYear} AsyncMuseum. All rights reserved.
        </div>
      </div>
    </div>
  );
}
