export default function Contact() {
    return (
      <section className="bg-[#262A2C] min-h-screen text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading & Subheading */}
          <h1 className="text-5xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-400 mb-6">For Any Project Knock Us</p>
          <hr className="border-gray-600 mb-12" />
  
          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-[40%_60%] gap-8 mb-12">
            {/* Left: Big text */}
            <div className="flex items-start">
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Get in<br />
                Touch With<br />
                Us
              </h2>
            </div>
  
            {/* Right: Contact Form */}
            <div>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-[#1F2123] text-white border border-gray-600 
                               rounded-md px-4 py-2 focus:outline-none 
                               focus:border-orange-500 placeholder-gray-500"
                  />
                </div>
  
                {/* Subject */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full bg-[#1F2123] text-white border border-gray-600 
                               rounded-md px-4 py-2 focus:outline-none 
                               focus:border-orange-500 placeholder-gray-500"
                  />
                </div>
  
                {/* Message */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Type your message..."
                    className="w-full bg-[#1F2123] text-white border border-gray-600 
                               rounded-md px-4 py-2 focus:outline-none 
                               focus:border-orange-500 placeholder-gray-500"
                  />
                </div>
  
                {/* Send Button */}
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-bold py-2 px-6 
                             rounded-full hover:bg-orange-600 transition-colors"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
  
          {/* Laptop Image */}
          <div className="mb-12">
            <img
              src="/images/laptop.png"
              alt="Laptop"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
  
          {/* Contact Info at Bottom */}
          <div className="flex-4 text-center">
            <p>Street Avenue 21, CA</p>
            <p>+1 (234) 567-8900</p>
            <p>hello@aaronn.com</p>
          </div>
        </div>
      </section>
    );
  }
  