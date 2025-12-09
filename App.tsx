/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/QuantumScene';
import { ArrowDown, Menu, X, BookOpen } from 'lucide-react';

const FeatureCard = ({ title, content, delay }: { title: string, content: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-amber-900 text-center mb-4">{title}</h3>
      <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
      <p className="text-sm text-gray-700 text-center leading-relaxed">
        {content}
      </p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* 導航列 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-2xl font-bold text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
          >
            幼兒快閃時裝秀 ✨
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="text-amber-900" /> : <Menu className="text-amber-900" />}
          </button>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-amber-900 hover:text-amber-600 transition-colors">專案理念</button>
            <button onClick={() => scrollToSection('background')} className="text-amber-900 hover:text-amber-600 transition-colors">專案背景</button>
            <button onClick={() => scrollToSection('vision')} className="text-amber-900 hover:text-amber-600 transition-colors">專案願景</button>
            <button onClick={() => scrollToSection('info')} className="text-amber-900 hover:text-amber-600 transition-colors">活動資訊</button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-amber-200">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-6 py-3 text-amber-900 hover:bg-amber-50">專案理念</button>
            <button onClick={() => scrollToSection('background')} className="block w-full text-left px-6 py-3 text-amber-900 hover:bg-amber-50">專案背景</button>
            <button onClick={() => scrollToSection('vision')} className="block w-full text-left px-6 py-3 text-amber-900 hover:bg-amber-50">專案願景</button>
            <button onClick={() => scrollToSection('info')} className="block w-full text-left px-6 py-3 text-amber-900 hover:bg-amber-50">活動資訊</button>
          </div>
        )}
      </nav>

      {/* 主視覺區 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* 背景圖片 */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1600&q=80)',
            opacity: 0.8
          }}
        />
        {/* 漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 via-orange-50/85 to-yellow-50/90" />
        
        {/* 內容 */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-amber-900 mb-6 animate-fade-in-up drop-shadow-lg">
            幼兒快閃時裝秀
          </h2>
          <p className="text-xl md:text-2xl text-amber-900 mb-8 animate-fade-in-up font-semibold drop-shadow" style={{ animationDelay: '0.2s' }}>
            讓每個孩子都是伸展台上的小明星 ⭐
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={() => scrollToSection('info')} className="px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl">
              立即報名
            </button>
            <button onClick={() => scrollToSection('about')} className="px-8 py-3 bg-white text-amber-900 rounded-full hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl border border-amber-200">
              了解更多
            </button>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-amber-600" size={32} />
          </div>
        </div>
      </section>

      {/* 專案理念 */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-amber-900 mb-4">專案理念</h3>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-12"></div>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 text-center">
            <p className="text-xl leading-relaxed mb-6">
              我們相信每個孩子都擁有獨特的美感與創造力。幼兒快閃時裝秀不僅是一場展示，更是一個讓孩子們自信表達、勇敢展現自我的舞台。
            </p>
            <p className="text-lg leading-relaxed">
              透過時尚與藝術的結合，我們希望培養孩子的美學素養、自信心與表達能力，讓他們在快樂中成長，在展示中學習。
            </p>
          </div>
        </div>
      </section>

      {/* 專案背景 */}
      <section id="background" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-amber-900 mb-4">專案背景</h3>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="美感教育" 
              content="在快速變化的時代，美感教育成為幼兒全人發展的重要一環。我們透過時裝展示，讓孩子從小接觸藝術與美學。"
              delay="0s"
            />
            <FeatureCard 
              title="自信培養" 
              content="許多孩子在成長過程中缺乏展示自我的機會。我們提供一個安全、溫馨的舞台，讓每個孩子都能勇敢表現。"
              delay="0.1s"
            />
            <FeatureCard 
              title="親子共創" 
              content="時裝秀不只是孩子的舞台，更是親子共同參與、創造美好回憶的機會，增進家庭情感連結。"
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* 專案願景 */}
      <section id="vision" className="py-20 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-amber-900 mb-4">專案願景</h3>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">建立自信平台</h4>
                    <p>打造一個讓每個孩子都能自信展現的舞台，不論性格內向或外向，都能找到屬於自己的閃耀方式。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">推廣美感教育</h4>
                    <p>將時尚與藝術融入幼兒教育，培養孩子的審美能力、創造力與表達力，為未來奠定基礎。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">創造美好回憶</h4>
                    <p>為家庭創造珍貴的共同回憶，讓這場時裝秀成為孩子成長歷程中難忘的里程碑。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 活動簡介 */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-amber-900 mb-4">活動簡介</h3>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-amber-200">
              <h4 className="text-2xl font-bold text-amber-900 mb-4">🎭 活動內容</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>專業攝影記錄每個精彩瞬間</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>溫馨舞台讓孩子自信走秀</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>親子互動遊戲與體驗活動</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>專業造型師提供造型建議</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-amber-200">
              <h4 className="text-2xl font-bold text-amber-900 mb-4">👶 參加對象</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>2-6歲幼兒及其家長</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>歡迎所有喜愛時尚的小朋友</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>無需任何經驗，只需要一顆勇敢的心</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>家長全程陪同參與</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 活動資訊 */}
      <section id="info" className="py-20 px-6 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">活動資訊</h3>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-xl font-bold mb-3">活動時間</h4>
              <p className="text-amber-100">2025年1月15日</p>
              <p className="text-amber-100">週六下午 14:00-17:00</p>
              <p className="text-sm text-amber-200 mt-2">（請提前15分鐘報到）</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-xl font-bold mb-3">活動地點</h4>
              <p className="text-amber-100">台北市信義區</p>
              <p className="text-amber-100">親子創意空間</p>
              <p className="text-sm text-amber-200 mt-2">（捷運市政府站步行5分鐘）</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✍️</div>
              <h4 className="text-xl font-bold mb-3">報名方式</h4>
              <p className="text-amber-100 mb-3">線上報名表單</p>
              <button className="px-6 py-2 bg-amber-400 text-amber-900 rounded-full hover:bg-amber-300 transition-all font-bold">
                立即報名
              </button>
              <p className="text-sm text-amber-200 mt-3">名額有限，額滿為止</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl mb-4">聯絡我們</p>
            <p className="text-amber-200">📧 Email: kidsfashion@example.com</p>
            <p className="text-amber-200">📱 電話: 02-1234-5678</p>
            <p className="text-amber-200">📷 Instagram: @kidsfashionshow</p>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-amber-950 text-amber-200 py-8 px-6 text-center">
        <p>© 2025 幼兒快閃時裝秀 | 讓每個孩子都閃閃發光 ✨</p>
      </footer>
    </div>
  );
};

export default App;