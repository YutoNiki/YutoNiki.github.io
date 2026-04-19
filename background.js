document.addEventListener("DOMContentLoaded", () => {
  const backgroundHero = document.getElementById("backgroundHero");
  if (!backgroundHero) return;

  backgroundHero.innerHTML = `
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_28%),linear-gradient(180deg,#040404_0%,#090909_42%,#050505_100%)]"></div>
    <div class="hero-glow-a absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"></div>
    <div class="hero-glow-b absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-white/[0.04] blur-3xl"></div>

    <div class="pointer-events-none absolute inset-x-0 top-0 flex h-[34rem] items-start justify-center overflow-hidden">
      <div class="relative mt-6 h-[360px] w-[360px] md:h-[420px] md:w-[420px] opacity-90 network-layer">
        <div class="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_70%)] blur-xl"></div>

        <div class="earth-rotator">
          <div class="absolute inset-0 rounded-full border border-white/10"></div>

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-[80%] w-full rounded-full border border-white/10"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-[60%] w-full rounded-full border border-white/10"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-full w-[80%] rounded-full border border-white/10"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-full w-[60%] rounded-full border border-white/10"></div>
          </div>

          <svg viewBox="0 0 420 420" class="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
            <circle cx="210" cy="210" r="160" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
            <ellipse cx="210" cy="210" rx="170" ry="80" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
            <ellipse cx="210" cy="210" rx="80" ry="170" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
          </svg>

          <div class="packet" style="offset-path: path('M210 50 A160 160 0 1 1 209 50'); animation: flowA 6s linear infinite;"></div>
          <div class="packet" style="offset-path: path('M40 210 A170 80 0 1 1 39 210'); animation: flowA 7s linear infinite; animation-delay:1s;"></div>
          <div class="packet" style="offset-path: path('M210 40 A80 170 0 1 1 209 40'); animation: flowB 6.5s linear infinite; animation-delay:2s;"></div>
          <div class="packet" style="offset-path: path('M323 97 A160 160 0 1 1 322 97'); animation: flowA 5.7s linear infinite; animation-delay:0.6s;"></div>
          <div class="packet" style="offset-path: path('M100 210 A170 80 0 1 1 99 210'); animation: flowB 7.3s linear infinite; animation-delay:2.2s;"></div>

          <div class="net-node absolute left-[60%] top-[20%] h-3 w-3 rounded-full bg-white"></div>
          <div class="net-node delay-1 absolute left-[30%] top-[60%] h-3 w-3 rounded-full bg-white"></div>
          <div class="net-node delay-2 absolute left-[70%] top-[70%] h-2.5 w-2.5 rounded-full bg-white"></div>
          <div class="net-node delay-3 absolute left-[40%] top-[30%] h-3 w-3 rounded-full bg-white"></div>
          <div class="net-node delay-4 absolute left-[73%] top-[30%] h-3 w-3 rounded-full bg-white"></div>
          <div class="net-node delay-5 absolute left-[17%] top-[50%] h-2.5 w-2.5 rounded-full bg-white"></div>
          <div class="net-node delay-6 absolute left-[48%] top-[10%] h-2.5 w-2.5 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  `;

  const updateHeroFade = () => {
    const fadeStart = 0;
    const fadeEnd = 420;
    const progress = Math.min(Math.max((window.scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
    backgroundHero.style.opacity = String(1 - progress);
  };

  window.addEventListener("scroll", updateHeroFade, { passive: true });
  updateHeroFade();
});
