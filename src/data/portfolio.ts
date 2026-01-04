import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Namit Kaushik",
    "title": "Mechanical Engineering Student",
    "email": "namitkaushik1@gmail.com",
    "phone": "9319899964",
    "linkedin": "https://www.linkedin.com/in/namit-kaushik-61569734a",
    "github": "",
    "location": "",
    "summary": "Ambitious 2nd-year Mechanical Engineering student with a strong analytical background, evidenced by high academic achievements and a solid understanding of mechanical design and programming. Skilled in CAD design, Python, mechanical simulation, and content writing, aiming to apply innovative solutions in engineering through internships."
  },
  "experience": [],
  "education": [
    {
      "degree": "Bachelor of Technology in Mechanical Engineering",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Expected Graduation: 2028",
      "gpa": "9.4043"
    },
    {
      "degree": "Class 12th",
      "institution": "Modern School, Faridabad",
      "years": "2024",
      "gpa": "96.4%"
    },
    {
      "degree": "Class 10th",
      "institution": "Sant Nirankari Public School, Faridabad",
      "years": "2022",
      "gpa": "98%"
    },
    {
      "degree": "JEE Mains 2024",
      "institution": "",
      "years": "",
      "gpa": "All India Rank 11141, 99.31 Percentile"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": []
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "split",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "minimal",
  "colorPalette": "teal"
};
