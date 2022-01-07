 import React from 'react';

import * as react from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'CRM',
    headerName: 'CRM',
    width: 150,
    editable: true,
  },
  {
    field: 'Start',
    headerName: 'Start',
    width: 150,
    editable: true,
  },
  {
    field: 'Deployed',
    headerName: 'Deployed',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'CRM') || ''} ${
        params.getValue(params.id, 'Deployed') || ''
      }`,
  },
];

const rows = [
  { id: 1, Start: '12/5/21', CRM: 'DT', Deployed: 35 },
  { id: 2, Start: '5/1/22', CRM: 'OTP express', Deployed: 42 },
  { id: 3, Start: '2/5/22', CRM: 'Amazon', Deployed: 45 },
  { id: 4, Start: '1/3/21', CRM: 'Duroflex', Deployed: 16 },
  { id: 5, Start: '4/6/21', CRM: 'Rethikas foods', Deployed: null },
//   { id: 6, Start: 'Melisandre', CRM: null, Deployed: 150 },
//   { id: 7, Start: 'Clifford', CRM: 'Ferrara', Deployed: 44 },
//   { id: 8, Start: 'Frances', CRM: 'Rossini', Deployed: 36 },
//   { id: 9, Start: 'Roxie', CRM: 'Harvey', Deployed: 65 },
];
// export default popup
export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
