import { useState, useRef, useEffect } from "react";
import { MicOff, Volume2, X, ArrowUp, Video, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const InteractiveAvatar = () => {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'agent', text: string}[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const userMsg = inputText.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText("");
    setIsTyping(true);
    
    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'agent', text: "Thank you for your message! Our digital experts will review this and get back to you shortly." }]);
      toast({
        title: "Message Sent",
        description: "Your message has been delivered securely.",
      });
    }, 1500);
  };

  const handleBookMeeting = () => {
    setOpen(false);
    navigate("/contact");
  };

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
      <div className="relative w-full h-[220px] bg-black">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white z-20 bg-black/40 p-1.5 rounded-full backdrop-blur-sm"
        >
          <X size={20} />
        </button>
        
        {/* Video Avatar */}
        <div className="absolute inset-0 overflow-hidden">
           <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="AI Agent" className="w-full h-full object-cover opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
        </div>

        {/* Click to unmute overlay */}
        {isMuted && (
          <button 
            onClick={() => setIsMuted(false)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/90 hover:text-white bg-black/60 px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium transition-colors"
          >
            <MicOff size={16} />
            Click to unmute
          </button>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4 flex-1">
        <button 
          onClick={handleBookMeeting}
          className="w-full bg-[#0070f3] hover:bg-[#0051b3] text-white py-3 rounded-full font-medium text-[15px] transition-colors shadow-lg shadow-blue-500/20"
        >
          Book A Meeting
        </button>

        <div className="flex justify-center gap-12 py-1">
          <button 
            onClick={() => {
              setIsMuted(!isMuted);
              toast({ title: isMuted ? "Microphone Enabled" : "Microphone Muted" });
            }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMuted ? <MicOff size={24} className="text-red-500" /> : <MicOff size={24} />}
            <span className="text-xs font-medium">Mic</span>
          </button>
          <button 
            onClick={() => toast({ title: "Speaker Volume Adjusted" })}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Volume2 size={24} />
            <span className="text-xs font-medium">Speaker</span>
          </button>
        </div>

        {/* Chat Area */}
        {messages.length > 0 && (
          <div className="flex flex-col gap-2 max-h-[120px] overflow-y-auto mb-2 no-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={	ext-sm px-4 py-2 rounded-2xl max-w-[85%] }>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="text-sm px-4 py-2 rounded-2xl max-w-[85%] bg-[#1a1a1a] text-gray-400 self-start rounded-tl-sm flex items-center gap-2">
                <Loader2 size={14} className="animate-spin" /> Agent is typing...
              </div>
            )}
          </div>
        )}

        <div className="relative mt-auto">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type here..."
            className="w-full bg-[#111] border border-gray-800 rounded-full py-3 px-5 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 text-sm"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white p-1.5 rounded-full transition-colors disabled:opacity-50"
            disabled={!inputText.trim()}
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <p className="text-[10px] text-gray-600 text-center leading-relaxed mt-1">
          By continuing, you consent to recording of this conversation and acknowledge your data will be processed in accordance with the Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default InteractiveAvatar;
