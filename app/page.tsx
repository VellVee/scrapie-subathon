"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export default function SubathonPage() {
  const [isSpinning, setIsSpinning] = useState(false)
  
  const handleLogoClick = () => {
    if (isSpinning) return // Ignore clicks while already spinning
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 800) // Reset after animation duration
  }



  const subgoals = [
    { goal: 500, text: "RMT W/ GIFTSUBS" },
    { goal: 1000, text: "RMC /W GIFTSUBS" },
    { goal: 1500, text: "RATING VIEWER SETUPS" },
    { goal: 2000, text: "SPEEDMAPPING EVENT" },
    { goal: 2500, text: "AMQ W/ GIFTSUBS" },
    { goal: 3000, text: "CHAT PICKS A RANDOM STEAM GAME" },
    { goal: 3500, text: "GEOGUESSR VS CHAT" },
    { goal: 4000, text: "KO TOURNAMENT" },
    { goal: 4500, text: "YLYL CHALLENGE" },
    { goal: 5000, text: "50 WRs CHALLENGE" },
    { goal: 5500, text: "SONG REQUESTS" },
    { goal: 6000, text: "PLAYING RANDOM ALT CAMPAIGN" },
    { goal: 6500, text: "WIN CHALLENGE IN VARIOUS GAMES" },
    { goal: 6969, text: "COSPLAY OF CHAT'S CHOICE" },
    { goal: 7500, text: "PLAYING SOULSLIKE GAME" },
    { goal: 8000, text: "VIEWER CHALLENGES" },
    { goal: 8500, text: "BUYING A GREENSCREEN" },
    { goal: 9000, text: "SPEEDMAPPING A MINICAMPAIGN" },
    { goal: 9500, text: "PLAYING A HORROR GAME" },
    { goal: 10000, text: "MAX TIMER FOR 7 DAYS" },
    { goal: 15000, text: "COMMISSIONING A VTUBER MODEL" },
    { goal: 20000, text: "INFINITE SUBATHON" },
  ]

  const events = [
    { date: "Saturday, 27.09", text: "Twitch Rivals" },
    { date: "Friday, 03.10", text: "Twitch Rivals Finals" },
  ]

  const timerRules = [
    { label: "Tier 1/Prime", value: "1 min" },
    { label: "Tier 2", value: "2 min" },
    { label: "Tier 3", value: "5 min" },
    { label: "$5 dono", value: "1 min" },
    { label: "500 Bits", value: "1 min" },
    { label: "Follow", value: "1 sec" },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-900" />
      </div>

      <section className="relative mx-auto w-full px-6 py-12 fixed-layout">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 shadow-2xl backdrop-blur-lg border-4 border-black">
          <div className="relative p-6">
            {/* Animated gradient background */}
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-400 via-cyan-400 to-emerald-400 rounded-3xl animate-gradient opacity-90" />
            <div className="absolute -inset-6 bg-gradient-to-tl from-purple-400 via-pink-400 via-rose-400 to-orange-400 rounded-3xl animate-gradient opacity-80" style={{animationDelay: '3s'}} />
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl animate-gradient opacity-70" style={{animationDelay: '6s'}} />
            
            <h1 className="relative flex items-center justify-center gap-4 text-5xl font-extrabold text-center text-white animate-float mb-6">
              <Image
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/a3960d56-8d00-4d88-85a6-f2fea4115ea6-profile_image-70x70.png"
                alt="Scrapie avatar"
                width={80}
                height={80}
                className={`h-20 w-20 rounded-full border-4 border-purple-400 shadow-lg animate-pulse-glow cursor-pointer hover:scale-110 transition-transform duration-200 ${isSpinning ? 'animate-spin-once' : ''}`}
                onClick={handleLogoClick}
                priority
              />
              <span className="text-white">
                Scrapie&apos;s Subtember Subathon
              </span>
            </h1>
            
            <div className="relative grid gap-6 lg:grid-cols-[1.6fr_1fr] md:items-start lg:items-stretch">
              {/* Subgoals */}
              <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 flex flex-col">
                <CardContent className="p-6 bg-gray-900 rounded-lg flex flex-col flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <span className="text-3xl">🎯</span> 
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Subgoals</span>
                    <span className="text-3xl">🎯</span>
                  </h2>
                  <ul className="space-y-1 flex-1 flex flex-col justify-between">
                    {subgoals.map((s, idx) => {
                      const getEmoji = (goal: number, text: string) => {
                        if (text.includes('RMT') || text.includes('RMC')) return '🎲';
                        if (text.includes('SPEEDMAPPING') && text.includes('EVENT')) return '🔧';
                        if (text.includes('SPEEDMAPPING') && text.includes('MINICAMPAIGN')) return '🗺️';
                        if (text.includes('AMQ')) return '🎵';
                        if (text.includes('CHAT PICKS')) return '🎮';
                        if (text.includes('GEOGUESSR')) return '🌍';
                        if (text.includes('TOURNAMENT')) return '🏆';
                        if (text.includes('YLYL')) return '😂';
                        if (text.includes('50WRs')) return '🥇';
                        if (text.includes('SONG REQUESTS')) return '🎶';
                        if (text.includes('COSPLAY')) return '👗';
                        if (text.includes('SOULSLIKE') || text.includes('HORROR')) return '💀';
                        if (text.includes('VIEWER CHALLENGES')) return '⚔️';
                        if (text.includes('GREENSCREEN')) return '📹';
                        if (text.includes('VTUBER')) return '🎭';
                        if (text.includes('INFINITE')) return '♾️';
                        return '🎯';
                      };
                      
                      return (
                        <li
                          key={idx}
                          className="grid grid-cols-[4rem_1fr] items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 p-2 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200 group"
                        >
                          <span className="font-black text-right text-blue-400 animate-number-glow group-hover:scale-110 transition-transform duration-200">
                            {s.goal}
                          </span>
                          <span className="font-trueno text-left text-white group-hover:translate-x-1 transition-transform duration-200">
                            {getEmoji(s.goal, s.text)} {s.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-6 flex flex-col">
                {/* Watch Live */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] border-0 cursor-pointer animate-shimmer">
                  <CardContent 
                    className="p-1 bg-gray-900 rounded-lg"
                    onClick={() => window.open('https://twitch.tv/Scrapie', '_blank')}
                  >
                    <div className="bg-purple-600 hover:bg-purple-500 rounded-md p-4 transition-colors duration-300">
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-white font-bold text-xl">WATCH LIVE</span>
                        </div>
                        <Image
                          src="https://pngimg.com/uploads/twitch/twitch_PNG23.png"
                          alt="Twitch logo"
                          width={32}
                          height={32}
                          className="h-8 w-8"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Events */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  <CardContent className="p-5 bg-gray-900 rounded-lg">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="text-2xl">📅</span> 
                        <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Events</span>
                      </h2>
                      <div className="relative">
                        <Image
                          src="https://pngimg.com/uploads/twitch/twitch_PNG23.png"
                          alt="Twitch logo"
                          width={44}
                          height={44}
                          className="h-11 w-11 hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                    </div>
                    <ul className="space-y-3 text-white">
                      {events.map((e, idx) => (
                        <li
                          key={idx}
                          className="grid grid-cols-[auto_1fr] items-center gap-4 text-sm sm:text-base bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200"
                        >
                          <span className="font-semibold">📆 {e.date}</span>
                          <span className="font-trueno text-right">🏆 {e.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Timer */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 animate-shimmer">
                  <CardContent className="p-5 bg-gray-900 rounded-lg">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text flex items-center gap-2">
                        ⏰ Timer Rules
                      </h2>
                      <div className="text-4xl animate-tick">⏰</div>
                    </div>
                    <ul className="space-y-2 text-white">
                      {timerRules.map((t, idx) => (
                        <li
                          key={idx}
                          className="grid grid-cols-[1fr_auto] items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-700 p-2 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200"
                        >
                          <span>💎 {t.label}</span>
                          <span className="font-trueno text-right font-black">⚡ {t.value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Additional Stuff */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  <CardContent className="p-5 bg-gray-900 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text flex items-center justify-center gap-2">
                      ✨ Additional Stuff ✨
                    </h2>
                    <ul className="space-y-3 text-white">
                      <li className="font-trueno bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200">
                        🔄 Every 1000 Subs repeats the 1000 Subs goal
                      </li>
                      <li className="font-trueno bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200">
                        🗺️ 20 Subs = You can request a map to play during daily session
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 16:9 Image */}
                <Card className="bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  <CardContent className="p-1 bg-gray-900 rounded-lg">
                    <div className="relative aspect-video w-full rounded-md overflow-hidden bg-gray-800">
                      <img
                                  src="/images/image.webp"
                        alt="Subathon Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
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
