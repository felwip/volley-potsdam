import ReactDOM from "react-dom/client";

import {
  flexRender,
  getCoreRowModel,
  createColumnHelper,
  useReactTable,
} from "@tanstack/react-table";
import {useMemo, useState} from "react";

export default function ReactTable() {
  type Court = {
    courtId: number;
    courtName: string;
    courtImage: string;
  };

  const defaultData: Court[] = [
    {
      courtId: 1,
      courtName: "Court 1",
      courtImage:
        "https://images.unsplash.com/photo-1611588849922-f5b78aeacce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      courtId: 2,
      courtName: "Court 3",
      courtImage:
        "https://images.unsplash.com/photo-1611588849922-f5b78aeacce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      courtId: 3,
      courtName: "Court 3",
      courtImage:
        "https://images.unsplash.com/photo-1611588849922-f5b78aeacce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
  ];

  const columnHelper = createColumnHelper<Court>();

  const columns = [
    columnHelper.group({
      id: "Monday",
      header: () => <span>Monday</span>,
      // footer: props => props.column.id,
      columns: [
        columnHelper.accessor("courtName", {
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor((row) => row.courtName, {
          id: "court",
          cell: (info) => info.getValue(),
          header: () => <span>Last Name</span>,
          // footer: (props) => props.column.id,
        }),
      ],
    }),
    columnHelper.group({
      header: "Tuesday",
      // footer: (props) => props.column.id,
      columns: [
        columnHelper.accessor("courtId", {
          header: () => "Court 1",
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor("courtImage", {
          header: () => "Court 2",
          footer: (props) => props.column.id,
        }),
      ],
    }),
  ];

  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
