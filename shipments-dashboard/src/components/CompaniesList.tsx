import { DataGrid } from "./DataGrid";
import {ColumnDef} from "@tanstack/react-table"

interface CompaniesListProps{
    data:any;
}

export const CompaniesList = ({data}:CompaniesListProps) => {

const columns :ColumnDef<(typeof data)[0]>[]=[
    {
        accessorKey:"name",
        header:"Company Name",
        cell:(info)=>info.row.original.name
    }, {
        accessorKey:"registrationNumber",
        header:"Registration Number",
        cell:(info)=>info.row.original.registrationNumber
    }, 
    {
        accessorKey:"businessType",
        header:"Type",
        cell:(info)=>info.row.original.businessType
    }, 
    {
        accessorKey:"addressCity",
        header:"City",
        cell:(info)=>info.row.original.addressCity
    }, 
    {
        accessorKey:"addressCountry",
        header:"Country",
        cell:(info)=>info.row.original.addressCountry
    }
]




  return <DataGrid data={data} columns={columns} viewMode="shipments" />;
};
