import React from "react";

const Employees = [
  {
    id: 1,
    email: "simran@gmail.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Prepare Presentation",
        description: "Create slides for the upcoming client meeting.",
        date: "2025-08-17",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Team Meeting",
        description: "Weekly sync with the team about project updates.",
        date: "2025-08-18",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 3,
        title: "Submit Report",
        description: "Monthly financial report submission.",
        date: "2025-08-20",
        category: "Report",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "rahul@gmail.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Fix Bugs",
        description: "Resolve issues reported by QA in sprint 5.",
        date: "2025-08-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Update Documentation",
        description: "Add new API endpoints to the project documentation.",
        date: "2025-08-22",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "sim@gmail.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Research Competitors",
        description: "Analyze features of competitor apps.",
        date: "2025-08-21",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Create Wireframes",
        description: "Design wireframes for new dashboard UI.",
        date: "2025-08-23",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 3,
        title: "Submit Survey",
        description: "Fill out employee satisfaction survey.",
        date: "2025-08-25",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "simranjit@gmail.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Database Backup",
        description: "Perform weekly backup of company database.",
        date: "2025-08-17",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Security Audit",
        description: "Run vulnerability scans on internal systems.",
        date: "2025-08-20",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        id: 3,
        title: "Training Session",
        description: "Conduct a session on cloud infrastructure.",
        date: "2025-08-24",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const Admins = [
  {
    id: 1,
    email: "rahulheer344@gmail.com",
    password: "123456789",
  }
];
export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(Employees))

}

export const getLocalStorage = () => {

}

export { Employees, Admins };
