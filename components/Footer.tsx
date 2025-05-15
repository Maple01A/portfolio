"use client"

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">ラウ デンドン</h2>
            <p className="text-gray-600 mt-2">フルスタック開発者</p>
          </div>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-8 md:mb-0">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              プロフィール
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
              スキル
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              プロジェクト
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">
              ギャラリー
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              お問い合わせ
            </Link>
          </nav>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91 .832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64 .7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359 .309.678 .92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18 .58.688 .482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://instragram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Instagram"
            >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z" />
                </svg>
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm">
          <p>© {currentYear} ラウ デンドン ポートフォリオ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer