import React, { useState, useEffect } from 'react'
import { Globe, ExternalLink, Moon, Sun, Search } from 'lucide-react'
import { websites } from './data/websites'
import { Website } from './types/Website'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [hoveredSite, setHoveredSite] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredSites, setFilteredSites] = useState(websites)

  useEffect(() => {
    const filtered = websites.filter(site => 
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredSites(filtered)
  }, [searchTerm])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 md:mb-0">
            数字之旅
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索网站..."
                className="pl-10 pr-4 py-2 rounded-full bg-opacity-20 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-opacity-20 bg-gray-700 hover:bg-opacity-30 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {filteredSites.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">未找到网站</h2>
            <p className="text-xl">请尝试调整搜索关键词</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredSites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 bg-gradient-to-br ${site.color} ${hoveredSite === site.name ? 'ring-4 ring-white ring-opacity-60' : ''}`}
                onMouseEnter={() => setHoveredSite(site.name)}
                onMouseLeave={() => setHoveredSite(null)}
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-4 animate-bounce">{site.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{site.name}</h2>
                  <p className="text-lg opacity-75 mb-6">{site.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {site.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-black bg-opacity-20 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-semibold group-hover:underline">
                    探索 <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 text-9xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 animate-pulse">
                  <Globe />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App