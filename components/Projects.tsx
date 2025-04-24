"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "モダンECサイト",
    description: "Next.js、TypeScript、Tailwind CSSを使用して開発したフルスタックECサイト。ユーザー認証、商品検索、カート機能、決済処理などを実装しました。",
    image: "/projects/ecommerce.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/yourusername/ecommerce-site"
  },
  {
    title: "タスク管理アプリ",
    description: "ReactとFirebaseを使用したタスク管理アプリケーション。ドラッグ＆ドロップ機能、フィルタリング、ダークモード対応など、使いやすさを重視したUIを設計しました。",
    image: "/projects/task-app.webp",
    tech: ["React", "Firebase", "Redux", "Material UI"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/yourusername/task-manager"
  },
  {
    title: "天気予報ダッシュボード",
    description: "OpenWeather APIを使用したインタラクティブな天気予報アプリ。位置情報に基づいた天気データの表示、5日間予報、アニメーションなど、視覚的に魅力的な機能を実装。",
    image: "/projects/weather-app.webp",
    tech: ["React", "JavaScript", "Chart.js", "CSS Modules"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/yourusername/weather-dashboard"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
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
              プロジェクト
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            これまでに手がけたプロジェクトの一部をご紹介します。
            各プロジェクトでは、最新のWeb技術を活用し、ユーザー体験の向上に取り組みました。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md"
            >
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  {/* プロジェクト画像が用意できたらコメントを解除 */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                  <span className="text-gray-500">{project.title}のスクリーンショット</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-blue-100 text-blue-700 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                  >
                    サイトを見る
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full transition-colors"
                  >
                    ソースコード
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects