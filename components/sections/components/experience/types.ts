export interface ExperienceItem {
  year: string;
  company: string;
  companyLogo?: string;
  role: string[];
  roleAccentIndex: number;
  startDate: string;
  endDate: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
  imageWidth?: number;
  imageHeight?: number;
}