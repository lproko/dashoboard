import { DataGrid } from "./DataGrid";
import {ColumnDef} from "@tanstack/react-table"

interface CompaniesListProps{
    data:any;
}

export const ShipmentsList = ({data}:CompaniesListProps) => {

const columns :ColumnDef<(typeof data)[0]>[]=[
    {
        accessorKey:"referenceName",
        header:"Reference Name",
        cell:(info)=>info.row.original.referenceName
    }, {
        accessorKey:"status",
        header:"Status",
        cell:(info)=>info.row.original.status
    }, 
    {
        accessorKey:"destinationName",
        header:"Destination",
        cell:(info)=>info.row.original.destinationName
    }, 
    {
        accessorKey:"departureName",
        header:"Departur",
        cell:(info)=>info.row.original.departureName
    }, 
    {
        accessorKey:"plannedDeparture",
        header:"Plan Dep.",
        cell:(info)=>info.row.original.plannedDeparture
    },
    {
        accessorKey:"plannedDestination",
        header:"Plan Dest.",
        cell:(info)=>info.row.original.plannedDestination
    }
]




  return <DataGrid data={data} columns={columns} viewMode="details" />;
};
