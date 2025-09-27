export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-neutral-400">© {year} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}





