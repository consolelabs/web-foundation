import type { RowData, ColumnDef as ColDef } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { ReactNode } from 'react'
import { table } from '@consolelabs/theme'

export type ColumnProps<T> = ColDef<T> & { width?: number | string }

export interface TableProps<T> {
  columns: ColumnProps<T>[]
  data: T[]
  isLoading?: boolean
  loadingRows?: number
  className?: string
  wrapperClassName?: string
  onRow?: (
    record: T,
    rowIndex: number,
  ) => {
    onClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
    onDoubleClick?: (
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    onMouseEnter?: (
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    onMouseLeave?: (
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
  }
}

const {
  tableWrapperClsx,
  tableClsx,
  tableHeaderClsx,
  tableDataLoadingClsx,
  tableDataSkeletonClsx,
  tableDataClsx,
  tableRowClsx,
} = table

export default function Table<T extends RowData>({
  data,
  columns,
  isLoading,
  loadingRows = 5,
  className,
  wrapperClassName,
  onRow,
}: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const hasCustomWidth = columns.some((col) => col.width)

  return (
    <div className={tableWrapperClsx({ className: wrapperClassName })}>
      <table className={tableClsx({ className })}>
        {hasCustomWidth ? (
          <colgroup>
            {columns.map((col) => (
              <col
                style={{
                  width:
                    typeof col.width === 'string'
                      ? col.width
                      : `${col.width}px`,
                }}
              />
            ))}
          </colgroup>
        ) : null}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className={tableHeaderClsx()}
                  colSpan={header.colSpan}
                  key={header.id}
                >
                  {!header.isPlaceholder &&
                    (flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    ) as ReactNode)}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading
            ? new Array(loadingRows)
                .fill(
                  new Array(table.getHeaderGroups()[0].headers.length).fill(0),
                )
                .map((headers, rowIdx) => (
                  <tr key={rowIdx}>
                    {headers.map((_: any, idx: number) => (
                      <td className={tableDataLoadingClsx()} key={idx}>
                        <div className={tableDataSkeletonClsx()} />
                      </td>
                    ))}
                  </tr>
                ))
            : null}

          {!isLoading
            ? table.getRowModel().rows.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  className={tableRowClsx({ clickable: !!onRow })}
                  {...(onRow ? onRow(row.original, rowIndex) : {})}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className={tableDataClsx()} key={cell.id}>
                      {
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        ) as ReactNode
                      }
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th colSpan={header.colSpan} key={header.id}>
                  {!header.isPlaceholder &&
                    (flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    ) as ReactNode)}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}
