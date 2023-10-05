import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useEffect, useState} from "react";

const columns = [
    { field: 'firstName', headerName: 'First name' },
    { field: 'lastName', headerName: 'Last name' },
    { field: 'startDate', headerName: 'Start date' },
    { field: 'jobDepartment', headerName: 'Department' },
    { field: 'dateOfBirth', headerName: 'Date of birth' },
    { field: 'street', headerName: 'Street' },
    { field: 'city', headerName: 'City' },
    { field: 'state', headerName: 'State' },
    { field: 'zipCode', headerName: 'Zip code' },
];

export const TableEmployees = ({datas}) => {
    const [employees, setEmployees] = useState({value: []});
    const [filterModel, setFilterModel] = useState({
        items: [],
        quickFilterExcludeHiddenColumns: true,
        quickFilterValues: ['1'],
    });

    useEffect(() => {
        setEmployees({value: datas})
    }, [datas])

    const [columnVisibilityModel, setColumnVisibilityModel] = useState({});

    return (
        <Box sx={{ width: 1 }}>
            <Box sx={{ height: 500 }}>
                <DataGrid
                    columns={columns}
                    rows={employees.value}
                    disableColumnFilter
                    disableDensitySelector
                    slots={{ toolbar: GridToolbar }}
                    filterModel={filterModel}
                    onFilterModelChange={(newModel) => setFilterModel(newModel)}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                    initialState={{
                        ...employees.value,
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    columnVisibilityModel={columnVisibilityModel}
                    onColumnVisibilityModelChange={(newModel) =>
                        setColumnVisibilityModel(newModel)
                    }
                />
            </Box>
        </Box>
    )
}