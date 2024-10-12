import { ReactNode, useMemo, useState } from "react"
import styles from "./search-bar.module.scss"

type SearchBarProps<T> = {
  items: T[]
  entity: string
  itemKey: keyof T
  title: string
  searchEval: (item: T, search: string) => boolean
  renderSelected: (item: T) => ReactNode
  renderItem: (item: T) => ReactNode
}

export function SearchBar<T>({
  items,
  entity,
  itemKey,
  title,
  searchEval,
  renderSelected,
  renderItem,
}: SearchBarProps<T>) {
  const [selectedItems, setSelectedItems] = useState<T[]>([])
  const [searchValue, setSearchValue] = useState("")

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const isSelected = selectedItems.some((selectedItem) => selectedItem[itemKey] === item[itemKey])
        const matchesSearch = !searchValue || searchEval(item, searchValue)

        return !isSelected && matchesSearch
      }),
    [items, selectedItems, searchEval, searchValue, itemKey]
  )

  return (
    <div className={styles.wrapper}>
      <label htmlFor={`search-${entity}`}>{title}</label>

      <ul className={styles.searchWrapper}>
        {selectedItems.map((selectedItem) => (
          <li key={selectedItem[itemKey] as React.Key} className={styles.selectedItems}>
            <span>{renderSelected(selectedItem)}</span>

            <button
              onClick={() => {
                const newSelectedItems = selectedItems.filter((item) => item[itemKey] !== selectedItem[itemKey])
                setSelectedItems(newSelectedItems)
              }}
            >
              x
            </button>
          </li>
        ))}

        <li>
          <input
            id={`search-${entity}`}
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </li>
      </ul>

      <ul>
        {searchValue &&
          filteredItems.map((item) => {
            return (
              <li key={item[itemKey] as React.Key} className={styles.searchItems}>
                <button
                  onClick={() => {
                    selectedItems.push(item)

                    setSelectedItems(selectedItems)
                    setSearchValue("")
                  }}
                >
                  {renderItem(item)}
                </button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
