'use client';

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Main large pastel blob - top right */}
      <div 
        className="absolute -top-32 -right-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(221, 214, 254, 0.5) 0%, rgba(196, 181, 253, 0.3) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'blobFloat1 20s ease-in-out infinite',
        }}
      />
      
      {/* Secondary blob - left side */}
      <div 
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(233, 213, 255, 0.5) 0%, rgba(216, 180, 254, 0.3) 40%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'blobFloat2 25s ease-in-out infinite',
        }}
      />
      
      {/* Accent blob - bottom right */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(245, 208, 254, 0.4) 0%, rgba(232, 190, 255, 0.2) 40%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'blobFloat3 22s ease-in-out infinite',
        }}
      />
      
      {/* Small accent blob - center */}
      <div 
        className="absolute top-2/3 left-1/3 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(199, 210, 254, 0.4) 0%, rgba(165, 180, 252, 0.2) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'blobFloat4 18s ease-in-out infinite',
        }}
      />

      {/* Extra soft glow - top center */}
      <div 
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(253, 224, 255, 0.4) 0%, transparent 60%)',
          filter: 'blur(70px)',
          animation: 'blobFloat5 24s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-30px, 40px) scale(1.05); }
          50% { transform: translate(20px, -30px) scale(0.95); }
          75% { transform: translate(-15px, 20px) scale(1.02); }
        }
        
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.08); }
          66% { transform: translate(-30px, 30px) scale(0.92); }
        }
        
        @keyframes blobFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, 30px) scale(0.95); }
          50% { transform: translate(-40px, -40px) scale(1.05); }
          75% { transform: translate(20px, -20px) scale(0.98); }
        }
        
        @keyframes blobFloat4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 50px) scale(1.1); }
        }
        
        @keyframes blobFloat5 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          33% { transform: translate(-45%, 30px) scale(1.05); }
          66% { transform: translate(-55%, -20px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
