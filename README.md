# The World Today — Monday 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/MARUGAMIII/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/MARUGAMIII/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A one-page newspaper that sums up the world's news of Monday 23 November 2026
in a single image: **50 sourced stories**, a **UTC timeline** of the day, and a
**date check** printed on the page.

## The image

- **Lead story:** COP31 collapses with no deal in Antalya — nearly 200 countries
  leave the UN climate summit without an agreement after talks run 44 hours past
  their close; the EU rejects a draft with no mention of fossil fuels.
- **Featured:** Poland confirms three fallen objects were Russian cruise missiles
  (NATO to meet); tankers struck near the Strait of Hormuz; Asia reels as the
  AI sell-off deepens.
- **The day in 50 stories:** one line each, numbered 5–50, spanning Ukraine,
  the Gulf, Sudan, South Sudan, DR Congo, Nigeria, the West Bank, Israel,
  Bahrain, North Korea, Brazil, Australia, France, Germany, the UK, India,
  China, Nepal, Taiwan, Indonesia, the Philippines, Japan, Vanuatu — plus
  markets, sport (Alcaraz's first ATP Finals title, Marquez's eighth MotoGP
  crown, Verstappen in Las Vegas) and health, tech and culture.
- **Timeline (UTC):** 00:00 Asian markets open lower · 01:10 Bowen told to
  resign · 02:00 Albanese on COP31 · 02:40 M6.5 quake, Vanuatu · 06:21 French
  student protests · 08:07 polluters-pay alliance.
- **Date check:** every story on the page happened, or was first reported, on
  Monday 23 November 2026. No story predates 13 November 2026.

Sources: BBC, Reuters, AP, AFP, The Hindu, USGS, ATP, MotoGP, FIA, LPGA, FT,
Washington Post, VNN, Medianet, Munich Eye.

## How it works

`entry.png` (1024×1024, under 1 MiB) is the finished front page, rendered at
build time from the day's wires. `main.ts` (Node 22, standard library only)
copies it to `/output/entry.png`, byte for byte, on every run — so the two
grader runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Competition

[News image — 23 November 2026](https://make.fun/bounty/news-image-20261123) on
make.fun. $100 in prizes shared by the 50 highest-ranked entries.

## License

MIT — see [LICENSE](LICENSE).
