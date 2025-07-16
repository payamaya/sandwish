// components/MapEmbed.tsx
import React from 'react'

interface MapEmbedProps {
  /** The Google Maps embed URL for the location. */
  srcUrl: string
  /** Optional: Width of the iframe (e.g., '100%' or '600px'). Default is '100%'. */
  width?: string
  /** Optional: Height of the iframe (e.g., '300' or '450px'). Default is '300'. */
  height?: string
  /** Optional: Title for the iframe, important for accessibility. */
  title?: string
  /** Optional: Condition to show/hide the map. Default is true. */
  showMap?: boolean
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  srcUrl,
  width = '100%',
  height = '300',
  title = 'Sandwish Inn Location',
  showMap = true,
}) => {
  // If showMap is false, we can return null to not render the iframe at all
  if (!showMap || !srcUrl) {
    return null
  }

  return (
    <iframe
      src={srcUrl}
      width={width}
      height={height}
      style={{ border: 0 }}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      title={title}
      // allowFullScreen // Uncomment if you want to allow full screen mode
    ></iframe>
  )
}

export default MapEmbed
