"use client"

import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "プログラミング言語",
    skills: [
      { name: "Python", level: 2 },
      { name: "JavaScript", level: 2 },
      { name: "TypeScript", level: 2 },
      { name: "Java", level: 2 },
      { name: "C", level: 1},
      { name: "C#", level: 1},
   
    ]
  },
  {
    title: "フレームワーク",
    skills: [
      { name: "Flutter", level: 2 },
      { name: "React", level: 2 },
      { name: "Next.js", level: 2 },
      { name: "Refine", level: 1 },
      { name: "Ruby on Rails", level: 1 },
    ]
},
  {
    title: "その他",
    skills: [
      { name: "Git", level: 2 },
      { name: "Docker", level: 1 },
      { name: "AWS", level: 1 },
      { name: "Maya", level: 2 },
      { name: "Unity", level: 2 },
    ]
  }
]

const Skills = () => {
  // レベル表示のためのラベル
  const levelLabels: { [key: number]: string } = {
    1: "初級",
    2: "中級",
    3: "上級"
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
              スキル
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            専門学校を卒業後、趣味での開発経験を通じて習得したスキルセットです。
            フロントエンド開発を中心に、バックエンド技術も理解しています。
            常に新しい技術を学び、スキルアップに励んでいます。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6"
            >
              <h3 className="text-xl text-gray-800 font-bold mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{levelLabels[skill.level]}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 3) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills