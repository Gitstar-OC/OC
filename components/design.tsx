import type React from "react"
import { ActionToolbar } from "./core/action-toolbar"

interface DesignItemProps {
  title: string
  description: string
  tags: string[]
  children: React.ReactNode
}

const DesignItem: React.FC<DesignItemProps> = ({ title, description, tags, children }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-base font-light  mb-2">{description}</p>
      <div className="flex gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        {children}
      </div>
    </div>
  )
}

export const Design: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="heading" style={{ fontFamily: "var(--font-roboto-slab)" }}>
        Design
      </h2>
      <DesignItem
        title="Action Toolbar"
        description="Toolbar that changes state to notify and enable information and actions. Try clicking on the buttons to change the state of the toolbar."
        tags={["react", "tailwindcss", "framer motion"]}
      >
        <ActionToolbar />
      </DesignItem>
    </section>
  )
}

