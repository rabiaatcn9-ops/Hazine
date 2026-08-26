import { GRADE2_STORIES } from "./grade2Data";
import { GRADE3_STORIES } from "./grade3Data";
import { IslandStory } from "../types";

export const ALL_STORIES: IslandStory[] = [...GRADE2_STORIES, ...GRADE3_STORIES];

export function getStoriesByGrade(grade: 2 | 3): IslandStory[] {
  return grade === 2 ? GRADE2_STORIES : GRADE3_STORIES;
}

export function getStoryById(id: string): IslandStory | undefined {
  return ALL_STORIES.find((s) => s.id === id);
}
