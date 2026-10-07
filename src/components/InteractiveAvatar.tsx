import { useState, useRef, useEffect } from "react";
import { MicOff, Volume2, X, ArrowUp, MessageSquare, Video } from "lucide-react";

const InteractiveAvatar = () => {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      // Focus after opening animation
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 w-16 h-16 bg-[#ff5a1f] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center text-white"
        aria-label="Open Interactive Avatar"
      >
        <Video size={28} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 w-[380px] max-w-[calc(100vw-32px)] bg-[#0a0a0a] rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-800 font-sans">
      {/* Header / Video Area */}
      <div className="relative w-full h-[280px] bg-black">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white z-20 bg-black/40 p-1.5 rounded-full backdrop-blur-sm"
        >
          <X size={20} />
        </button>
        
        {/* Placeholder for Video Avatar */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black overflow-hidden">
           <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="AI Agent" className="w-full h-full object-cover opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Click to unmute overlay */}
        {isMuted && (
          <button 
            onClick={() => setIsMuted(false)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/90 hover:text-white bg-black/60 px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium transition-colors"
          >
            <MicOff size={16} />
            Click to unmute mic
          </button>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4">
        <button className="w-full bg-[#0070f3] hover:bg-[#0051b3] text-white py-3 rounded-full font-medium text-[15px] transition-colors shadow-lg shadow-blue-500/20">
          Book A Meeting
        </button>

        <div className="flex justify-center gap-12 py-2">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMuted ? <MicOff size={24} className="text-red-500" /> : <MicOff size={24} />}
            <span className="text-xs font-medium">Mic</span>
          </button>
          <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Volume2 size={24} />
            <span className="text-xs font-medium">Speaker</span>
          </button>
        </div>

        <div className="flex w-full divide-x divide-gray-800 border-b border-gray-800 pb-4">
          <button className="flex-1 text-center text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors">
            Speak to Sales
          </button>
          <button className="flex-1 text-center text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors">
            Learn About Services
          </button>
        </div>

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type here"
            className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-5 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 text-sm"
          />
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white p-1.5 rounded-full transition-colors disabled:opacity-50"
            disabled={!inputText.trim()}
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <p className="text-[11px] text-gray-500 text-center leading-relaxed mt-2 pb-1">
          By continuing, you consent to recording of this conversation and acknowledge your data will be processed in accordance with the <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default InteractiveAvatar;
