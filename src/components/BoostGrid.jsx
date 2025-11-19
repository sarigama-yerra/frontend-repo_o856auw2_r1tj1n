import BoostCard from './BoostCard';

const boosts = [
  {
    title: 'Rank Boost',
    description: 'Climb from Bronze to Predator with safe, duo or piloted options.',
    priceFrom: 19,
    img: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/5/59/Predator_Ranked_Badge_Season_4.png',
    tag: 'Popular'
  },
  {
    title: 'Kills & Damage',
    description: 'Pad your stats with high-damage lobbies and smart rotations.',
    priceFrom: 9,
    img: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/3/35/4k_Damage_Badge.png',
  },
  {
    title: 'Win Streaks',
    description: 'Secure back-to-back wins in pubs or ranked with a pro squad.',
    priceFrom: 15,
    img: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/5/5f/Apex_Win_Streak_Badge.png',
  },
  {
    title: 'Legend Badges',
    description: '20 Bombs, 4K damage, and trackers for your favorite legend.',
    priceFrom: 12,
    img: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/0/0b/20_Bomb_Badge.png',
  },
  {
    title: 'Battle Pass',
    description: 'Level up your pass and unlock rewards quickly and safely.',
    priceFrom: 7,
    img: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/8/8c/Battle_Pass_Badge_Season_3.png',
  },
  {
    title: 'Placement Matches',
    description: 'Guaranteed placements with high MMR-friendly strategies.',
    priceFrom: 25,
    img: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/0/0d/RP_Badge.png',
  },
];

function BoostGrid() {
  return (
    <section id="boosts" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Popular boosts</h2>
        <div className="text-xs text-slate-400">Trusted by 5,000+ players</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {boosts.map((b, i) => (
          <BoostCard key={i} {...b} />
        ))}
      </div>
    </section>
  );
}

export default BoostGrid;
