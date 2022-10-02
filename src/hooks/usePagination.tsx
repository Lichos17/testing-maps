import { useState, useEffect } from 'react'
import { Restaurant } from '../interfaces'

export const usePagination = (restaurants: Restaurant[]) => {
  const [currentItems, setCurrentItems] = useState<Restaurant[]>([])
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 4
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(restaurants.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(restaurants.length / 4))
  }, [itemOffset, 4, restaurants])

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 4) % restaurants.length
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    setItemOffset(newOffset)
  }

  return { currentItems, pageCount, handlePageClick }
}
