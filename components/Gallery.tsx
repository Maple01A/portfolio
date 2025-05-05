"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

// イラストレーションの型定義を追加
interface Illustration {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

// ギャラリーのイラスト情報
const illustrations: Illustration[] = [
  {
    id: 1,
    title: "デジタルアート作品1",
    description: "Procreateで描いたデジタルイラスト。抽象的なデザイン要素を取り入れています。",
    image: "/illustrations/artwork1.jpg",
    category: "デジタルアート"
  },
  {
    id: 2,
    title: "キャラクターデザイン",
    description: "オリジナルキャラクターのコンセプトアート。ゲームプロジェクト用に作成しました。",
    image: "/illustrations/character1.jpg",
    category: "キャラクターデザイン"
  },
  {
    id: 3,
    title: "風景イラスト",
    description: "架空の風景を描いたファンタジーアート。光の表現にこだわりました。",
    image: "/illustrations/landscape1.jpg",
    category: "ファンタジーアート"
  },
  {
    id: 4,
    title: "UI要素デザイン",
    description: "Webアプリケーション用に作成したUIアイコンとイラスト素材。",
    image: "/illustrations/ui_elements.jpg",
    category: "UIデザイン"
  },
  {
    id: 5,
    title: "コンセプトアート",
    description: "SFコンセプトの背景イラスト。未来都市をイメージして制作しました。",
    image: "/illustrations/concept1.jpg",
    category: "コンセプトアート"
  },
  {
    id: 6,
    title: "手描きスケッチ",
    description: "伝統的な手法で描いたスケッチをスキャンしたもの。アナログの温かみを大切にしています。",
    image: "/illustrations/sketch1.jpg",
    category: "スケッチ"
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
            私が制作したイラスト作品を展示しています。
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
                {/* 実際の画像が用意できたらコメントを解除 */}
                {/* <Image
                  src={illustration.image}
                  alt={illustration.title}
                  fill
                  className="object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500">{illustration.title}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{illustration.title}</h3>
                <p className="text-xs text-blue-600 mt-1">{illustration.category}</p>
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
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-gray-100">
              {/* <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">{selectedImage.title}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-blue-600 mb-4">{selectedImage.category}</p>
              <p className="text-gray-600">{selectedImage.description}</p>
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