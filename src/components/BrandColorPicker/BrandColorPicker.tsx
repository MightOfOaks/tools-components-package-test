import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import React from 'react'

export const BRAND_COLORS = ['plumbus', 'black', 'white'] as const
export type BrandColor = typeof BRAND_COLORS[number]

export interface BrandColorPickerProps {
  onChange: Dispatch<SetStateAction<BrandColor>>
}

const BrandColorPicker = ({ onChange }: BrandColorPickerProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-bold">Change color:</span>
      {BRAND_COLORS.map((color) => (
        <button
          key={`change-color-${color}`}
          className={clsx(
            'w-8 h-8 rounded border border-white/20',
            'hover:ring-2 focus:ring-2 ring-white/50 transition',
            {
              'bg-plumbus': color == 'plumbus',
              'bg-black': color == 'black',
              'bg-white': color == 'white',
            }
          )}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  )
}

export default BrandColorPicker
