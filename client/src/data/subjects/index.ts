import { artSubject } from "./art";
import { characterSubject } from "./character";
import { englishSubject } from "./english";
import { koreanSubject } from "./korean";
import { mathSubject } from "./math";
import { musicSubject } from "./music";
import { physicalSubject } from "./physical";
import { scienceSubject } from "./science";
import { socialSubject } from "./social";

export const elementarySubjects = {
  korean: koreanSubject,
  english: englishSubject,
  math: mathSubject,
  social: socialSubject,
  science: scienceSubject,
  music: musicSubject,
  art: artSubject,
  "physical-education": physicalSubject,
  "liberal-it": characterSubject,
};

export type ElementarySubjectId = keyof typeof elementarySubjects;