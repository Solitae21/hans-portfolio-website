// ─── Skill Domain ──────────────────────────────────────────────────────────
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategoryId = 'frontend' | 'backend' | 'tools';

export interface Skill {
  readonly name: string;
  readonly level: SkillLevel;
}

export interface SkillGroup {
  readonly id: SkillCategoryId;
  readonly label: string;
  readonly description: string;
  readonly skills: readonly Skill[];
}

// ─── Project Domain ──────────────────────────────────────────────────────────
export type ProjectCategory = 'frontend' | 'fullstack' | 'backend';
export type ProjectFilter = 'all' | ProjectCategory;

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly imageUrl?: string;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly featured: boolean;
  readonly category: ProjectCategory;
}

// ─── Experience Domain ─────────────────────────────────────────────────────
export type ExperienceType = 'work' | 'education' | 'freelance';

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly description: string;
  readonly achievements: readonly string[];
  readonly technologies: readonly string[];
  readonly type: ExperienceType;
  readonly current?: boolean;
}

// ─── Personal / About Domain ─────────────────────────────────────────────
export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly url: string;
  readonly label: string;
}

export interface Stat {
  readonly label: string;
  readonly value: string;
  readonly suffix?: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly firstName: string;
  readonly title: string;
  readonly taglines: readonly string[];
  readonly bio: string;
  readonly location: string;
  readonly email: string;
  readonly availableForWork: boolean;
  readonly stats: readonly Stat[];
  readonly social: readonly SocialLink[];
  readonly resumeUrl: string;
}

// ─── Contact Form ─────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface ContactFormState {
  data: ContactFormData;
  status: FormStatus;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

// ─── UI Component Types ───────────────────────────────────────────────────
export type GlowColor = 'indigo' | 'purple' | 'cyan' | 'none';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly sectionId: string;
}
