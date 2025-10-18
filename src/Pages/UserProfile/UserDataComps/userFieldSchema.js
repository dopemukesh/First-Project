export const studentFields = [
  { name: "name", label: "Name", type: "text", required: true },
  {
    name: "username",
    label: "Username",
    type: "text",
    required: true,
    readOnly: true,
  },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
  { name: "phoneNumber", label: "Phone Number", type: "text", required: false },
  {
    name: "profilePicture",
    label: "Profile Picture URL",
    type: "text",
    required: false,
  },
  { name: "imageUrl", label: "Image URL", type: "text", required: false },
  { name: "age", label: "Age", type: "number", required: false },
  { name: "degree", label: "Degree", type: "text", required: false },
  { name: "collegeName", label: "College Name", type: "text", required: false },
  {
    name: "currentCGPA",
    label: "Current CGPA",
    type: "number",
    required: false,
  },
  {
    name: "passoutYear",
    label: "Passout Year",
    type: "number",
    required: false,
  },
  { name: "skills", label: "Skills", type: "array", placeholder: "Enter comma seperated value...", required: false },
  {
    name: "currentBacklogs",
    label: "Current Backlogs",
    type: "number",
    required: false,
  },
  {
    name: "linkedIn",
    label: "LinkedIn Profile",
    type: "text",
    required: false,
  },
  { name: "bio", label: "Bio", type: "textarea", required: false },
  { name: "education", label: "Education", type: "array", required: false },
  { name: "projects", label: "Projects", type: "array", required: false },
  {
    name: "certifications",
    label: "Certifications",
    type: "array",
    required: false,
  },
];

export const recruiterFields = [
  { name: "name", label: "Name", required: true, type: "text" },
  { name: "email", label: "Email", required: true, type: "email" },
  {
    name: "username",
    label: "Username",
    required: true,
    type: "text",
    readOnly: true,
  },
  { name: "companyName", label: "Company Name", required: false, type: "text" },
  {
    name: "companyDescription",
    label: "Company Description",
    required: false,
    type: "textarea",
  },
  { name: "companyType", label: "Company Type", required: false, type: "text" },
  {
    name: "companyWebsite",
    label: "Company Website",
    required: false,
    type: "url",
  },
  { name: "linkedin", label: "LinkedIn", required: false, type: "text" },
  { name: "position", label: "Position", required: false, type: "text" },
  { name: "phoneNumber", label: "Phone Number", required: false, type: "text" },
  {
    name: "profilePicture",
    label: "Profile Picture URL",
    required: false,
    type: "text",
  },
];

export const developerFields = [
  { name: "name", label: "Name", type: "text", required: true },
  {
    name: "username",
    label: "Username",
    type: "text",
    required: true,
    readOnly: true,
  },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
  { name: "phoneNumber", label: "Phone Number", type: "text", required: false },
  {
    name: "fieldOfInterest",
    label: "Field of Interest",
    type: "text",
    required: false,
  },
  { name: "skills", label: "Skills", type: "array", required: false },
  {
    name: "linkedin",
    label: "LinkedIn Profile",
    type: "text",
    required: false,
  },
  { name: "github", label: "GitHub Profile", type: "text", required: false },
  {
    name: "portfolioWebsite",
    label: "Portfolio Website",
    type: "text",
    required: false,
  },
  { name: "bio", label: "Bio", type: "textarea", required: false },
  {
    name: "profilePicture",
    label: "Profile Picture URL",
    type: "text",
    required: false,
  },
  { name: "imageUrl", label: "Image URL", type: "text", required: false },

  // Arrays and complex objects
  { name: "experience", label: "Experience", type: "array", required: false },
  { name: "projects", label: "Projects", type: "array", required: false },

  // Backend-maintained timestamps (read-only fields)
  { name: "createdAt", label: "Created At", type: "datetime", readOnly: true },
  { name: "updatedAt", label: "Updated At", type: "datetime", readOnly: true },
];
