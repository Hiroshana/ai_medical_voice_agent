"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  // {
  //   title: "Collaborative Editing",
  //   description:
  //     "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  //   content: (
  //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
  //       Collaborative Editing
  //     </div>
  //   ),
  // },
  {
    title: "Dr. Caleb",
    sub_title: "General Physician",
    description: "Helps with everyday health concerns and common symptoms.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor1.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Lily",
    sub_title: "Pediatrician",
    description: "Expert in children's health, from babies to teens.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Morgan",
    sub_title: "Dermatologist",
    description: "Handles skin issues like rashes, acne, or infections.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Zeke",
    sub_title: "Psychologist",
    description: "Supports mental health and emotional well-being.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Reba",
    sub_title: "Nutritionist",
    description: "Provides advice on healthy eating and weight management.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Ava",
    sub_title: "Cardiologist",
    description:
      "Focuses on heart health and blood pressure issues.                        ",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor6.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Paige",
    sub_title: "ENT Specialist",
    description:
      "Handles ear, nose, and throat-related problems.                          ",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor7.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Miles",
    sub_title: "Orthopedic",
    description: "Helps with bone, joint, and muscle pain.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor8.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Marzia",
    sub_title: "Gynecologist",
    description: "Cares for women’s reproductive and hormonal health.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Terrence",
    sub_title: "Dentist",
    description: "Handles oral hygiene and dental problems.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor10.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dr. Terrence",
    sub_title: "Dentist",
    description: "Handles oral hygiene and dental problems.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/doctor10.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
