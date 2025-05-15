"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// イラストレーションの型定義を追加
interface Illustration {
  id: number;
  title: string;
  image: string;
}

// ギャラリーのイラスト情報
const illustrations: Illustration[] = [
  {
    id: 1,
    title: "作品",
    image: "/IMG_1894.jpg",
  },
  {
    id: 2,
    title: "作品",
    image: "/IMG_7550.jpg",
  },
  {
    id: 3,
    title: "作品",
    image: "/IMG_4883.jpg",
  },
  {
    id: 4,
    title: "作品",
    image: "/IMG_3364.jpg",
  },
  {
    id: 5,
    title: "作品",
    image: "/IMG_1972.jpg",
  },
  {
    id: 6,
    title: "作品",
    image: "/IMG_0768.jpg",

  }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Illustration | null>(null)

  // すべてのイラストを表示
  const filteredIllustrations = illustrations

  // イメージモーダルを開く
  const openModal = (illustration: Illustration) => {
    setSelectedImage(illustration)
  }

  // イメージモーダルを閉じる
  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
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
              ギャラリー
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            私が制作した写真作品を展示しています。
          </p>
        </motion.div>

        {/* イラストグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIllustrations.map((illustration, index) => (
            <motion.div
              key={illustration.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(illustration)}
            >
              <div className="aspect-[4/3] relative">
                {/* 画像の表示を修正 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500">{illustration.title}</span>
                </div>
                <Image
                  src={illustration.image}
                  alt={illustration.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // エラー時に表示を切り替える
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 作品が0件の場合 */}
        {filteredIllustrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">該当する作品がありません。</p>
          </div>
        )}
      </div>

      {/* 画像モーダル */}
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
                  // エラー時に表示を切り替える
                  console.log("モーダル画像のロードに失敗");
                }}
              />
            </div>
            <div className="p-6">
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
  )
}

export default Gallery
