import React from "react";
import { Sparkles, Heart, GraduationCap, Award, BookOpen } from "lucide-react";

interface FooterProps {
  onOpenTeacherBoard?: () => void;
  onSelectGrade?: (grade: 1 | 2 | 3) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTeacherBoard, onSelectGrade }) => {
  return (
    <footer id="app-footer" className="mt-16 bg-slate-900 text-slate-300 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Main Teacher Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xl font-black text-amber-400 tracking-wide font-mono">
                  rabiaöğretmen
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  <GraduationCap className="w-3.5 h-3.5 mr-1" />
                  İlkokul Türkçe Portalı
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                1., 2. ve 3. Sınıflar İçin Okuma Anlama, Hece, Kelime, Cümle ve Kelime Oyunları
              </p>
            </div>
          </div>

          {/* Quick grade links */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            <button
              onClick={() => onSelectGrade?.(1)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-xs font-bold text-slate-300 transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              🎒 1. Sınıf Dünyası
            </button>
            <button
              onClick={() => onSelectGrade?.(2)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold text-slate-300 transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              ⛵ 2. Sınıf (150 Metin + Kelimeler)
            </button>
            <button
              onClick={() => onSelectGrade?.(3)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white text-xs font-bold text-slate-300 transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              🏆 3. Sınıf (150 Metin + Kelimeler)
            </button>
            <button
              onClick={onOpenTeacherBoard}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-transform active:scale-95 flex items-center gap-1.5 shadow"
            >
              <Award className="w-3.5 h-3.5" />
              Altın Skor Tablosu
            </button>
          </div>
        </div>

        {/* Bottom copyright & teacher love */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center">
          <p>© {new Date().getFullYear()} rabiaogretmen • Sevgi ve Bilgiyle Hazırlanmıştır.</p>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Öğrencilerimiz için</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span className="font-bold text-amber-300">rabiaogretmen</span>
            <span>tarafından tasarlandı</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
