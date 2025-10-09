"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const EVENT_URL_MAP: Record<string, string | undefined> = {
  '27.09': 'https://schedule.twitchrivals.com/events/sonic-racing-crossworlds-eu-qualifier-on-twitch-rivals-lk2EK',
  '03.10': 'https://schedule.twitchrivals.com/events/sonic-racing-crossworlds-grand-finals-on-twitch-rivals-Z0pYP'
};

export default function SubathonPage() {
  const [isSpinning, setIsSpinning] = useState(false)
  
  const handleLogoClick = () => {
    if (isSpinning) return // Ignore clicks while already spinning
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 800) // Reset after animation duration
  }

  const subgoals = useMemo(() => [
    { goal: 500, text: "🎲 RMT W/ GIFTSUBS", met: true },
    { goal: 1000, text: "🎲 RMC W/ GIFTSUBS", met: true },
    { goal: 1500, text: "🖥️ RATING VIEWER SETUPS", met: true },
    { goal: 2000, text: "🔧 SPEEDMAPPING EVENT", met: true },
    { goal: 2500, text: "🎵 AMQ W/ GIFTSUBS", met: true },
    { goal: 3000, text: "🎮 CHAT PICKS A RANDOM STEAM GAME", met: true },
    { goal: 3500, text: "🌍 GEOGUESSR VS CHAT", met: true },
    { goal: 4000, text: "🏆 KO TOURNAMENT", met: true },
    { goal: 4500, text: "😂 YLYL CHALLENGE", met: true },
    { goal: 5000, text: "🥇 50 WRs CHALLENGE", met: true },
    { goal: 5500, text: "🎶 SONG REQUESTS", met: true },
    { goal: 6000, text: "🎮 PLAYING RANDOM ALT CAMPAIGN", met: true },
    { goal: 6500, text: "🎮 WIN CHALLENGE IN VARIOUS GAMES", met: true },
    { goal: 6969, text: "👗 COSPLAY OF CHAT'S CHOICE", met: true },
    { goal: 7500, text: "💀 PLAYING A SOULSLIKE GAME", met: true },
    { goal: 8000, text: "⚔️ VIEWER CHALLENGES", met: true },
    { goal: 8500, text: "📹 BUYING A GREENSCREEN", met: true },
    { goal: 9000, text: "🗺️ SPEEDMAPPING A MINICAMPAIGN", met: true },
    { goal: 9500, text: "💀 PLAYING A HORROR GAME", met: true },
    { goal: 10420, text: "♾️ UNCAPPED SUBATHON", met: true },
    { goal: 11111, text: "⏰ 50% MORE TIME FOR AN HOUR", met: true },
    { goal: 12000, text: "🎮 REINSTALL ELDEN RING", met: true },
    { goal: 13000, text: "🎲 PLAYING 2 RANDOM GAMES FROM STEAM 'NEW RELEASES' TAB", met: true },
    { goal: 15000, text: "😈 COMMISSIONING A VTUBER MODEL", met: true },
    { goal: 16000, text: "👠 PLAYING STELLAR BLADE", met: true },
    { goal: 17000, text: "🏎 PLAYING A RANDOM RACING GAME ON STEAM", met: true }, 
    { goal: 17500, text: "🎯 BIG BINGO BANGO", met: false },
    { goal: 18000, text: "🔫 BF6 COLLAB", met: false },
    { goal: 20000, text: "🎤 KARAOKE", met: false },
    { goal: 22222, text: "⏰ 50% MORE TIME FOR AN HOUR", met: false },

  ], []);

  const events = useMemo(() => [
    { date: "📆 Saturday, 27.09", text: "🏆 Twitch Rivals", completed: true },
    { date: "📆 Friday, 03.10", text: "🏆 Twitch Rivals Finals", completed: true },
  ], []);

  const timerRules = useMemo(() => [
    { label: "💎 Tier 1/Prime", value: "⚡ 1 min" },
    { label: "💎 Tier 2", value: "⚡ 2 min" },
    { label: "💎 Tier 3", value: "⚡ 5 min" },
    { label: "💎 $5 dono", value: "⚡ 1 min" },
    { label: "💎 500 Bits", value: "⚡ 1 min" },
    { label: "💎 Follow (look below)", value: "⚡ 1 sec" },
  ], []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-900" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 shadow-2xl backdrop-blur-lg border-2 sm:border-4 border-black">
          <div className="relative p-4 sm:p-6">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-400 via-cyan-400 to-emerald-400 rounded-3xl animate-gradient opacity-90" />
            <div className="absolute -inset-6 bg-gradient-to-tl from-purple-400 via-pink-400 via-rose-400 to-orange-400 rounded-3xl animate-gradient opacity-80" style={{animationDelay: '3s'}} />
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl animate-gradient opacity-70" style={{animationDelay: '6s'}} />
            
            <h1 className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center text-white animate-float mb-4 sm:mb-6">
              <Image
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png"
                alt="Scrapie avatar"
                width={80}
                height={80}
                className={`h-16 w-16 sm:h-20 sm:w-20 rounded-full border-4 border-purple-400 shadow-lg animate-pulse-glow cursor-pointer hover:scale-110 transition-transform duration-200 ${isSpinning ? 'animate-spin-once' : ''}`}
                onClick={handleLogoClick}
                priority
              />
              <span className="text-white leading-tight">
                Scrapie&apos;s Subtember Subathon
              </span>
            </h1>
            
            <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[1.6fr_1fr] md:items-start lg:items-stretch">
              {/* Subgoals */}
              <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 flex flex-col">
                <CardContent className="p-4 sm:p-6 bg-gray-900 rounded-lg flex flex-col flex-1">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
                    <span className="text-xl sm:text-2xl lg:text-3xl">🎯</span> 
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Subgoals</span>
                    <span className="text-xl sm:text-2xl lg:text-3xl">🎯</span>
                  </h2>
                  <ul className="space-y-1 flex-1 flex flex-col justify-between">
                    {subgoals.map((s, idx) => (
                      <li
                        key={idx}
                        className={`grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] items-center gap-2 sm:gap-3 p-2 rounded-lg transition-all duration-200 group ${
                          s.met 
                            ? 'bg-gradient-to-r from-green-800 to-green-700 hover:from-green-700 hover:to-green-600' 
                            : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
                        }`}
                      >
                        <span className={`font-black text-right animate-number-glow group-hover:scale-110 transition-transform duration-200 text-sm sm:text-base ${
                          s.met ? 'text-green-400' : 'text-blue-400'
                        }`}>
                          {s.goal}
                        </span>
                        <span className={`font-trueno text-left group-hover:translate-x-1 transition-transform duration-200 text-xs sm:text-sm lg:text-base ${
                          s.met ? 'text-green-100 line-through' : 'text-white'
                        }`}>
                          {s.text} {s.met ? '✅' : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4 sm:space-y-6 flex flex-col">
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  <CardContent className="p-1 bg-gray-900 rounded-lg">
                    <div className="flex flex-col gap-2">
                      <div className="relative aspect-video w-full rounded-md overflow-hidden">
                        <iframe
                          src="https://player.twitch.tv/?channel=scrapie&parent=localhost&parent=scrapie-subathon.vercel.app&muted=true"
                          height="100%"
                          width="100%"
                          allowFullScreen={true}
                          className="absolute inset-0"
                          title="Scrapie's Twitch Stream"
                          loading="lazy"
                        ></iframe>
                      </div>
                      <button 
                        className="bg-purple-600 hover:bg-purple-500 rounded-md p-2 sm:p-3 transition-colors duration-300 cursor-pointer w-full animate-shimmer"
                        onClick={() => window.open('https://twitch.tv/Scrapie', '_blank')}
                        aria-label="Watch live on Twitch"
                      >
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-white font-bold text-lg sm:text-xl">WATCH LIVE</span>
                          </div>
                          <Image
                            src="https://pngimg.com/uploads/twitch/twitch_PNG23.png"
                            alt="Twitch logo"
                            width={32}
                            height={32}
                            className="h-6 w-6 sm:h-8 sm:w-8"
                          />
                        </div>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Events */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  <CardContent className="p-4 sm:p-5 bg-gray-900 rounded-lg">
                    <div className="mb-3 sm:mb-4 flex items-center justify-between gap-3">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold flex items-center gap-2">
                        <span className="text-lg sm:text-xl lg:text-2xl">📅</span> 
                        <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Events</span>
                      </h2>
                      <div className="relative">
                        <Image
                          src="https://pngimg.com/uploads/twitch/twitch_PNG23.png"
                          alt="Twitch logo"
                          width={44}
                          height={44}
                          className="h-8 w-8 sm:h-11 sm:w-11 hover:scale-110 transition-transform duration-200"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 text-white">
                      {events.map((e, idx) => {
                        const dateKey = e.date.includes('27.09') ? '27.09' : e.date.includes('03.10') ? '03.10' : '';
                        const eventUrl = EVENT_URL_MAP[dateKey];
                        
                        return (
                          <li
                            key={idx}
                            className={`grid grid-cols-[auto_1fr] items-center gap-3 sm:gap-4 text-xs sm:text-sm lg:text-base 
                              ${e.completed 
                                ? 'bg-gradient-to-r from-green-800 to-green-700 hover:from-green-700 hover:to-green-600' 
                                : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'} 
                              p-2 sm:p-3 rounded-lg transition-all duration-200 ${eventUrl ? 'cursor-pointer' : ''}`}
                            onClick={() => eventUrl && window.open(eventUrl, '_blank')}
                          >
                            <span className={`font-semibold whitespace-nowrap ${e.completed ? 'text-green-300' : ''}`}>{e.date}</span>
                            <span className={`font-trueno text-right ${e.completed ? 'text-green-100 line-through' : ''}`}>
                              {e.text} {e.completed ? '✅' : ''}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>

                {/* Timer */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 animate-shimmer">
                  <CardContent className="p-4 sm:p-5 bg-gray-900 rounded-lg">
                    <div className="mb-3 sm:mb-4 flex items-center justify-between gap-3">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text flex items-center gap-2">
                        ⏰ Timer Rules
                      </h2>
                      <div className="text-2xl sm:text-3xl lg:text-4xl animate-tick">⏰</div>
                    </div>
                    <ul className="space-y-2 text-white">
                      {timerRules.map((t, idx) => (
                        <li
                          key={idx}
                          className="grid grid-cols-[1fr_auto] items-center gap-3 sm:gap-4 bg-gradient-to-r from-gray-800 to-gray-700 p-2 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200"
                        >
                          <span className="text-xs sm:text-sm lg:text-base">{t.label}</span>
                          <span className="font-trueno text-right font-black text-xs sm:text-sm lg:text-base">{t.value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Additional Stuff */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  <CardContent className="p-4 sm:p-5 bg-gray-900 rounded-lg">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text flex items-center justify-center gap-2">
                      ✨ Additional Stuff ✨
                    </h2>
                    <ul className="space-y-2 sm:space-y-3 text-white">
                      <li className="font-trueno bg-gradient-to-r from-gray-800 to-gray-700 p-2 sm:p-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200 text-xs sm:text-sm lg:text-base">
                        ⏰ Time for following is only added if you haven&apos;t unfollowed in last 2 months.
                      </li>
                      <li className="font-trueno bg-gradient-to-r from-gray-800 to-gray-700 p-2 sm:p-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200 text-xs sm:text-sm lg:text-base">
                        🔄 Every 1000 Subs repeats the 1000 Subs goal.
                      </li>
                      <li className="font-trueno bg-gradient-to-r from-gray-800 to-gray-700 p-2 sm:p-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200 text-xs sm:text-sm lg:text-base">
                        🗺️ Gifting 20 Subs means you can request a map to play (when we figure out how to check that stuff).
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}