export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">ChainMelody • $MELO</div>
          <p className="mt-3 text-blue-200 text-sm">
            Decentralized music streaming and creator economy on Polygon.
          </p>
        </div>
        <div>
          <div className="font-semibold text-blue-50">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-blue-200">
            <li><a href="#what-is" className="hover:underline">What is ChainMelody</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#tokenomics" className="hover:underline">Tokenomics</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-blue-50">Resources</div>
          <ul className="mt-3 space-y-2 text-sm text-blue-200">
            <li><a href="#" className="hover:underline">Litepaper</a></li>
            <li><a href="#" className="hover:underline">Docs</a></li>
            <li><a href="#" className="hover:underline">Brand</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-blue-50">Community</div>
          <ul className="mt-3 space-y-2 text-sm text-blue-200">
            <li><a href="#" className="hover:underline">X (Twitter)</a></li>
            <li><a href="#" className="hover:underline">Discord</a></li>
            <li><a href="#" className="hover:underline">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-blue-200">© {new Date().getFullYear()} ChainMelody. All rights reserved.</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-blue-200 hover:underline">Terms</a>
            <a href="#" className="text-blue-200 hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


