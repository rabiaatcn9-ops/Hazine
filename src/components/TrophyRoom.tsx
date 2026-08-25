import React, { useRef } from "react";
import { 
  Trophy, Award, Coins, Star, Printer, ArrowLeft, ShieldCheck, 
  CheckCircle2, Sparkles, Gem, BookOpen, User 
} from "lucide-react";
import { UserStats } from "../types";
import { sounds } from "../utils/soundEffects";

interface TrophyRoomProps {
  stats: UserStats;
  onBackToMap: () => void;
}

const ALL_GEMS = [
  { id: "emerald", name: "Zümrüt Kristali", color: "from-emerald-400 to-teal-600", icon: "💎", island: "1. Papağan Adası" },
  { id: "amethyst", name: "Mor Ametist Taşı", color: "from-purple-400 to-indigo-600", icon: "🔮", island: "2. Fısıldayan Orman" },
  { id: "ruby", name: "Alev Yakutu", color: "from-rose-500 to-red-700", icon: "❤️‍🔥", island: "3. Kristal Mağarası" },
  { id: "sapphire", name: "Okyanus Safiri", color: "from-blue-400 to-indigo-700", icon: "🔷", island: "4. Batık Korsan Gemisi" },
  { id: "diamond", name: "Deniz Elması", color: "from-cyan-300 to-blue-500", icon: "✨", island: "5. Mercan Resifi" },
  { id: "gold_crown", name: "Güneş Tacı Elması", color: "from-amber-300 to-yellow-600", icon: "👑", island: "6. Güneş Tapınağı" },
];

