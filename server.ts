import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory student records store (persists while server is running)
interface StudentData {
  studentId: string;
  playerName: string;
  gradeLevel: number;
  avatarId: string;
  coins: number;
  completedStoriesCount: number;
  completedActivitiesCount: number;
  lastActive: string;
}

const studentStore: Map<string, StudentData> = new Map();

// Seed with friendly initial class members for demonstration so Rabia Öğretmen has a lively dashboard
const initialClassRoster: StudentData[] = [
  { studentId: "demo-1", playerName: "Ahmet Kağan", gradeLevel: 3, avatarId: "captain", coins: 840, completedStoriesCount: 6, completedActivitiesCount: 12, lastActive: new Date(Date.now() - 1000 * 60 * 15).toISOString() },
  { studentId: "demo-2", playerName: "Zeynep Ela", gradeLevel: 2, avatarId: "girl_explorer", coins: 720, completedStoriesCount: 5, completedActivitiesCount: 10, lastActive: new Date(Date.now() - 1000 * 60 * 45).toISOString() },
  { studentId: "demo-3", playerName: "Emir Ali", gradeLevel: 1, avatarId: "boy_explorer", coins: 650, completedStoriesCount: 0, completedActivitiesCount: 18, lastActive: new Date(Date.now() - 1000 * 60 * 90).toISOString() },
  { studentId: "demo-4", playerName: "Defne Duru", gradeLevel: 3, avatarId: "mermaid", coins: 980, completedStoriesCount: 8, completedActivitiesCount: 15, lastActive: new Date(Date.now() - 1000 * 60 * 5).toISOString() },
  { studentId: "demo-5", playerName: "Kerem", gradeLevel: 1, avatarId: "owl", coins: 510, completedStoriesCount: 0, completedActivitiesCount: 14, lastActive: new Date(Date.now() - 1000 * 60 * 120).toISOString() }
];

initialClassRoster.forEach((student) => studentStore.set(student.studentId, student));

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Student sync endpoint (called whenever a student earns coins or completes levels)
app.post("/api/student/sync", (req, res) => {
  try {
    const { studentId, playerName, gradeLevel, avatarId, coins, completedStoriesCount, completedActivitiesCount } = req.body;
    if (!studentId || !playerName) {
      return res.status(400).json({ error: "Öğrenci kimliği veya adı eksik." });
    }

    const studentRecord: StudentData = {
      studentId: String(studentId),
      playerName: String(playerName),
      gradeLevel: Number(gradeLevel) || 1,
      avatarId: String(avatarId || "captain"),
      coins: Number(coins) || 0,
      completedStoriesCount: Number(completedStoriesCount) || 0,
      completedActivitiesCount: Number(completedActivitiesCount) || 0,
      lastActive: new Date().toISOString()
    };

    studentStore.set(studentRecord.studentId, studentRecord);
    res.json({ success: true, saved: studentRecord });
  } catch (err: any) {
    console.error("Student sync error:", err);
    res.status(500).json({ error: "Öğrenci puanı kaydedilemedi." });
  }
});

// Teacher endpoint to get all students and their earned coins
app.get("/api/teacher/students", (_req, res) => {
  try {
    const list = Array.from(studentStore.values()).sort((a, b) => b.coins - a.coins);
    res.json({
      teacher: "rabiaogretmen",
      totalStudents: list.length,
      students: list
    });
  } catch (err: any) {
    console.error("Teacher dashboard error:", err);
    res.status(500).json({ error: "Öğrenci listesi alınamadı." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Rabia Öğretmen Okuma ve Oyun Platformu çalışıyor: http://localhost:${PORT}`);
  });
}

startServer();
