import React from 'react';
import ImageViewer from 'react-simple-image-viewer';

export default function ImageViewerPanel({images, setCurrentImage, setIsViewerOpen, isViewerOpen, currentImage}) {

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            {isViewerOpen && (
                <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>
    );
}