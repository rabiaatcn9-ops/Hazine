import React, { useState } from "react";
import { UserStats, GradeLevel } from "../types";
import { Sparkles, User, GraduationCap, CheckCircle2, ArrowRight, Shield } from "lucide-react";

interface WelcomeOnboardingModalProps {
  isOpen: boolean;
  onComplete: (name: string, grade: GradeLevel, avatarId: string) => void;
  initialStats?: UserStats;
}

const AVATARS = [
  { id: "captain", emoji: "🏴‍☠️", label: "Cesur Kaptan", bg: "bg-amber-100 border-amber-300" },
  { id: "girl_explorer", emoji: "👧", label: "Kaşif Ela", bg: "bg-pink-100 border-pink-300" },
  { id: "boy_explorer", emoji: "👦", label: "Kaşif Ali", bg: "bg-blue-100 border-blue-300" },
  { id: "owl", emoji: "🦉", label: "Bilge Baykuş", bg: "bg-purple-100 border-purple-300" },
  { id: "parrot", emoji: "🦜", label: "Kaptan Gaga", bg: "bg-emerald-100 border-emerald-300" },
  { id: "fox", emoji: "🦊", label: "Kurnaz Tilki", bg: "bg-orange-100 border-orange-300" },
  { id: "mermaid", emoji: "🧜‍♀️", label: "Deniz Kızı", bg: "bg-cyan-100 border-cyan-300" },
  { id: "wizard", emoji: "🧙‍♂️", label: "Bilgi Büyücüsü", bg: "bg-indigo-100 border-indigo-300" },
];

export const WelcomeOnboardingModal: React.FC<WelcomeOnboardingModalProps> = ({
  isOpen,
  onComplete,
  initialStats,
}) => {
  const [name, setName] = useState(initialStats?.playerName || "");
  const [grade, setGrade] = useState<GradeLevel>(initialStats?.gradeLevel || 2);
  const [selectedAvatar, setSelectedAvatar] = useState(initialStats?.avatarId || "captain");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || trimmed.length < 2) {
      setError("Lütfen geçerli bir isim veya takma ad girin (en az 2 harf).");
      return;
    }
    setError("");
    onComplete(trimmed, grade, selectedAvatar);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full border-4 border-amber-400 overflow-hidden relative">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-6 text-slate-900 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/30 rounded-full text-xs font-black text-slate-950 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            rabiaöğretmen Türkçe Portalı
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            🎉 Hoş Geldin Genç Kaşif!
          </h2>
          <p className="text-slate-800 text-sm font-medium mt-1">
            Okuma anlama, hece, kelime, cümle ve masal hazinelerini keşfetmeye hazır mısın? Profilini oluştur ve maceraya başla!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Name input */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-amber-600" />
              Adın veya Takma Adın:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              placeholder="Örn: Ahmet, Zeynep Ela, Kaptan Ali"
              maxLength={25}
              autoFocus
              className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none text-base font-bold text-slate-800 transition-all shadow-inner"
            />
            {error && <p className="text-rose-600 text-xs font-bold mt-1.5">{error}</p>}
          </div>

          {/* Grade selection */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              Sınıf Seviyeni Seç:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                { level: 1 as GradeLevel, title: "1. Sınıf", desc: "Hece, Kelime & Metinler", color: "border-emerald-500 bg-emerald-50 text-emerald-900", icon: "🎒" },
                { level: 2 as GradeLevel, title: "2. Sınıf", desc: "150 Metin + Kelime", color: "border-blue-500 bg-blue-50 text-blue-900", icon: "⛵" },
                { level: 3 as GradeLevel, title: "3. Sınıf", desc: "150 Metin + Kelime", color: "border-indigo-500 bg-indigo-50 text-indigo-900", icon: "🏆" },
                { level: 4 as GradeLevel, title: "4. Sınıf", desc: "Hızlı Okuma & Anlama", color: "border-purple-500 bg-purple-50 text-purple-900", icon: "⚡" },
              ].map((g) => (
                <button
                  key={g.level}
                  type="button"
                  onClick={() => setGrade(g.level)}
                  className={`p-3 rounded-2xl border-2 text-left transition-all relative ${
                    grade === g.level
                      ? `${g.color} ring-4 ring-amber-300 shadow-md scale-105`
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <div className="text-2xl mb-1">{g.icon}</div>
                  <div className="font-black text-sm">{g.title}</div>
                  <div className="text-[10px] font-semibold opacity-80 leading-tight">{g.desc}</div>
                  {grade === g.level && (
                    <CheckCircle2 className="w-4 h-4 text-amber-600 absolute top-2 right-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Avatar selection */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Avatarını Seç:
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {AVATARS.map((av) => (
                <button
                  key={av.id}
                  type="button"
                  onClick={() => setSelectedAvatar(av.id)}
                  title={av.label}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-2xl transition-all border-2 ${
                    selectedAvatar === av.id
                      ? "border-amber-500 bg-amber-100 ring-2 ring-amber-400 scale-110 shadow"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <span>{av.emoji}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <span>Maceraya Başla!</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
