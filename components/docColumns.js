import Icons from "@/hooks/actions/index"
import Avatar from '@mui/material/Avatar';

export const docColumns = [
    // {
    //     name: 'ID',
    //     selector: row => row.id,
    //     sortable: true,
    //     width: "6%"

    // },
    {
        name: 'Profile',
        selector: row => <Avatar src={row.image} />,
        // sortable: true,

    },
    {
        name: 'Med No',
        selector: row => row.medNumber,
        sortable: true,

    },
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,

    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,

    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,

    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,

    },
    {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true,

    },
    // {
    //     name: 'Age',
    //     selector: row => row.age,
    //     sortable: true,
        

    // },
    {
        name: 'Phone',
        selector: row => row.phoneNumber,
        sortable: true,

    },
    {
        name: 'Action',
        selector: row => <Icons />,

    }
]