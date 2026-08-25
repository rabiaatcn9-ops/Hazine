import React, { useState } from "react";
import { X, Check, User, Sparkles } from "lucide-react";
import { sounds } from "../utils/soundEffects";

interface AvatarPickerModalProps {
  currentName: string;
  currentAvatar: string;
  onSave: (name: string, avatarId: string) => void;
  onClose: () => void;
}

const AVATARS = [
  { id: "captain", name: "Kaptan Deniz", icon: "🏴‍☠️", desc: "Cesur gemi kaptanı" },
  { id: "girl", name: "Kaşif Ela", icon: "👧", desc: "Meraklı doğa araştırmacısı" },
  { id: "boy", name: "Tayfa Ali", icon: "👦", desc: "Hızlı harita okuyucusu" },
  { id: "mermaid", name: "Deniz Kızı Ada", icon: "🧜‍♀️", desc: "Okyanus sırları uzmanı" },
  { id: "parrot", name: "Kaptan Gaga", icon: "🦜", desc: "Bilge kelime papağanı" },
];

export const AvatarPickerModal: React.FC<AvatarPickerModalProps> = ({
  currentName,
  currentAvatar,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState(currentName);
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);

  const handleSave = () => {
    sounds.playCoin();
    onSave(name.trim() || "Genç Kaşif", selectedAvatar);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-amber-50 border-4 border-amber-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-left animate-in zoom-in-95 duration-200">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-950 flex items-center justify-center font-bold text-base border border-amber-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🧭</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-amber-950 font-['Fredoka',sans-serif]">
            Kaşif Profilini Düzenle
          </h2>
        </div>
        <p className="text-xs text-amber-800 mb-5">
          Hazine haritasında ve başarı belgelerinde görünecek adını ve karakterini seç!
        </p>

        {/* Name Input */}
        <div className="space-y-1.5 mb-5">
          <label className="block text-xs font-bold text-amber-950 uppercase tracking-wider">
            Kaşif Adın veya Takma Adın:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Örn: Efe, Elif, Kaptan Can..."
            maxLength={25}
            className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-amber-300 text-slate-900 placeholder-slate-400 text-base font-bold focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-300 shadow-inner font-['Fredoka',sans-serif]"
          />
        </div>

        {/* Avatar Selection */}
        <div className="space-y-2 mb-6">
          <label className="block text-xs font-bold text-amber-950 uppercase tracking-wider">
            Karakterini Seç:
          </label>
          <div className="grid grid-cols-5 gap-2">
            {AVATARS.map((av) => (
              <button
                key={av.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedAvatar(av.id);
                }}
                className={`p-2.5 rounded-2xl border-2 flex flex-col items-center justify-center text-center transition-all ${
                  selectedAvatar === av.id
                    ? "bg-amber-200 border-amber-600 ring-2 ring-amber-500 shadow-md scale-105"
                    : "bg-white border-amber-200 hover:bg-amber-100/60"
                }`}
                title={av.desc}
              >
                <span className="text-3xl mb-1">{av.icon}</span>
                <span className="text-[10px] font-bold text-amber-950 truncate w-full">
                  {av.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold text-xs sm:text-sm border border-amber-400"
          >
            İptal
          </button>
          <button
            id="btn-save-profile"
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md border border-emerald-400 flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Kaydet ve Devam Et</span>
          </button>
        </div>
      </div>
    </div>
  );
};
