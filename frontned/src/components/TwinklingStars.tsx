const TwinklingStars = () => {
    const starsCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 180;
    const stars = Array.from({ length: starsCount }).map((_, i) => {
        const isBig = Math.random() < 0.08; // 8% big stars
        return {
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: isBig ? Math.random() * 3 + 4 : Math.random() * 1.5 + 1.5,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2,
            isBig
        };
    });

    return (
        <div className="stars-container absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star absolute opacity-0 bg-transparent flex items-center justify-center"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `${star.isBig ? 'twinkle-big' : 'twinkle'} ${star.duration}s infinite ease-in-out ${star.delay}s`,
                        zIndex: star.isBig ? 2 : 1,
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="white" className="w-full h-full block">
                        <path d="M12 0L14.5 9L24 12L14.5 15L12 24L9.5 15L0 12L9.5 9L12 0Z" />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default TwinklingStars;
