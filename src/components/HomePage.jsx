import React from 'react'
import Navbar from './Navbar'
import UploadSection from './Upload'
import TemplatesSection from './Template'

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <UploadSection />
        <div className="flex-1 overflow-y-auto min-w-0">
          <div className="min-w-[800px] p-4">
            <TemplatesSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage