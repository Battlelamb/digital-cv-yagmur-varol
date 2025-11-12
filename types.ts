
export interface Contact {
  phone: string;
  email: string;
}

export interface Experience {
  company: string;
  period: string;
  title: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  period: string;
  field: string;
  score?: string;
}

export interface CvData {
  name: string;
  title: string;
  photoUrl: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  programs: string[];
  languages: string[];
  hobbies: string[];
}
