import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface PullToRefreshProps {
    onRefresh: () => Promise<void>; // Function to call when refreshing
    children: ReactNode; // The content to display within the component
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh, children }) => {
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const [pullDistance, setPullDistance] = useState<number>(0);
    const startY = useRef<number>(0);
    const pullThreshold = 100; // Adjust threshold for pull-to-refresh
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        // Only start tracking if the user is at the top of the scroll
        if (containerRef.current && containerRef.current.scrollTop === 0) {
            startY.current = e.touches[0].clientY;
            setPullDistance(0);
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const currentY = e.touches[0].clientY;
        const distanceY = currentY - startY.current;

        // Only allow pulling down when at the top
        if (containerRef.current && containerRef.current.scrollTop === 0 && distanceY > 0) {
            e.preventDefault(); // Prevent default scrolling behavior
            setPullDistance(distanceY);
        }
    };

    const handleTouchEnd = () => {
        if (pullDistance > pullThreshold) {
            setIsRefreshing(true);
            onRefresh().then(() => {
                setIsRefreshing(false);
                setPullDistance(0); // Reset pull distance after refreshing
            });
        } else {
            setPullDistance(0); // Reset pull distance if not refreshed
        }
    };

    useEffect(() => {
        if (isRefreshing) {
            // Reset pull distance when refreshing is triggered
            setPullDistance(0);
        }
    }, [isRefreshing]);

    return (
        <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ overflowY: 'auto', height: '100vh', position: 'relative' }}
        >
            {isRefreshing && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: pullDistance,
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ opacity: pullDistance > pullThreshold ? 1 : 0.5 }}>
                        Refreshing...
                    </div>
                </div>
            )}
            <div style={{ paddingTop: isRefreshing ? pullDistance : 0 }}>
                {children}
            </div>
        </div>
    );
};

export default PullToRefresh;
