import { Button, Flex,  Table } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";

import { Tooltip } from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

export type DataGridProps<Data extends object> = {
  data: any[] | undefined;
  columns: ColumnDef<Data, any>[];
  viewMode:string;
};

export function DataGrid<Data extends object>({
  data = [],
  
  columns,
  viewMode
}: DataGridProps<Data>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    
  });

  return (
    <>
      <Flex
        direction="column"
        alignContent="end"
        position="relative"
        flex="1"
        pt="1rem"
        maxH="73vh"
      >
        <Card
          border="1px solid #f7f7f7"
          borderRadius="1rem"
          p="1rem"
          //   pr="1rem"
          overflowY="auto"
          overflowX="auto"
        >
          <Table.Root position="relative">
            <Table.Header position="sticky" top="0">
              {table.getHeaderGroups().map((headerGRoup, idx) => (
                <Table.Row key={idx}>
                  {headerGRoup.headers.map((header, i) => {
                    return (
                      <Table.ColumnHeader
                        key={i}
                        whiteSpace="nowrap"
                        textAlign="center"
                        onClick={header.column.getToggleSortingHandler()}
                        pb="0.75rem"
                        bg="#fff"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Table.ColumnHeader>
                    );
                  })}
                  <Table.ColumnHeader
                    textAlign="center"
                    pl="1rem"
                  ></Table.ColumnHeader>
                </Table.Row>
              ))}
            </Table.Header>
            <Table.Body>
              {table.getRowModel().rows.map((row, i) => (
                <React.Fragment key={row.id}>
                  <Table.Row key={row.id + i}>
                    {row.getVisibleCells().map((cell, i) => {
                      return (
                        <Table.Cell
                          key={cell.id + i}
                          pt="0.5rem"
                          pb="0.55rem"
                          textAlign="center"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Table.Cell>
                      );
                    })}
                    <Table.Cell>
                      <Tooltip content="Shipments List">
                        <Button
                          bg="transparent"
                          color="black"
                          _hover={{ bg: "#0066cc1f" }}
                          onClick={() => navigate(`/${viewMode}/${viewMode=="shipments"?row.original.companyId:row.original.shipmentId}`)}
                        >
                          <MdOutlineOpenInNew />
                        </Button>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                </React.Fragment>
              ))}
            </Table.Body>
          </Table.Root>
        </Card>
      </Flex>
    </>
  );
}
