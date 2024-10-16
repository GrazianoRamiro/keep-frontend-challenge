import { ReactNode, useMemo, useState } from "react"
import styles from "./SearchBar.module.scss"

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
  const [searchValue, setSearchValue] = useState("") // TODO: implement debounced state

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const isSelected = selectedItems.some((selectedItem) => selectedItem[itemKey] === item[itemKey])
        const matchesSearch = !searchValue || searchEval(item, searchValue)

        return !isSelected && matchesSearch
      }),
    [items, selectedItems, searchEval, searchValue, itemKey]
  )

  const noItems = searchValue !== "" && filteredItems.length == 0

  return (
    <div className={styles.wrapper}>
      <label htmlFor={`search-${entity}`} className={styles.title}>
        {title}
      </label>

      <div className={styles.listsWrapper}>
        <ul className={styles.searchInputWrapper}>
          {selectedItems.map((selectedItem) => (
            <li key={selectedItem[itemKey] as React.Key} className={styles.selectedItems}>
              <span>{renderSelected(selectedItem)}</span>

              <button
                onClick={() => {
                  const newSelectedItems = selectedItems.filter((item) => item[itemKey] !== selectedItem[itemKey])
                  setSelectedItems(newSelectedItems)
                }}
                className={styles.selectedItemsButton}
              >
                x
              </button>
            </li>
          ))}

          <li className={styles.searchInputItem}>
            <input
              id={`search-${entity}`}
              type="text"
              name="search"
              autoComplete="off"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
            />
          </li>
        </ul>

        <ul>
          {searchValue &&
            filteredItems.map((item) => {
              return (
                <li key={item[itemKey] as React.Key} className={styles.listItems}>
                  <button
                    onClick={() => {
                      selectedItems.push(item)

                      setSelectedItems(selectedItems)
                      setSearchValue("")
                    }}
                    className={styles.listItemsButton}
                  >
                    {renderItem(item)}
                  </button>
                </li>
              )
            })}

          {noItems && (
            <li className={styles.listItems}>
              <span className={styles.noResultsItem}>We're sorry, we couldn't find any results.</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
