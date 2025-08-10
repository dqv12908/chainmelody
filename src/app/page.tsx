import MiniPublishing from "@/components/MiniPublishing";
import MiniDiscovery from "@/components/MiniDiscovery";
import MiniRoyalties from "@/components/MiniRoyalties";
import MiniEmpower from "@/components/MiniEmpower";
import MiniCopyright from "@/components/MiniCopyright";
import MiniFees from "@/components/MiniFees";
import MiniFanPower from "@/components/MiniFanPower";
import MiniNFT from "@/components/MiniNFT";
import MiniGovernance from "@/components/MiniGovernance";
import TokenPieChart from "@/components/TokenPieChart";
import Image from "next/image";
import ScrollingCovers from "@/components/ScrollingCovers";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center gap-10">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="max-w-2xl">
                <h1 className="text-2xl sm:text-4xl md:text-6xl leading-tight md:leading-tight break-words font-semibold tracking-tight text-blue-900">
                  ChainMelody – The Future of Music Streaming on Blockchain
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-800/80">
                  The next-gen decentralized music streaming platform—powered by
                  blockchain, governed by community, and built for creators and
                  fans. 
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href="#tokenomics"
                    className="inline-flex w-auto whitespace-nowrap self-start sm:self-auto items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
                  >
                    Explore Tokenomics
          </a>
          <a
                    href="#features"
                    className="inline-flex w-auto whitespace-nowrap self-start sm:self-auto items-center justify-center rounded-lg bg-white border border-blue-200 px-5 py-3 text-blue-700 hover:bg-blue-50 transition"
                  >
                    Platform Features
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="mt-8 md:mt-0">
                <HeroCarousel />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What is ChainMelody */}
      <section id="what-is" className="bg-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">What is ChainMelody?</h2>
                <p className="mt-4 text-blue-800/80">
                  ChainMelody is a decentralized music streaming platform that
                  empowers underground musicians and independent artists with
                  transparent ownership and fair monetization. Built on Polygon,
                  it enables direct publishing, NFT-based licensing, and
                  community-led discovery.
                </p>
                <ul className="mt-6 space-y-2 text-blue-800/90">
                  <li>• Transparent copyright and immutable ownership</li>
                  <li>• Zero platform fees — artists keep what they earn</li>
                  <li>• Fans can support, own, and influence artist success</li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="order-first md:order-none">
                {/* Mini publishing demo */}
                <MiniPublishing />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Header */}
      <section id="features" className="bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Platform Features</h2>
              <p className="mt-3 text-blue-800/80">
                A creator-first stack for publishing, royalties, and community discovery—powered by Polygon and the $MELO token.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features: Decentralized Publishing */}
      <section className="bg-gradient-to-b from-white to-blue-50 min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Decentralized Publishing</h2>
                <p className="mt-4 text-blue-800/80">
                  Artists upload, publish, and monetize directly. NFT-based licensing ensures immutable ownership and permissionless distribution.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="order-first md:order-none">
                <MiniPublishing />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features: Fair Royalties */}
      <section className="bg-white min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Fair Royalties</h2>
                <p className="mt-4 text-blue-800/80">
                  Real-time royalty splits via smart contracts, tipping, and streaming rewards align incentives for artists, producers, and labels.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="md:order-1">
                <MiniRoyalties />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features: Community Discovery */}
      <section className="bg-blue-50 min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Community Discovery</h2>
                <p className="mt-4 text-blue-800/80">
                  Listener DAO powers curation, votes, and artist grants, helping the community surface rising stars and trending tracks.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="order-first md:order-none">
                <MiniDiscovery />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why ChainMelody Header */}
      <section className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Why ChainMelody</h2>
              <p className="mt-3 text-blue-800/80">
                A transparent, community-powered ecosystem designed for independent artists and their fans.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why 1: Empower Independent Musicians */}
      <section className="bg-gradient-to-b from-white to-blue-50 min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 pb-10 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="left">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">Empowers underground & independent musicians</h3>
                <p className="mt-4 text-blue-800/80">Create profiles, publish tracks, and grow without gatekeepers or platform cuts.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="order-first md:order-none">
                <MiniEmpower />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why 2: Transparent Copyright */}
      <section className="bg-white min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="md:order-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">Transparent copyright protection via blockchain</h3>
                <p className="mt-4 text-blue-800/80">Register content on-chain with verifiable hashes and NFT-based licensing.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="md:order-1">
                <MiniCopyright />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why 3: Zero Platform Fees */}
      <section className="bg-blue-50 min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="left">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">Zero platform fees – artists keep what they earn</h3>
                <p className="mt-4 text-blue-800/80">A minimal network fee is partially burned and routed to the Artist Growth Pool.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="order-first md:order-none">
                <MiniFees />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why 4: Fan Ownership & Support */}
      <section className="bg-white min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="md:order-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">Fans can own, support, and influence artists</h3>
                <p className="mt-4 text-blue-800/80">Stake $MELO to back artists, boost visibility, and unlock exclusive access.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="md:order-1">
                <MiniFanPower />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why 5: NFT & Streaming-to-earn */}
      <section className="bg-blue-50 min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="left">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">NFT integration & streaming-to-earn</h3>
                <p className="mt-4 text-blue-800/80">Collect limited tracks and access passes, and earn rewards for engagement.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="order-first md:order-none">
                <MiniNFT />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why 6: Community-first Governance */}
      <section className="bg-white min-h-[600px] md:min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="md:order-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">Community-first discovery & governance</h3>
                <p className="mt-4 text-blue-800/80">Listener DAO curates playlists, votes for rising stars, and allocates grants.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="md:order-1">
                <MiniGovernance />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Community Proof */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Join 1,000+ artists building on ChainMelody</h2>
              <p className="mt-3 text-blue-800/80">Discover new audiences, protect your rights, and monetize fairly.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <div className="mt-10">
              <ScrollingCovers />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="bg-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Token – $MELO</h2>
          </ScrollAnimation>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            {/* Left: stacked cards */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="grid gap-6">
                <div className="rounded-xl border border-blue-100 p-6">
                  <h3 className="text-xl font-semibold text-blue-800">Details</h3>
                  <ul className="mt-3 space-y-2 text-blue-800/80">
                    <li><span className="font-semibold">Name:</span> ChainMelody</li>
                    <li><span className="font-semibold">Ticker:</span> $MELO</li>
                    <li><span className="font-semibold">Total Supply:</span> 1,600,000,000</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-blue-100 p-6">
                  <h3 className="text-xl font-semibold text-blue-800">Chain</h3>
                  <ul className="mt-3 space-y-2 text-blue-800/80">
                    <li><span className="font-semibold">Network:</span> Polygon (EVM-compatible)</li>
                    <li><span className="font-semibold">Standard:</span> ERC-20</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-blue-100 p-6">
                  <h3 className="text-xl font-semibold text-blue-800">Utilities</h3>
                  <ul className="mt-3 space-y-2 text-blue-800/80">
                    <li>Streaming-to-earn incentives</li>
                    <li>NFT collectibles & artist drops</li>
                    <li>DAO voting & curation</li>
                    <li>Tipping & direct support</li>
                    <li>Access: launches, passes, events</li>
                  </ul>
                </div>
                <p className="text-blue-800/80">
                  A small transaction fee (e.g. 1.5%) is partially burned or reallocated to an Artist Growth Pool, sustaining long-term incentives.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right: token image */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="flex justify-center">
                <div className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[600px]">
          <Image
                    src="/coin.png"
                    alt="$MELO coin"
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Tokenomics</h2>
          </ScrollAnimation>
          <div className="mt-10 grid gap-10 md:grid-cols-2 items-center">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="rounded-xl border border-blue-100 p-6 bg-white">
                <h3 className="text-xl font-semibold text-blue-800">Allocation</h3>
                <TokenPieChart
                  data={[
                    { label: "Community Incentives", value: 35, color: "#3b82f6" },
                    { label: "Ecosystem Development", value: 20, color: "#2563eb" },
                    { label: "Team & Advisors", value: 15, color: "#1d4ed8" },
                    { label: "Strategic Investors", value: 12, color: "#60a5fa" },
                    { label: "Initial Liquidity", value: 10, color: "#93c5fd" },
                    { label: "Compliance Incentives", value: 8, color: "#1e40af" },
                  ]}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="rounded-xl border border-blue-100 p-6 bg-white">
                <h3 className="text-xl font-semibold text-blue-800">Breakdown</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="text-left py-2 font-semibold text-blue-900">Category</th>
                        <th className="text-left py-2 font-semibold text-blue-900">Allocation Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-800/80">
                      <tr className="border-b border-blue-50">
                        <td className="py-3 font-medium">Community Incentives</td>
                        <td className="py-3">
                          <div className="text-blue-900 font-medium"></div>
                          <div className="mt-1">Streaming rewards, fan tipping bonuses, playlist curation rewards, and engagement incentives</div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="py-3 font-medium">Ecosystem Development</td>
                        <td className="py-3">
                          <div className="text-blue-900 font-medium"></div>
                          <div className="mt-1">DAO treasury, artist grants, hackathons, cross-chain integrations, and platform improvements</div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="py-3 font-medium">Team & Advisors</td>
                        <td className="py-3">
                          <div className="text-blue-900 font-medium"></div>
                          <div className="mt-1">Core contributors, artists-in-residence, and advisors with 3-4 year vesting schedule</div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="py-3 font-medium">Strategic Investors</td>
                        <td className="py-3">
                          <div className="text-blue-900 font-medium"></div>
                          <div className="mt-1">Aligned VCs, music labels, and Web3 incubators with lock-up and vesting periods</div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="py-3 font-medium">Initial Liquidity</td>
                        <td className="py-3">
                          <div className="text-blue-900 font-medium"></div>
                          <div className="mt-1">DEX/CEX liquidity pools (Uniswap, QuickSwap) and LP incentives for market stability</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Compliance Incentives</td>
                        <td className="py-3">
                          <div className="text-blue-900 font-medium"></div>
                          <div className="mt-1">Regulatory integration, music rights registration, KYC tools, and publishing partnerships</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="bg-blue-600 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-24 text-white">
          <ScrollAnimation>
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-5xl font-semibold leading-tight">Be part of the ChainMelody movement</h3>
              <p className="mt-4 text-blue-100 text-lg">
                Launch the app to experience decentralized music streaming, or read the docs to explore the protocol.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-blue-700 hover:bg-blue-50 transition font-medium"
                >
                  Launch App
        </a>
        <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 hover:bg-white/10 transition font-medium"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </ScrollAnimation>
    </div>
      </section>
    </main>
  );
}