export const TrophyRoom: React.FC<TrophyRoomProps> = ({
  stats,
  onBackToMap,
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrintCertificate = () => {
    sounds.playClick();
    window.print();
  };

  const accuracyRate = stats.totalQuestionsAnswered > 0
    ? Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100)
    : 100;

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-b from-amber-900 via-amber-950 to-slate-950 p-4 sm:p-8 text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-amber-700 pb-5">
          <button
            onClick={() => {
              sounds.playClick();
              onBackToMap();
            }}
            className="px-4 py-2.5 rounded-2xl bg-amber-800 hover:bg-amber-700 text-amber-200 font-bold text-xs sm:text-sm border border-amber-600 flex items-center gap-2 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Haritaya Dön</span>
          </button>

          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-['Fredoka',sans-serif] flex items-center justify-center gap-2">
              <span>🏆</span>
              <span>Büyük Hazine Odası</span>
            </h1>
            <p className="text-xs sm:text-sm text-amber-400/80 mt-1">
              Toplanan mücevherler, rozetler ve 3. Sınıf Başarı Belgesi
            </p>
          </div>

          <div className="flex items-center gap-2 bg-amber-900/80 px-4 py-2 rounded-2xl border border-amber-500/50">
            <Coins className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-bounce" />
            <span className="text-base sm:text-lg font-bold text-yellow-300 font-mono">{stats.coins} Altın</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-amber-900/60 backdrop-blur p-4 rounded-3xl border-2 border-amber-600/60 text-center shadow-lg">
            <span className="text-2xl block mb-1">🏝️</span>
            <span className="text-xs text-amber-300 font-bold uppercase block">Keşfedilen Ada</span>
            <span className="text-xl sm:text-2xl font-black text-white font-mono">{stats.completedLevels.length} / 7</span>
          </div>

          <div className="bg-amber-900/60 backdrop-blur p-4 rounded-3xl border-2 border-amber-600/60 text-center shadow-lg">
            <span className="text-2xl block mb-1">📖</span>
            <span className="text-xs text-amber-300 font-bold uppercase block">Okunan Hikaye</span>
            <span className="text-xl sm:text-2xl font-black text-white font-mono">{stats.totalStoriesRead} Metin</span>
          </div>

          <div className="bg-amber-900/60 backdrop-blur p-4 rounded-3xl border-2 border-amber-600/60 text-center shadow-lg">
            <span className="text-2xl block mb-1">🎯</span>
            <span className="text-xs text-amber-300 font-bold uppercase block">Doğruluk Oranı</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">%{accuracyRate}</span>
          </div>

          <div className="bg-amber-900/60 backdrop-blur p-4 rounded-3xl border-2 border-amber-600/60 text-center shadow-lg">
            <span className="text-2xl block mb-1">🏅</span>
            <span className="text-xs text-amber-300 font-bold uppercase block">Kazanılan Rozet</span>
            <span className="text-xl sm:text-2xl font-black text-yellow-400 font-mono">{stats.earnedBadges.length} Rozet</span>
          </div>
        </div>

        {/* Gems Showcase */}
        <div className="bg-amber-950/80 border-2 border-amber-700/80 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Gem className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg sm:text-xl font-bold font-['Fredoka',sans-serif] text-amber-200">
              Sandıklardan Çıkan Gizli Mücevherler
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ALL_GEMS.map((gem, idx) => {
              const isFound = stats.unlockedGems.includes(gem.name) || stats.completedLevels.length > idx;

              return (
                <div
                  key={gem.id}
                  className={`p-3.5 rounded-2xl border-2 text-center transition-all ${
                    isFound
                      ? "bg-gradient-to-b from-amber-900/90 to-amber-950 border-amber-400 shadow-lg scale-102"
                      : "bg-slate-900/60 border-slate-700 opacity-40"
                  }`}
                >
                  <div className="text-3xl mb-1.5 filter drop-shadow-md">
                    {isFound ? gem.icon : "🔒"}
                  </div>
                  <span className="text-xs font-bold text-amber-100 block truncate">
                    {isFound ? gem.name : "Kilitli Taş"}
                  </span>
                  <span className="text-[10px] text-amber-400/70 block mt-0.5">
                    {gem.island}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Printable Certificate of Excellence */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-bold font-['Fredoka',sans-serif] text-yellow-300">
                Resmi Okuma Şampiyonu Başarı Belgesi
              </h2>
            </div>

            <button
              id="btn-print-certificate"
              onClick={handlePrintCertificate}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-amber-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg border border-yellow-200 transition-all transform hover:scale-105"
            >
              <Printer className="w-4 h-4" />
              <span>Belgeyi Yazdır / Kaydet</span>
            </button>
          </div>

          {/* Certificate Design Parchment */}
          <div
            ref={certificateRef}
            id="printable-certificate"
            className="bg-gradient-to-b from-amber-50 to-amber-100 text-slate-900 p-8 sm:p-12 rounded-3xl border-8 border-amber-800 shadow-2xl relative text-center overflow-hidden"
          >
            {/* Ornate Gold Border Inner Frame */}
            <div className="border-4 border-dashed border-amber-600 rounded-2xl p-6 sm:p-10 relative">
              {/* Corner Embellishments */}
              <div className="absolute top-2 left-2 text-2xl">⚜️</div>
              <div className="absolute top-2 right-2 text-2xl">⚜️</div>
              <div className="absolute bottom-2 left-2 text-2xl">⚜️</div>
              <div className="absolute bottom-2 right-2 text-2xl">⚜️</div>

              {/* Certificate Seal Badge */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border-4 border-yellow-200 shadow-xl flex items-center justify-center text-3xl mb-4">
                👑
              </div>

              <span className="text-xs sm:text-sm font-extrabold text-amber-800 tracking-widest uppercase font-mono block mb-1">
                T.C. MİLLİ EĞİTİM MÜFREDATINA UYGUN 3. SINIF OKUMA ETKİNLİĞİ
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-950 font-['Fredoka',sans-serif] tracking-tight mb-4">
                OKUMA DEDEKTİFİ VE HAZİNE AVCISI BAŞARI BELGESİ
              </h1>

              <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed mb-6 font-['Quicksand',sans-serif]">
                Bu belge, 3. sınıf okuma anlama adalarındaki metinleri büyük bir dikkat, sabır ve üstün başarıyla okuyarak 5N1K sorularını doğru cevaplayan;
              </p>

              {/* Student Name */}
              <div className="inline-block px-8 py-3 bg-amber-200/90 rounded-2xl border-2 border-amber-500 shadow-inner mb-6">
                <span className="text-2xl sm:text-3xl font-black text-amber-950 font-['Fredoka',sans-serif] tracking-wide">
                  {stats.playerName}
                </span>
              </div>

              <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed mb-8">
                isimli kaşif öğrencimize <strong>"3. Sınıf Baş Hazine Avcısı ve Kitap Dostu"</strong> unvanıyla takdim edilmiştir.
              </p>

              {/* Footer Signatures */}
              <div className="grid grid-cols-2 gap-8 pt-6 border-t-2 border-amber-300 max-w-md mx-auto text-xs sm:text-sm font-bold text-amber-950">
                <div>
                  <span className="block text-slate-500 font-mono text-[11px]">DÜMEN KAPTANI</span>
                  <span className="text-base font-['Fredoka',sans-serif]">Kaptan Gaga 🦜</span>
                  <span className="text-[10px] text-slate-400 block">Ada Rehberi</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-mono text-[11px]">TARİH & DERECE</span>
                  <span className="text-base font-mono">{new Date().toLocaleDateString("tr-TR")}</span>
                  <span className="text-[10px] text-emerald-700 block">Üstün Başarı Derecesi ⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
