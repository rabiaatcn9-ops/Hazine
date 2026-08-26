import React, { useState, useEffect } from "react";
import { StudentLeaderboardEntry, GradeLevel } from "../types";
import {
  Trophy,
  Coins,
  Medal,
  Award,
  Users,
  Search,
  Filter,
  RefreshCw,
  Sparkles,
  GraduationCap,
  Calendar,
  CheckCircle2,
  BookOpen,
  Gamepad2,
  Printer,
} from "lucide-react";

interface TeacherDashboardProps {
  onClose: () => void;
  currentStudentId?: string;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  onClose,
  currentStudentId,
}) => {
  const [students, setStudents] = useState<StudentLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterGrade, setFilterGrade] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/teacher/students");
      if (!res.ok) throw new Error("Sunucudan öğrenci verileri alınamadı.");
      const data = await res.json();
      setStudents(data.students || []);
    } catch (err: any) {
      console.error(err);
      setError("Öğrenci puanları yüklenirken bir sorun oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = students
    .filter((s) => {
      const matchesGrade = filterGrade === "all" || s.gradeLevel === filterGrade;
      const matchesSearch = s.playerName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGrade && matchesSearch;
    })
    .sort((a, b) => b.coins - a.coins);

  const totalClassCoins = students.reduce((acc, curr) => acc + curr.coins, 0);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Teacher Ribbon Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-3xl p-6 sm:p-8 text-slate-950 shadow-xl border-4 border-amber-300 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/10 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-slate-900" />
              rabiaöğretmen Yönetim Paneli
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              👑 Sınıf Altın ve Başarı Skor Tablosu
            </h1>
            <p className="text-slate-900/90 text-sm sm:text-base font-semibold mt-1 max-w-2xl">
              Öğrencilerinin okuma anlama metinlerinden ve kelime oyunlarından kazandıkları
              altınları, tamamladıkları etkinlikleri buradan canlı olarak takip edebilirsin.
            </p>
          </div>

          <div className="bg-slate-950 text-white rounded-2xl p-5 shadow-lg flex items-center gap-6 text-center border-2 border-amber-300">
            <div>
              <div className="text-xs font-bold text-slate-400">Kayıtlı Öğrenci</div>
              <div className="text-2xl font-black text-amber-400 flex items-center justify-center gap-1">
                <Users className="w-5 h-5" />
                {students.length}
              </div>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <div className="text-xs font-bold text-slate-400">Toplam Kazanılan Altın</div>
              <div className="text-2xl font-black text-amber-400 flex items-center justify-center gap-1">
                <Coins className="w-5 h-5 fill-amber-400 text-amber-400" />
                {totalClassCoins}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border-2 border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Grade tabs */}
        <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
          {[
            { id: "all", label: "Tüm Sınıflar" },
            { id: 1, label: "🎒 1. Sınıflar" },
            { id: 2, label: "⛵ 2. Sınıflar" },
            { id: 3, label: "🏆 3. Sınıflar" },
            { id: 4, label: "⚡ 4. Sınıflar" },
          ].map((tab) => (
            <button
              key={String(tab.id)}
              onClick={() => setFilterGrade(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                filterGrade === tab.id
                  ? "bg-slate-900 text-amber-400 shadow-md scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & Refresh */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Öğrenci adı ara..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-slate-200 focus:border-amber-500 outline-none text-xs font-bold text-slate-800"
            />
          </div>

          <button
            onClick={fetchStudents}
            disabled={loading}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Listeyi Yenile"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow"
            title="Listeyi Yazdır / PDF Al"
          >
            <Printer className="w-3.5 h-3.5" />
            Yazdır
          </button>
        </div>
      </div>

      {/* Leaderboard Table / Cards */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-slate-100 space-y-4">
        {loading ? (
          <div className="py-12 text-center text-slate-400 font-bold">
            Öğrenci altın skorları yükleniyor...
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="py-12 text-center text-slate-400 font-bold">
            Bu sınıfta henüz kayıtlı öğrenci bulunmuyor.
          </div>
        ) : (
          <div className="space-y-3">
            {filteredStudents.map((student, idx) => {
              const isTop1 = idx === 0;
              const isTop2 = idx === 1;
              const isTop3 = idx === 2;
              const isMe = student.studentId === currentStudentId;

              return (
                <div
                  key={student.studentId}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${
                    isMe
                      ? "bg-amber-50/80 border-amber-400 ring-2 ring-amber-300"
                      : isTop1
                      ? "bg-amber-50/50 border-amber-300 shadow-md"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Rank & Student Info */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg">
                      {isTop1 ? "🥇" : isTop2 ? "🥈" : isTop3 ? "🥉" : `#${idx + 1}`}
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-slate-200 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-inner">
                      {student.avatarId === "captain"
                        ? "🏴‍☠️"
                        : student.avatarId === "girl_explorer"
                        ? "👧"
                        : student.avatarId === "boy_explorer"
                        ? "👦"
                        : student.avatarId === "owl"
                        ? "🦉"
                        : student.avatarId === "mermaid"
                        ? "🧜‍♀️"
                        : "⭐"}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 text-base sm:text-lg">
                          {student.playerName}
                        </span>
                        {isMe && (
                          <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                            Sen
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-bold">
                          {student.gradeLevel}. Sınıf
                        </span>
                        <span>
                          Son Aktivite: {new Date(student.lastActive).toLocaleDateString("tr-TR")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Badges & Stats */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                    <div className="text-center sm:text-right">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                        Metinler / Oyunlar
                      </div>
                      <div className="text-xs font-black text-slate-700 mt-0.5">
                        {student.completedStoriesCount} Metin • {student.completedActivitiesCount} Oyun
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-4 py-2 rounded-2xl">
                      <Coins className="w-5 h-5 fill-amber-500 text-amber-600" />
                      <span className="text-xl font-black text-slate-950">{student.coins}</span>
                      <span className="text-xs font-bold text-amber-800 ml-0.5">Altın</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
