"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// プロジェクトの型定義を追加
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  sourceLink: string;
}

const projects = [
  {
    title: "タスク管理アプリ",
    description: "ReactとRuby on Railsを使用したタスク管理アプリケーション。",
    image: "/sample1.jpg",
    tech: ["React", "Ruby on Rails ", "Vite"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Maple01A/react_application_2024"
  },
  {
    title: "植物管理アプリ",
    description: "FlutterとFirebaseを使用した完全なモバイルアプリ。ユーザー認証、植物の登録削除、メモやイベント機能などを実装しました。",
    image: "/sample2.jpg",
    tech: ["Flutter", "Dart", "Firebase"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Maple01A/flutter_application_2024"
  },
  {
    title: "家計管理アプリ",
    description: "ReactとSupabaseを使用したフルースタックアプリケーション。全体のお金を束握して、管理しすくなるように、予想残高機能などを実装しました",
    image: "/sample3.jpg",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Sentry"],
    liveLink: "https://original.dcmtvtkah6483.amplifyapp.com",
    sourceLink: "https://github.com/Maple01A/balance_application_2025"
  },
]

const Projects = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})
  const [selectedImage, setSelectedImage] = useState<Project | null>(null)

  const openModal = (project: Project): void => {
    setSelectedImage(project);
  }
  
  const closeModal = (): void => {
    setSelectedImage(null);
  }

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
            各プロジェクトでは様々なWeb技術を活用し、学習はもちろん、ユーザー体験の向上にも取り組みました。
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
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md flex flex-col h-full"
            >
              <div 
                className="aspect-video relative cursor-pointer" 
                onClick={() => openModal(project)}
              >
                {!imageErrors[index] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0"
                    onLoad={() => console.log(`画像読み込み成功: ${project.image}`)}
                    onError={(e) => {
                      console.error(`画像読み込みエラー: ${project.image}`, e);
                      setImageErrors(prev => ({...prev, [index]: true}))
                    }}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-blue-100`}>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
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
                </div>
                
                <div className="flex space-x-3 mt-4">
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
      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative pt-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                onError={() => {
                  console.log("モーダル画像のロードに失敗");
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects
